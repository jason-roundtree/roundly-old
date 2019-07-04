import React, { Component } from 'react'
import PlayerList from './PlayerList'
import PointSettingsList from './PointSettingsList'
import styled from 'styled-components'

// TODO: add validation
const Form = styled.form`
    width: 80%;
    margin: 40px auto 0;
    padding: 20px;
`
const Input = styled.input`
    width: 70%;
    /* min-width: 300px; */
    margin: 10px 0;
    /* TODO: noticed S.O. answers saying line-height should be used but not why. Is it for responsiveness on smaller screens? */
    /* line-height: 140%; */
    border: transparent;
    border-bottom: 1px solid rgb(191, 192, 196);
    &::placeholder {
       color: rgb(191, 192, 196);
       opacity: 1;
    }
    @media (max-width: 700px) {
        width: 100%;
    }
`
const H2 = styled.h2`
    margin-top: 20px;
`
const InputDate = styled(Input)`
    width: 50%;
`
const P = styled.p`
    font-style: italic;
`
// TODO: delete this if you leave buttons below inputs
// const Button = styled.button`
//     margin-left: 7px;
//     @media (max-width: 550px) {
//         margin-left: 0;
//     }
// ` 
const SaveButton = styled.button`
    margin-top: 1.2em;
`

export default class NewLeague extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leagueName: '',
            endDate: '',
            playerName: '',
            players: [],
            pointType: '',
            pointSettings: [],
            dateInputFocused: false
        }
        this.playerTextInput = React.createRef();
        this.pointTypeInput = React.createRef();
    }
    onFocus = () => {
        this.setState({ dateInputFocused: true })
    }

    onBlur = () => {
        this.setState({ dateInputFocused: false })
    }
    handleInputChange = e => {
        const { id, value } = e.target
        this.setState({ [id]: value })
    }
    // TODO: good way to make the next 4 functions DRY??
    addPlayer = e => {
        const { players, playerName } = this.state
        this.setState({
            players: [...players, playerName],
            // TODO: Does this always wait until field above to set?
            playerName: ''
        })
        this.playerTextInput.current.focus()
    }

    deletePlayer = player => {
        this.setState({
            players: this.state.players.filter(_player => _player !== player)
        })
    }

    addPointSetting = e => {
        const { pointSettings, pointType } = this.state
        const pointSetting = {
            type: pointType,
            weight: 0
        }
        this.setState({
            pointSettings: [...pointSettings, pointSetting],
            pointType: ''
        })
        this.pointTypeInput.current.focus()
    }

    deletePointSetting = pointType => {
        this.setState({
            pointSettings: this.state.pointSettings.filter(point => point.type !== pointType)
        })
    }
   
    onSubmit = () => {

    }
    render() {
        console.log('NewLeague State: ', this.state)
        return (
            <div>
                <Form>
                    <h1>Create New League</h1>
                    <Input 
                        type="input"
                        id="leagueName"
                        onChange={this.handleInputChange}
                        value={this.state.leagueName}
                        placeholder="League Name"
                    />
                    
                    <InputDate 
                        type={this.state.dateInputFocused ? "date" : "text"}
                        id="endDate"
                        onChange={this.handleInputChange}
                        value={this.state.endDate}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        placeholder="End Date"
                    />
                    
                    <Input 
                        type="text"
                        id="playerName"
                        onChange={this.handleInputChange}
                        value={this.state.playerName}
                        placeholder="Player Name"
                        ref={this.playerTextInput}
                    />
                    <br />
                    <button 
                        type="button"
                        onClick={this.addPlayer} 
                    >
                        Add Player
                    </button>
                    <PlayerList 
                        players={this.state.players}
                        deletePlayer={this.deletePlayer}
                    />

                    <H2>Points Settings</H2>
                    <P>e.g. Eagle, Birdie, Par, Bogey, Break Rule, Swear, Throw/Slam Club, etc.</P>
                    <Input 
                        type="text"
                        id="pointType"
                        onChange={this.handleInputChange}
                        value={this.state.pointType}
                        placeholder="Point Type"
                        ref={this.pointTypeInput}
                    />
                    <br />
                    <button 
                        type="button"
                        onClick={this.addPointSetting} 
                    >
                        Add Point
                    </button>
                    <PointSettingsList 
                        pointSettings={this.state.pointSettings} 
                        deletePoint={this.deletePointSetting}
                    />
                
                    <SaveButton 
                        onSubmit={null} 
                    >
                        Save League
                    </SaveButton>
                </Form>
            </div>
        )
    }
}

