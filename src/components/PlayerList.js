import React from 'react'

export default function PlayerList(props) {
    return (
        <ul>
            {/* TODO: Add key once you have id */}
            {props.players.map(player => {
                return <li>{player}</li>
            })}
        </ul>
    )
}
