import React, { useState, useEffect } from 'react'
import PlayerSelect from './PlayerSelect'
import useListItemToggle from '../../hooks/useListItemToggle'
import { FormControl, Input, InputLabel, makeStyles } from '@material-ui/core'
import styled from 'styled-components'
import data from '../dummyData'

const UL = styled.ul` margin-top: 10px; `

const Form = styled.form`
    width: 80%;
    margin: 40px auto 0;
    padding: 20px;
`
const ButtonListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 5px 5px 5px 0;
    border: 1px solid rgb(122, 213, 178);
    width: 60%;
    /* TODO: change all 700s to 768? */
    @media (max-width: 700px) {
        width: 100%;
    }
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
    margin-bottom: 20px;
`
const H3 = styled.h3`
    font-weight: 500;
    font-size: 1em;
`
// const enum = { 
//     'ONCE_PER_HOLE',
//     'ONCE_PER_ROUND',
//     'MULTIPLE_PER_ROUND'
// }

export default function PlayerHole(props) {
    // TODO: add hook for saving form
    const [ scoreInput, setScore ] = useState('')
    const [ currentPlayer, setCurrentPlayer ] = useState('')
    const [ pointsEarned, setTogglePointsEarned ] = useListItemToggle([])

    const playerId = window.location.pathname.split('/')[2]
    useEffect(() => {
        const player = data.players.find(_player => _player.id === playerId)
        setCurrentPlayer(player.name)
    }, [playerId])

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

    // console.log('playerId: ', playerId)
    // console.log('currentPlayer: ', currentPlayer)
    
    return (
        
        <Form>
            <h2>Hole {data.hole}</h2>
            {/* TODO: should I be using multiple h3s? */}
            {/* TODO: move these styles to global */}
            <H3>{data.course}</H3>
            <H3>{currentPlayer}</H3>
            <PlayerSelect players={data.players} />

            <UL>
                {data.points.map((point, i) => {
                    return (
                        <ButtonListItem 
                            key={i}
                            onClick={() => setTogglePointsEarned({   
                                id: point.id, 
                                frequency: point.frequency 
                            })}
                            className={`buttonListItem ${generateClass(point.id, point.frequency)}`}
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
                    type="number"
                    name="scoreInput"
                    onChange={e => setScore(e.target.value)}
                    value={scoreInput}
                    autoComplete="off"
                    
                />
            </FormControl>
            <br />
            
            <Button>Save</Button>
            <Button>Return to Round</Button>
        </Form>
    )
}
