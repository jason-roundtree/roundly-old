import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0 0 5px;
`
const ListItem = styled.li`
  margin: 5px 10px;
`

export default function Navbar() {
    return (
        <nav role="navigation">
            <List>
                <ListItem>
                    <Link to="/">Home</Link>
                </ListItem>
                <ListItem>
                    <Link to="/about">About</Link>
                </ListItem>
                <ListItem>
                    <Link to="/signup">Signup</Link>
                </ListItem>
                <ListItem>
                    <Link to="/login">Login</Link>
                </ListItem>
                {/* TODO: for now this route serves as what the user will see when logged in */}
                <ListItem>
                    <Link to="/account">Account</Link>
                </ListItem>
            </List>
        </nav>
    )
}
