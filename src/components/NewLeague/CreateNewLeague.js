import React, { Component } from 'react'
import PlayerList from './PlayerList'
import PointSettingsList from './PointSettingsList'
import styled from 'styled-components'
import { 
    InputLabel, 
    Input,
    FormControl
} from '@material-ui/core'
import { styled as Mui_styled } from '@material-ui/styles'

const Form = styled.form`
    width: 80%;
    margin: 40px auto 0;
    padding: 20px;
`
const H2 = styled.h2`
    margin-top: 20px;
`
const P = styled.p`
    font-style: italic;
`
const Button = styled.button`
    margin-top: 1.2em;
`
const MuiFormControl = Mui_styled(FormControl)({
    marginTop: 20,
    width: '60%',
    // minWidth: 320,
    '@media (max-width: 700px)': {
        width: '100%'
    }
})

export default class CreateNewLeague extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leagueName: '',
            endDate: '',
            playerName: '',
            players: [],
            pointType: '',
            pointSettings: [],
            dateInputFocused: false,
        }
        this.playerTextInput = React.createRef();
        this.pointTypeInput = React.createRef();
    }
    onFocus = () => this.setState({ dateInputFocused: true })

    onBlur = () => this.setState({ dateInputFocused: false })

    handleInputChange = e => {
        // console.log('handleInputChange e: ', e)
        this.setState({ [e.target.name]: e.target.value })
    }
    // TODO: good way to make the next 4 functions DRY??
    addPlayer = () => {
        const { players, playerName } = this.state
        this.setState({
            players: [...players, playerName],
            playerName: ''
        })
        this.playerTextInput.current.focus()
    }

    deletePlayer = player => {
        this.setState({
            players: this.state.players.filter(_player => _player !== player)
        })
    }

    addPointSetting = () => {
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
   
    // TODO: implement
    onSubmit = () => {

    }
    
    render() {
        console.log('CreateNewLeague State: ', this.state)
        return (
            <div>
                <Form>
                    <h1>Create New League</h1>
                    <MuiFormControl>
                        <InputLabel htmlFor="leagueName">League Name</InputLabel>
                        <Input 
                            type="input"
                            name="leagueName"
                            onChange={this.handleInputChange}
                            value={this.state.leagueName}
                        />
                    </MuiFormControl>
                    <br />

                    <MuiFormControl>
                        <InputLabel htmlFor="endDate">End Date</InputLabel>
                        <Input 
                            type={this.state.dateInputFocused || this.state.endDate ? "date" : "text"}
                            name="endDate"
                            onChange={this.handleInputChange}
                            value={this.state.endDate}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                        />
                    </MuiFormControl>
                    <br />

                    <MuiFormControl>
                        <InputLabel htmlFor="playerName">Player Name</InputLabel>
                        <Input 
                            type="text"
                            name="playerName"
                            onChange={this.handleInputChange}
                            value={this.state.playerName}
                            ref={this.playerTextInput}
                        />
                    </MuiFormControl>
                    <br />
                    
                    <Button 
                        type="button"
                        onClick={this.addPlayer} 
                        disabled={this.state.playerName === ''}
                    >
                        Add Player
                    </Button>
                    <PlayerList 
                        players={this.state.players}
                        deletePlayer={this.deletePlayer}
                    />

                    <H2>Points Settings</H2>
                    {/* TODO: Maybe put examples in a panel to free up some space? */}
                    <P>Add points and then select the Settings button to assign point values (the value can be positive or negative), along with other setting options. Examples of types of points you can use: Eagle, Birdie, Par, Bogey, Double Bogey, Break a Rule, Swear, Throw/Slam Club, you can get creative...</P>
                    <MuiFormControl>
                        <InputLabel htmlFor="playerName">Point Name</InputLabel>
                        <Input 
                            type="text"
                            name="pointType"
                            onChange={this.handleInputChange}
                            value={this.state.pointType}
                            ref={this.pointTypeInput}
                        />
                    </MuiFormControl>
                    <br />
                    {/* TODO: Setup call to post point type and then forward point id to settings page */}
                    {/* TODO: Setup Combobox to allow quick selection of commonly used types? https://ui.reach.tech/combobox */}
                    <Button 
                        type="button"
                        onClick={this.addPointSetting} 
                        disabled={this.state.pointType === ''}
                    >
                        Add Point
                    </Button>

                    <PointSettingsList 
                        pointSettings={this.state.pointSettings} 
                        deletePoint={this.deletePointSetting}
                    />
                    <br />   

                    {/* TODO: add validation to ensure league name has been added */}
                    <Button 
                        onSubmit={null} 
                    >
                        Save League
                    </Button>
                </Form>
            </div>
        )
    }
}

