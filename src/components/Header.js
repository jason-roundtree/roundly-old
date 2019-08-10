import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

const StyledHeader = styled.header`
    background-color: rgb(122, 213, 178);
`
const Title = styled.span`
    display: block;
    text-align: center;
    padding: 10px 0 5px;
`

export default function Header() {
    return (
        <StyledHeader role="banner">
            <Title>Roundly</Title>
            <Navbar />
        </StyledHeader>
    )
}
