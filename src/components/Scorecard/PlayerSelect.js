import React, { useState, useRef } from 'react'
import { withRouter } from "react-router-dom"
import { 
    FormControl, 
    // InputLabel, 
    MenuItem, 
    Select 
} from '@material-ui/core'
import { styled as Mui_styled } from '@material-ui/styles'

const MuiFormControl = Mui_styled(FormControl)({
    marginTop: 20,
    width: '60%',
    '@media (max-width: 700px)': {
        width: '100%'
    }
})

function PlayerSelect(props) {
    function handlePlayerChange(_, child) {
        // console.log('props.history: ', props.history)
        props.history.push(`/player-hole/${child.props.playerid}`)
    }

    return (
        <MuiFormControl>
            {/* <InputLabel htmlFor="changePlayer" focused={playerSelectFocused}>
                Change Player
            </InputLabel> */}
            {/* TODO: Figure out how to match this font color with other inputs? */}
            {/* TODO: Is there a way to use InputLabel and have the label move back inside of the select input once a new player has been selected? */}
            <Select
                onChange={handlePlayerChange}
                displayEmpty={true}
                renderValue={() => 'Change Player'}
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