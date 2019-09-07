import React from 'react'
import { pointSettings } from '../../db'
import styled from 'styled-components'

export default function PointSettings() {
    return (
        <table>
            <tbody>
                {pointSettings.map(point => (
                    <tr>
                        <td>{point.type}</td>
                        <td>{point.weight}</td>
                        <td>Edit</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
