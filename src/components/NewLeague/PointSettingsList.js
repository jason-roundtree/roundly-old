import React from 'react'
import styled from 'styled-components'
import trash from '../../images/trashCan.svg'

const UL = styled.ul` margin-top: 10px; `
const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 0 7px;
    border: 1px solid rgb(191, 192, 196);
    border-radius: 3px;
    width: 100%;
    max-width: 400px;
`
const PointInput = styled.input`
    width: 80px;
    border: transparent;
    /* border-left: 1px solid rgb(220, 224, 219);
    border-right: 1px solid rgb(220, 224, 219); */
`
const P = styled.p` 
    width: 300px; 
    @media (max-width: 700px) {
        font-size: .75em;
    }
`
const IMG = styled.img`
    /* padding-left: 7px; */
    &:hover { cursor: pointer; }
`

export default function PointSettingsList(props) {
    return (
        <UL>
            {props.pointSettings.map(point => {
                return (
                    <ListItem
                        // TODO: Add key once you have id
                        key={null}
                        tabindex="0"
                    >
                        <P>{point.type}</P>
                        <PointInput
                            type="number"
                            placeholder="0"
                        />
                        <IMG 
                            src={trash} 
                            alt="Trash can icon"
                            height="25"
                            onClick={() => props.deletePoint(point.type)}
                        />
                    </ListItem>
                )
            })}
        </UL>
    )
}
