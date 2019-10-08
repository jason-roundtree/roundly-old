import React, { Component } from 'react'
import PointSettings from './PointSettings'
import { players } from '../../db'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
                <h2>League Name</h2>
                <h3>Season End Date: 11/30/2019</h3>

                <h3>Rounds</h3>
                <Link to="create-round">
                    <button>Create New Round</button>
                </Link>

                <h3>Standings</h3>

                <h3>Players</h3>
                <ul>
                    {players.map(player => {
                        return <li>{player.name}</li>
                    })}
                </ul>

                <h3>Default Point Settings</h3>
                <PointSettings />
                
            </div>
        )
    }
}