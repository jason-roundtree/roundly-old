import React from 'react'

export default function PlayerList(props) {
    return (
        <ul>
            {props.players.map(player => {
                return <li>{player}</li>
            })}
        </ul>
    )
}
