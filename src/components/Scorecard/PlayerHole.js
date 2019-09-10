import React, { useState } from 'react'
import PlayerSelect from './PlayerSelect'
import useListItemToggle from '../../hooks/useListItemToggle'
import { FormControl, Input, InputLabel, makeStyles } from '@material-ui/core'
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
const P = styled.p`
    margin: 15px 0 10px;
`
const Button = styled.button`
    margin-top: 2em;
    margin-right: 1.2em;
`
const TotalPointsSpan = styled.span`
    font-weight: 700;
    font-size: 1.25em;
    margin-left: 10px;
`
// const enum = { 
//     'ONCE_PER_HOLE',
//     'ONCE_PER_ROUND',
//     'MULTIPLE_PER_ROUND'
// }

const data = {
    hole: 9,
    players: ['Jason', 'Buster', 'Gob', 'Gene'],
    course: 'Butterfly Fields',
    points: [
        { id: 1, type: 'Birdie', weight: 10, frequency: 'ONCE_PER_HOLE' },
        { id: 2, type: 'Par', weight: 2, frequency: 'ONCE_PER_HOLE' },
        { id: 3, type: 'Bogey', weight: -5, frequency: 'ONCE_PER_HOLE' },
        { id: 4, type: 'Lowest Round', weight: 25, frequency: 'ONCE_PER_ROUND' },
    ]
}

export default function Hole(props) {
    // TODO: add hook for saving form
    
    const [ scoreInput, setScore ] = useState('')
    const [ pointsEarned, setTogglePointsEarned ] = useListItemToggle([])
    // TODO: Is there an easier way to get the point weight of the current point id?
    const totalPointsEarned = () => {
        return pointsEarned.reduce((total, current) => {
                let pointWeightIndex = data.points.findIndex(point => {
                   return point.id === current.id
                })
                return total + data.points[pointWeightIndex].weight
        }, 0)
    }

    const listItemDisabled = (pointFrequency) => {
        if (pointFrequency === 'ONCE_PER_HOLE') {
            return pointsEarned.some(pointEarned => {
                return pointEarned.frequency === 'ONCE_PER_HOLE'
            })
        }
        
    }

    const pointsEarnedIncludesPoint = (pointId) => {
        console.log('pointsEarnedIncludesPoint: ', pointsEarned.includes(pointId))
        return pointsEarned.find(pointEarned => {
            return pointEarned.id === pointId
        })
    }

    const generateClass = (pointId, pointFrequency) => {
        if (pointsEarnedIncludesPoint(pointId)) {
            return 'activeListItem'
        } else if (listItemDisabled(pointFrequency)) {
            return 'disabledListItem'
        } else {
            return ''
        }
    }

    console.log('pointsEarned: ', pointsEarned)
    console.log('scoreInput: ', scoreInput)

    return (
        // TODO: Add a MaterialUI Form/FormControl elements??
        <Form>
            <h2>Hole {data.hole}</h2>
            <h3>{data.course}</h3>
            <h3>First Name of Currently Selected Player</h3>
            <PlayerSelect players={data.players} />

            <UL>
                {data.points.map((point, i) => {
                    console.log('xx: ')
                    return (
                        // TODO: disable other score-based points if another hole-based point has been selected

                        <ButtonListItem 
                            key={i}
                            onClick={() => setTogglePointsEarned({   
                                id: point.id, 
                                frequency: point.frequency 
                            })}
                            className={generateClass(point.id, point.frequency)}
                        >
                            <span>{point.type}</span>
                            <span>{point.weight}</span>
                        </ButtonListItem>
                    )
                })}
            </UL>
            {/* TODO: Also add field for manual entry of total points earned? */}
            <P>
                Total Points Earned: <TotalPointsSpan>{totalPointsEarned()}</TotalPointsSpan>
            </P>
            {/* TODO: Add condition that checks for tracking of Net Score; if true add Gross Score and Net Score fields */}
            <FormControl>
                <InputLabel htmlFor="scoreInput">Hole Score</InputLabel>
                <Input 
                    type="input"
                    onChange={(e) => setScore(e.target.value)}
                    value={scoreInput}
                    // id="scoreInput"
                    name="scoreInput"
                />
            </FormControl>
            <br />
            
            <Button>Save</Button>
            <Button>Return to Round</Button>
        </Form>
    )
}
