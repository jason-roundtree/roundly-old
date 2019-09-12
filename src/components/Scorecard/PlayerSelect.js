import React, { useState } from 'react'
import { 
    FormControl, 
    InputLabel, 
    MenuItem, 
    Select 
} from '@material-ui/core'
import { styled as Mui_styled } from '@material-ui/styles'
// import styled from 'styled-components'

// TODO: set current player from props when the initial player is selected from PlayerHole and the ancestral yet-to-be-established-component

const MuiFormControl = Mui_styled(FormControl)({
    marginTop: 20,
    width: '60%',
    '@media (max-width: 700px)': {
        width: '100%'
    }
})

export default function PlayerSelect(props) {
    const [ currentPlayer, setCurrentPlayer ] = useState('')

    function handlePlayerChange(event) {
        setCurrentPlayer(event.target.value)
    }

    return (
        <MuiFormControl>
            <InputLabel htmlFor="changePlayer">
                Change Player
            </InputLabel>
            <Select
                value={currentPlayer}
                onChange={handlePlayerChange}
                // className={classes.select}
                name="changePlayer"
            >
                {props.players.map(player => {
                    return (
                        <MenuItem 
                            value={player}
                        >
                            {player}
                        </MenuItem>
                    )
                })}
            </Select>
        </MuiFormControl>
    )
}
