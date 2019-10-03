import React from 'react'
import styled from 'styled-components'

const data = {
    holesPlayed: 18
}

const Table = styled.table`
    /* TODO: figure out how to change layout so that long table doesnt extend past app width on smaller screens. Does overflow even do anything in this scenario? Maybe make scorecard vertical on smaller screens */ 
    /* overflow: hidden; */
`
const Th = styled.th`
    font-size: .8em;
`
const H3 = styled.h3`
    font-weight: 500;
    font-size: 1em;
`

export default function PlayerScorecard() {
    
    const holes = [...Array(data.holesPlayed + 1).keys()].slice(1)

    return (
        <div>
            <h2>Player Scorecard</h2>
            <H3>Player Name</H3>
            <H3>Course Name</H3>
            <H3>9/29/2019</H3>
            
            <Table>
                <thead>
                    <tr>
                        {/* TODO: Add columns for In and Out? */}
                        {holes.map(holeNum => <Th key={holeNum}>{holeNum}</Th>)}
                        <Th>Total</Th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {holes.map(holeNum => <td key={holeNum}></td>)}
                        <td></td>
                    </tr>

                    <tr>
                        {holes.map(holeNum => <td key={holeNum}></td>)}
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
