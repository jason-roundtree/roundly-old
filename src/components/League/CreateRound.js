import React, { useState, useRef, useEffect } from 'react'
import useListItemToggle from '../../hooks/useListItemToggle'
import useInput from '../../hooks/useInput'
import styled from 'styled-components'
import { players } from '../../db'

const Form = styled.form`
    width: 80%;
    margin: 40px auto 0;
    padding: 20px;
`
const Input = styled.input`
    width: 60%;
    /* min-width: 300px; */
    margin: 10px 0;
    /* TODO: noticed S.O. answers saying line-height should be used but not why. Is it for responsiveness on smaller screens? */
    /* line-height: 140%; */
    border: transparent;
    border-bottom: 1px solid rgb(191, 192, 196);
    &::placeholder {
       color: rgb(191, 192, 196);
       opacity: 1;
    }
    @media (max-width: 700px) {
        width: 100%;
    }
`
const P = styled.p`
    margin-top: 20px;
    font-weight: 700;
`
const InputDate = styled(Input)`
    width: 40%;
`
const ButtonListItem = styled.li`
    padding: 10px;
    margin: 5px;
    border: 1px solid rgb(122, 213, 178);
    width: 50%;
    @media (max-width: 700px) {
        width: 100%;
    }
`
const SaveButton = styled.button`
    margin-top: 1.2em;
`
// const P = styled.p`
//     font-style: italic;
// `

export default function CreateRound() {
    const [activePlayers, setToggleActivePlayer] = useListItemToggle([])
    const [inputValues, setInputValue] = useInput({
        roundDate: '', course: '', roundName: ''
    })

    const [inputFocused, setInputFocus] = useState(false)
    const inputRef = useRef()
    function focusInput() {
        inputRef.current.focus()
        setInputFocus(true)
    }
    function blurInput() {
        inputRef.current.blur()
        setInputFocus(false)
    }
    // console.log('inputValues: ', inputValues)
    console.log('activePlayers: ', activePlayers)
    return (
        <div>
            <Form 
                // TODO: setup axios post request
                // onSubmit={}
            >
                <h1>Create New Round</h1>
                <InputDate 
                    type={inputFocused ? 'date' : 'text'}
                    ref={inputRef}
                    onFocus={focusInput}
                    onBlur={blurInput}
                    onChange={setInputValue}
                    value={inputValues.roundDate}
                    name="roundDate"
                    placeholder="Round Date"
                />
                <br />

                <Input 
                    type="text"
                    onChange={setInputValue}
                    value={inputValues.course}
                    name="course"
                    placeholder="Course"
                />
                <br />

                <Input 
                    type="text"
                    onChange={setInputValue}
                    value={inputValues.roundName}
                    name="roundName"
                    placeholder="Round Name"
                />

                <P>Select Players to Activate for this Round</P>
                <ul>
                    {players.map(player => {
                        return (
                            <ButtonListItem
                                key={player.id}
                                onClick={() => setToggleActivePlayer(player.id)}
                                className={activePlayers.includes(player.id) 
                                    ? 'activeListItem' 
                                    : ''
                                }
                            >
                                {player.name}
                            </ButtonListItem>
                        )
                    })}
                </ul>

                <SaveButton>Save Round</SaveButton>
            </Form>
        </div>
    )
}
