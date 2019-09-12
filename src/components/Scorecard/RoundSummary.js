import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const players = ['Jason', 'Buster', 'Gob', 'Gene']

export default function RoundSummary() {
    return (
        <>
            <h2>Round Summary</h2>
            <h3>Course Name</h3>
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                        {/* TODO: add funtionality that checks whether group wants to track scores/points by hole */}
                        <th>Holes Completed</th>
                        <th>Round Point Total</th>
                    </tr>
                </thead>
                {/* TODO: Determine how to list place and sort by highest points */}
                <tbody>
                    {players.map(player => (
                        <tr>
                            {/* TODO: add RR Links to player-hole */}
                            <td>{player}</td>
                            <td className="holes-completed">8</td>
                            <td className="round-point-total">15</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
        
    )
}
