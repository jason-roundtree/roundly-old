import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, makeStyles } from '@material-ui/core'
import styled from 'styled-components'

// TODO: set current player from props when the initial player is selected from PlayerHole and the ancestral yet-to-be-established-component
const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        marginTop: 0,
        marginBottom: 30,
        // TODO: How to change size on smaller screens
        minWidth: 320,
    }
}))

export default function PlayerSelect(props) {
    const [ currentPlayer, setCurrentPlayer ] = useState('')
    const classes = useStyles()

    function handlePlayerChange(event) {
        setCurrentPlayer(event.target.value)
    }

    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="changePlayer">
                Change Player
            </InputLabel>
            <Select
                value={currentPlayer}
                onChange={handlePlayerChange}
                className={classes.select}
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
        </FormControl>
    )
}
