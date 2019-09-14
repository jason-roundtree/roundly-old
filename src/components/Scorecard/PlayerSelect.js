import React, { useState } from 'react'
import { Link, withRouter } from "react-router-dom"
import { 
    FormControl, 
    InputLabel, 
    MenuItem, 
    Select 
} from '@material-ui/core'
import { styled as Mui_styled } from '@material-ui/styles'
// import styled from 'styled-components'
// import data from './roundData'

const MuiFormControl = Mui_styled(FormControl)({
    marginTop: 20,
    width: '60%',
    '@media (max-width: 700px)': {
        width: '100%'
    }
})

function PlayerSelect(props) {
    const [ currentPlayer, setCurrentPlayer ] = useState('')
    function handlePlayerChange(e, child) {
        console.log('props.history: ', props.history)
        props.history.push(`/player-hole/${child.props.playerid}`)
        // window.location.pathname = `/player-hole/${child.props.playerId}`
        setCurrentPlayer(e.target.value)
        
    }
    console.log('props.history: ', props.history)
    return (
        <MuiFormControl>
            <InputLabel htmlFor="changePlayer">
                Change Player
            </InputLabel>
            <Select
                value={currentPlayer}
                onChange={handlePlayerChange}
                name="changePlayer"
            >
                {props.players.map(player => {
                    return (
                        <MenuItem 
                            value={player.name}
                            playerid={player.id}
                        >
                            {player.name}
                        </MenuItem>
                    )
                })}
            </Select>
        </MuiFormControl>
    )
}

export default withRouter(PlayerSelect)