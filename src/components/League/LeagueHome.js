import React, { Component } from 'react'
import PointSettings from './PointSettings'
import { players } from '../../db'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const H2 = styled.h2`
    margin-top: 20px;
`

export default class LeagueHome extends Component {
    state = {
        leagueName: '',
        endDate: '',
        players: [],
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <h1>League Name</h1>
                <H2>Season End Date: 11/30/2019</H2>

                <H2>Rounds</H2>
                <Link to="create-round">
                    <button>Create New Round</button>
                </Link>

                <H2>Standings</H2>

                <H2>Players</H2>
                <ul>
                    {players.map(player => {
                        return <li>{player.name}</li>
                    })}
                </ul>

                <H2>Point Settings</H2>
                <PointSettings />
                
            </div>
        )
    }
}