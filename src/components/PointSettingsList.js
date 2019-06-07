import React from 'react'
import styled from 'styled-components'

const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 0 7px;
    border: 1px solid rgb(191, 192, 196);
    border-radius: 3px;
    width: 100%;
    max-width: 350px;
`
const PointInput = styled.input`
    width: 80px;
    border: transparent;
`
const P = styled.p`
    width: 300px;
`

export default function PointSettingsList(props) {
    return (
        <ul>
            {/* TODO: Add key once you have id */}
            {props.point.map(pointSetting => {
                return (
                    <ListItem
                        key={null}

                    >
                        <P>{pointSetting}</P>
                        <PointInput
                            type="number"
                            placeholder="0"
                        />
                    </ListItem>
                )
            })}
        </ul>
    )
}
