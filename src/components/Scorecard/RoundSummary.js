import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import data from './roundData'

const Div = styled.div`
    width: 80%;
    margin: 40px auto 0;
    padding: 20px;
    @media (max-width: 700px) {
        margin: 10px auto 0;
        padding: 0;
    }
`
const Table = styled.table`
    width: 70%;
    @media (max-width: 700px) {
        width: 100%;
    }
`
const Th = styled.th`
    font-size: 1.1em;
    @media (max-width: 700px) {
        font-size: .85em;
    }
`
const Td = Th.withComponent('td')
const TdHoles = styled(Td)`
    @media (max-width: 700px) {
        display: none;
    }
`
const ThHoles = TdHoles.withComponent('th')


export default function RoundSummary() {
    const [ sortedPlayersByPos, setPlayerPos ] = useState([])
    // TODO: Move to custom hook folder? League leaderboard will probably need the same logic
    useEffect(() => {
        const sortedScores = data.pointsEarned.sort((a, b) => {
            return b.points - a.points
        })
        let lastPointTotal = null, j = 0
        for (let i = 0; i < sortedScores.length; i++) {
            if (sortedScores[i].points !== lastPointTotal) {
                j++
                sortedScores[i].place = j
                lastPointTotal = sortedScores[i].points
            } else {
                sortedScores[i].place = j
                j++
            }
        }
        setPlayerPos(sortedScores)
        // TODO: Is this the right thing to be passing into this array?
    }, [sortedPlayersByPos])
    
    // console.log('sortedPlayersByPos: ', sortedPlayersByPos)

    return (
        <Div>
            <h2>Round Summary</h2>
            <h3>Course Name</h3>
            <Table>
                <thead>
                    <tr>
                        <Th>Place</Th>
                        <Th>Player</Th>
                        {/* TODO: add funtionality that checks whether group wants to track scores/points by hole */}
                        <ThHoles>Holes Completed</ThHoles>
                        <Th>Round Point Total</Th>
                    </tr>
                </thead>
                <tbody>
                    {sortedPlayersByPos.map(player => {
                        const playerInfo = data.players.find(_player => {
                            return _player.id === player.playerId
                        })

                        return (
                            <tr key={player.playerId}>
                                <Td>{player.place}</Td>
                                    <Td>
                                        <Link to={`player-hole/${player.playerId}`}>
                                            {playerInfo.name}
                                        </Link>
                                    </Td>
                                
                                {/* TODO: update holes to use actual data */}
                                <TdHoles className="holes-completed">8</TdHoles>
                                <Td className="round-point-total">{player.points}</Td>
                            </tr>
                        )}
                    )}
                </tbody>
            </Table>
        </Div>
        
    )
}
