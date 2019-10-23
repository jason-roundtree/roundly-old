import React, { useState } from 'react'
import PointSettings from './PointSettings'
import { players } from '../../db'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const H3 = styled.h3`
    font-weight: 700;
    font-size: 1em;
    margin-top: 10px; 
`

export default function LeagueHome() {
    return (
        <div>
            <h2>League Name</h2>
            <H3>Season End Date:</H3>
            <p>11/30/2019</p>

            {/* TODO: consider making all of these H3s links to dedicated pages */}
            <H3>Rounds:</H3>
            <Link to="create-round">
                <button>Create New Round</button>
            </Link>

            <H3>Standings:</H3>

            {/* TODO: make alphabetical */}
            <H3>Players:</H3>
            <ul>
                {players.map(player => {
                    return <li>{player.name}</li>
                })}
            </ul>

            <H3>Default Point Settings</H3>
            <PointSettings />
            
        </div>
    )
}