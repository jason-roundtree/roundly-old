import React from 'react'
import styled from 'styled-components'

const H3 = styled.h3`
    font-weight: 500;
    font-size: 1em;
`

const headerText = ['PlayerName', 'CourseName', 'Date']

export default function PageHeaderBlock(headerCount) {
    const headerElements = []
    // TODO: Change `headerText.length` to `headerCount` param once props are being passed
    for (let i = 0; i < headerText.length; i++) {
        headerElements.push(headerText[i])
    }
    return (
        <div>
            {headerElements.map(header => {
                return <H3>{header}</H3>
            })}
        </div>
        
    )

}