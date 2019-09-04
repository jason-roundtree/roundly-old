import React from 'react'
import styled from 'styled-components'
import trash from '../../images/trashCan.svg'

const UL = styled.ul` margin-top: 10px; `
const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 0 7px;
    margin: 5px;
    border: 1px solid rgb(191, 192, 196);
    height: 34px;
    width: 100%;
    max-width: 400px;
`
const P = styled.p` 
    width: 380px; 
    @media (max-width: 700px) {
        font-size: .8em;
    }
`
const IMG = styled.img`
    &:hover { cursor: pointer; }
`

export default function PlayerList(props) {
    return (
        <UL>
            {/* TODO: Add key once you have id */}
            {props.players.map(player => {
                return (
                    <ListItem
                        key={null}
                    >
                        <P>{player}</P>
                        <IMG 
                            src={trash} 
                            alt="Trash can icon"
                            height="25"
                            onClick={() => props.deletePlayer(player)}
                        />
                    </ListItem>
                )
            })}
        </UL>
    )
}

