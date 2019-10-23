import React, { useState } from 'react'
import PointSettingsModal from '../League/PointSettingModal'
import styled from 'styled-components'
import trash from '../../images/trashCan.svg'

const UL = styled.ul`margin-top: 10px;`
const ListItem = styled.li`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding: 5px 10px;
    margin: 5px;
    border: 1px solid rgb(191, 192, 196);
    /* max-width: 400px; */
`
const P = styled.p` 
    width: 300px; 
    @media (max-width: 700px) {
        font-size: .85em;
    }
`
const SettingsButton = styled.button`    
    padding: 2px 5px;
    @media (max-width: 700px) {
        font-size: .75em;
        margin-right: 7px;
    }
`
const IMG = styled.img`
    &:hover { cursor: pointer; }
`

export default function PointSettingsList(props) {
    const [modalActive, setToggleModal] = useState(false)
    const toggleModal = () => (
        modalActive ? setToggleModal(false) : setToggleModal(true)
    )
    
    return (
        <UL>
            {props.pointSettings.map(point => {
                return (
                    <ListItem
                        // TODO: Add key once you have id
                        key={null}
                        tabindex="0"
                    >
                        <PointSettingsModal 
                            status={modalActive} 
                            onClose={toggleModal}    
                            pointType={point.type}   
                        />
                        <P>{point.type}</P>
                     
                        <SettingsButton
                            type="button"
                            onClick={toggleModal}
                        >
                            Settings
                        </SettingsButton>

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
