import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import usePositionRank from '../../hooks/usePositionRank'
import styled from 'styled-components'
import data from '../dummyData'

const Div = styled.div`
    /* width: 80%;
    margin: 20px auto 0;
    padding: 20px; */
    overflow-x: auto;
    @media (max-width: 700px) {
        /* margin: 10px auto 0; */
        padding: 0;
    }
`
// const Checkbox = styled.input`
//     margin-right: 5px;
// `
const ToggleP = styled.p`
    display: inline-block;
    /* vertical-align: bottom; */
    margin: 4px 10px 0 0;
    font-weight: 700;
`
const ToggleSpan = styled.span`
    font-weight: 500;
`
const ToggleButton = styled.button`
    padding: 4px 7px;
    font-size: .75em;
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
const TdHoles = styled(Td)`
    @media (max-width: 700px) {
        display: none;
    }
`
const ThHoles = TdHoles.withComponent('th')
const TdPlace = styled.td`
    font-weight: 500;
`

export default function RoundSummary() {
    const sortedPlayersByPos = usePositionRank(data.pointsEarned)
    const [trackPlayerScores, setTrackPlayerScores] = useState(true)
    const [trackNetScores, setTrackNetScores] = useState(false)
    // console.log('trackPlayerScores: ', trackPlayerScores)

    function handleToggleScoreTracking() {
        if (trackNetScores) {
            setTrackNetScores(false)
        }
        setTrackPlayerScores(!trackPlayerScores)
    }

    return (
        <Div>
            <h2>Round Summary</h2>
            <h3>Course Name</h3>
            <h3>9/28/2019</h3>

            <ToggleP>
                Tracking Player Hole-by-Hole Scores: {' '}
                <ToggleSpan>
                    {trackPlayerScores ? 'True' : 'False'}
                </ToggleSpan>
            </ToggleP>
            <ToggleButton onClick={() => handleToggleScoreTracking()}>
                Toggle
            </ToggleButton>
            <br />

            <ToggleP>
                Tracking Net Scores: {' '}
                <ToggleSpan>
                    {trackNetScores && trackPlayerScores ? 'True' : 'False'}
                </ToggleSpan>
            </ToggleP>
            <ToggleButton onClick={() => setTrackNetScores(!trackNetScores)}>
                Toggle
            </ToggleButton>

            {/* TODO: work some more responsiveness in here */}
            <Table>
                <thead>
                    <tr>
                        <Th>Place</Th>
                        <Th>Player</Th>
                        {/* TODO: add funtionality that checks whether group wants to track scores/points by hole */}
                        <ThHoles>Holes Completed</ThHoles>
                        <Th>Round Point Total</Th>
                        {trackPlayerScores && (
                            <Th>Total Score</Th>
                        )}
                        {trackNetScores && trackPlayerScores && (
                            <Th>Net Score</Th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {sortedPlayersByPos.map(player => {
                        const playerInfo = data.players.find(_player => {
                            return _player.id === player.playerId
                        })

                        return (
                            <tr key={player.playerId}>
                                <TdPlace>{player.place}</TdPlace>
                                <Td>
                                    <Link to={`player-scorecard/${player.playerId}`}>
                                        {playerInfo.name}
                                    </Link>
                                </Td>
                                {/* TODO: update holes to use actual data */}
                                <TdHoles className="holes-completed">8</TdHoles>
                                <Td className="round-point-total">{player.points}</Td>
                                {trackPlayerScores && (
                                    <Td></Td>
                                )}
                                {trackNetScores && trackPlayerScores && (
                                    <Td></Td>
                                )}
                            </tr>
                        )}
                    )}
                </tbody>
            </Table>
        </Div>
        
    )
}
