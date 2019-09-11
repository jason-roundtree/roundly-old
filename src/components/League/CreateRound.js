import React, { useState, useRef, useEffect } from 'react'
import useListItemToggle from '../../hooks/useListItemToggle'
import useInput from '../../hooks/useInput'
import styled from 'styled-components'
import { 
    InputLabel, 
    Input,
    FormControl, 
} from '@material-ui/core';
import { styled as Mui_styled } from '@material-ui/styles'
import { players } from '../../db'

const Form = styled.form`
    width: 80%;
    margin: 40px auto 0;
    padding: 20px;
`
const P = styled.p`
    margin-top: 20px;
    font-weight: 700;
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
const MuiFormControl = Mui_styled(FormControl)({
    marginTop: 20,
    width: '60%',
    // minWidth: 320,
    '@media (max-width: 700px)': {
        width: '100%'
    }
})

export default function CreateRound() {
    const [activePlayers, setToggleActivePlayer] = useListItemToggle([])
    const [inputValues, setInputValue] = useInput({
        roundDate: '', course: '', roundName: ''
    })

    const [dateInputFocused, setInputFocus] = useState(false)
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
                <MuiFormControl>
                    <InputLabel htmlFor="roundDate">Round Date</InputLabel>
                    <Input 
                        type={dateInputFocused || inputValues.roundDate ? "date" : "text"}
                        name="roundDate"
                        onChange={setInputValue}
                        value={inputValues.roundDate}
                        ref={inputRef}
                        onFocus={focusInput}
                        onBlur={blurInput}
                    />
                </MuiFormControl>
                <br />

                <MuiFormControl>
                    <InputLabel htmlFor="course">Course</InputLabel>
                    <Input 
                        type="text"
                        name="course"
                        onChange={setInputValue}
                        value={inputValues.course}
                    />
                </MuiFormControl>
                <br />

                <MuiFormControl>
                    <InputLabel htmlFor="course">Round Name</InputLabel>
                    <Input 
                        type="text"
                        name="roundName"
                        onChange={setInputValue}
                        value={inputValues.roundName}
                    />
                </MuiFormControl>
                
                <P>Select Players to Activate for this Round</P>
                <ul>
                    {players.map(player => {
                        return (
                            <ButtonListItem
                                key={player.id}
                                onClick={() => setToggleActivePlayer(player.id)}
                                className={activePlayers.includes(player.id) 
                                    ? 'buttonListItem activeListItem' 
                                    : 'buttonListItem'
                                }
                                // TODO: add onKeyPress (return/enter key) handler?
                                tabIndex="0"
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
