import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { pointSettings } from '../../db'
import PointSettingModal from './PointSettingModal'
import styled from 'styled-components'

const TdHover = styled.td`
    &:hover { 
        cursor: pointer; 
        color: blue;
    }
`

export default function PointSettings() {
    const [modalActive, setToggleModal] = useState(false)
    const [activePointType, setActivePointType] = useState(null)
    const toggleModal = pointType => {
        if (modalActive) {
            setToggleModal(false)
            setActivePointType(null)
        } else {
            setToggleModal(true)
            setActivePointType(pointType)
        }
    }

    return (
        <table>
            <tbody>
                {pointSettings.map(point => (
                    <tr>
                        <td>{point.type}</td>
                        <td>{point.weight}</td>
                        <TdHover onClick={() => toggleModal(point.type)}>
                            Edit
                        </TdHover>

                        <PointSettingModal 
                            status={modalActive} 
                            onClose={toggleModal}    
                            pointType={activePointType} 
                        />
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
