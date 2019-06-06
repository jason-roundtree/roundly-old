import React, { Component } from 'react'
import PlayerList from './PlayerList'
import PointsSettings from './PointsSettings'
import styled from 'styled-components'

const Form = styled.form`
    border: 1px solid black;
    border-radius: 5px;
    width: 80%;
    margin: 0 auto;
    padding: 20px;
`
const Input = styled.input`
    width: 70%;
    margin: 10px 0;
    /* TODO: noticed S.O. answers saying line-height should be used but not why. Is it for responsiveness on smaller screens? */
    /* line-height: 140%; */
    font-size: 1.2em;
    border: 1px solid rgb(191, 192, 196);
    &::placeholder {
       color: rgb(191, 192, 196);
       opacity: 1;
    }
    @media (max-width: 700px) {
        width: 85%;
    }
`
const H2 = styled.h2`
    margin-top: 10px;
`
const InputDate = styled(Input)`
    width: 50%;
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
            pointSettings: []
        }
        this.playerTextInput = React.createRef();
    }
    
    handleInputChange = e => {
        const { id, value } = e.target
        this.setState({ [id]: value })
    }
    // TODO: combine the next 2 functions
    addPlayer = e => {
        const { players, playerName } = this.state
        e.preventDefault()
        // stopProp stops Last Pass error in chrome. It seems like it can be omitted with no harm done?
        e.stopPropagation()
        this.setState({
            players: [...players, playerName],
            // TODO: Does this always wait until field above to set?
            playerName: ''
        })
        this.playerTextInput.current.focus()
    }
    addPointSetting = e => {
        const { pointSettings, pointType } = this.state
        e.preventDefault()
        e.stopPropagation()
        this.setState({
            pointSettings: [...pointSettings, pointType]
        })
        // this..current.focus()
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
                    <br />
                    
                    <InputDate 
                        type="date"
                        id="endDate"
                        onChange={this.handleInputChange}
                        value={this.state.endDate}
                        // TODO: Set this up to show End Date when input isn't focused
                        placeholder="End Date"
                    />
                    <br />
                    
                    <Input 
                        type="text"
                        id="playerName"
                        onChange={this.handleInputChange}
                        value={this.state.playerName}
                        placeholder="Player Name"
                        ref={this.playerTextInput}
                    />
                    <button onClick={this.addPlayer}>Add</button>
                    <PlayerList players={this.state.players}/>

                    <H2>Points Settings</H2>
                    <Input 
                        type="text"
                        id="pointType"
                        onChange={this.handleInputChange}
                        value={this.state.pointType}
                        placeholder="Point Type"
                        // ref={this.playerTextInput}
                    />
                    <button onClick={this.addPointSetting}>Add</button>

                </Form>
            </div>
        )
    }
}

