import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

const MyHeader = styled.header`
    background-color: rgb(192, 192, 247);
`
const Title = styled.span`
    display: block;
    text-align: center;
    padding: 10px 0 5px;
`

export default function Header() {
    return (
        <MyHeader role="banner">
            <Title>Roundly</Title>
            <Navbar />
        </MyHeader>
    )
}
