import React, { useState } from 'react'
import useListItemToggle from '../../hooks/useListItemToggle'
import styled from 'styled-components'

const UL = styled.ul` margin-top: 10px; `
const ButtonListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 5px 5px 5px 0;
    border: 1px solid rgb(122, 213, 178);;
    width: 60%;
    @media (max-width: 700px) {
        width: 100%;
    }
`
const Form = styled.form`
    width: 80%;
    margin: 40px auto 0;
    padding: 20px;
`
const Input = styled.input`
    width: 50px;
    /* TODO: noticed S.O. answers saying line-height should be used but not why. Is it for responsiveness on smaller screens? */
    /* line-height: 140%; */
    border: transparent;
    border-bottom: 1px solid rgb(191, 192, 196);
`
const Label = styled.label`
    margin-right: 5px;
`
const P = styled.p`
    margin: 15px 0 10px;
`
const SaveButton = styled.button`
    margin-top: 1.2em;
`

const data = {
    hole: 9,
    player: 'Jason',
    course: 'Butterfly Fields',
    points: [
        { id: 1, pointType: 'Birdie', weight: 10 },
        { id: 2, pointType: 'Par', weight: 2 },
        { id: 3, pointType: 'Bogey', weight: -5 },
    ]
}

export default function Hole(props) {
    // TODO: add hook for saving form
    const [scoreInput, setScore] = useState('')
    const [pointsEarned, setTogglePointsEarned] = useListItemToggle([])
    // TODO: Is there an easier way to get the point weight of the current point id?
    const totalPointsEarned = () => {
        return pointsEarned.reduce((total, current) => {
                let pointWeightIndex = data.points.findIndex(point => point.id === current)
                return total + data.points[pointWeightIndex].weight
        }, 0)
    }
    return (
        // TODO: Add some mechanism  to allow easy navigation to entering other players' points for same hole
        <Form>
            <h2>Hole {data.hole}</h2>
            <h3>{data.course}</h3>
            <h3>{data.player}</h3>
            <UL>
                {data.points.map((point, i) => {
                    return (
                        // TODO: disable score-based points if another hole-based point has been selected
                        <ButtonListItem 
                            key={i}
                            onClick={() => setTogglePointsEarned(point.id)}
                            className={pointsEarned.includes(point.id) 
                                ? 'activeListItem' 
                                : ''
                            }
                        >
                            <span>{point.pointType}</span>
                            <span>{point.weight}</span>
                        </ButtonListItem>
                    )
                })}
            </UL>
            {/* TODO: Also add field for manual entry of total points earned? */}
            <P>
                Total Points Earned: {totalPointsEarned()}
            </P>
            {/* TODO: Add condition that checks for tracking of Net Score; if true add Gross Score and Net Score fields */}
            <Label htmlFor="scoreInput">Hole Score:</Label>
            <Input 
                type="input"
                onChange={(e) => setScore(e.target.value)}
                value={scoreInput}
                name="scoreInput"
            />
            <br />
            
            <SaveButton>Save</SaveButton>
        </Form>
    )
}
