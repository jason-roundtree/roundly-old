import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const roundData = {
    players: [
        {name: 'Jason', id: 1},
        {name: 'Buster', id: 2},
        {name: 'Gob', id: 3},
        {name: 'Gene', id: 4},
        {name: 'Teddy', id: 5},
        {name: 'Fishoeder', id: 6},
    ],
    pointsEarned: [
        {playerId: 1, points: 40},
        {playerId: 2, points: 30},
        {playerId: 3, points: 20},
        {playerId: 4, points: 40},
        {playerId: 5, points: 50},
        {playerId: 6, points: 10},
    ]
}

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
    useEffect(() => {
        const sortedScores = roundData.pointsEarned.sort((a, b) => {
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
            setPlayerPos(sortedScores)
        }
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
                        const playerInfo = roundData.players.find(_player => _player.id === player.playerId)
                        return (
                            // TODO: insert key once available
                            <tr>
                                <Td>{player.place}</Td>
                                {/* TODO: add RR Links to player-hole */}
                                <Td>{playerInfo.name}</Td>
                                {/* TODO: update these to use actual data */}
                                <TdHoles className="holes-completed">8</TdHoles>
                                <Td className="round-point-total">15</Td>
                            </tr>
                        )}
                    )}
                </tbody>
            </Table>
        </Div>
        
    )
}
