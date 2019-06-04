import React, { Component } from 'react'

// import React, { useState } from 'react'
// const [name, setName] = useState('')
// const [endDate, setEndDate] = useState('')
// const [players, setPlayers] = useState([])
// const NewLeague = () => {}

export default class NewLeague extends Component {
    state = {
        leagueName: '',
        endDate: '',
        playerName: '',
        players: []
    }
    handleInputChange = e => {
        const { id, value } = e.target
        this.setState({ [id]: value })
    }
    addPlayer = e => {
        const { players, playerName } = this.state
        e.preventDefault()
        this.setState({
            players: [...players, playerName],
            // TODO: Does this always wait until field above to set?
            playerName: ''
        })
    }
    render() {
        console.log('NewLeague State: ', this.state)
        return (
            <form>
                <input 
                    type="input"
                    id="leagueName"
                    onChange={this.handleInputChange}
                    value={this.state.leagueName}
                    placeholder="League Name"
                />
                <input 
                    type="date"
                    id="endDate"
                    onChange={this.handleInputChange}
                    value={this.state.endDate}
                    placeholder="End Date"
                />
                <input 
                    type="text"
                    id="playerName"
                    onChange={this.handleInputChange}
                    value={this.state.playerName}
                    placeholder="Player Name"
                />
                <button
                    onClick={this.addPlayer}
                >
                    Add Player
                </button>
            </form>
        )
    }
}

