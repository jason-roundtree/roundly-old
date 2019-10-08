import React, { useState, useEffect } from 'react'
import usePositionRank from '../../hooks/usePositionRank'
import styled from 'styled-components'
import data from '../dummyData'       

const Div = styled.div`
    /* width: 80%;
    margin: 40px auto 0;
    padding: 20px; */
    /* @media (max-width: 700px) {
        margin: 10px auto 0;
        padding: 0;
    } */
`
const Table = styled.table`
    margin-top: 20px;
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
const PlaceTd = styled.td`
    font-weight: 500;
`

// TODO: Create one standings component for this and round standings?
export default function RoundSummary() {
    const sortedPlayersByPos = usePositionRank(data.pointsEarned)
    return (
        <>
            <h2>League Standings</h2>
            <h3>{data.leagueName}</h3>
            <Table>
                <thead>
                    <tr>
                        <Th>Place</Th>
                        <Th>Player</Th>
                        <Th>Total Points Earned</Th>
                    </tr>
                </thead>
                <tbody>
                    {sortedPlayersByPos.map(player => {
                        const playerInfo = data.players.find(_player => {
                            return _player.id === player.playerId
                        })

                        return (
                            <tr key={player.playerId}>
                                <PlaceTd>{player.place}</PlaceTd>
                                {/* TODO: Add Link to route to PlayerRounds */}
                                <Td>{playerInfo.name}</Td>
                                <Td className="round-point-total">{player.points}</Td>
                            </tr>
                        )}
                    )}
                </tbody>
            </Table>
        </>
    )
}
            