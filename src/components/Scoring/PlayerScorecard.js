import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const data = {
    holesPlayed: 18,
    // TODO: should I store front 9, back 9, 18 hole totals??
    scores: ['4', '3', '4', '5', '4', '4', '3', '4', '7', '4', '3', '4', '5', '4', '6', '4', '2', '4']
    // scores: ['4', '3', '4', '5', '4', '4', '3', '4', '7']
}

const Table = styled.table`
    /* TODO: is overflowX on containing div enough to make the table responsive? */
    /* TODO: POST MVP should I also add a button that allows the table to be oriented vertically? */
`
const Th = styled.th`
    font-size: .8em;
`
const H3 = styled.h3`
    font-weight: 500;
    font-size: 1em;
`

const reduceScores = scores => {
    return scores.reduce((totalScore, score) => {
        return totalScore + +score
    }, 0)
}

const generateScorecardHeader = () => {
    if (data.holesPlayed > 9) {
        return [...Array(data.holesPlayed / 2 + 1).keys()].slice(1)
            .concat([...Array(data.holesPlayed / 2 + 1).keys()].slice(1))
    } else {
        return [...Array(data.holesPlayed + 1).keys()].slice(1)
    }
}

export default function PlayerScorecard() {
    // const [front9Score, setFront9Score] = useState(0)
    // const [back9Score, setBack9Score] = useState(0)
    // const [totalScore, setTotalScore] = useState(0)
    // TODO: add useEffect to pull data and set score state
    
    return (
        <div style={{overflowX: 'auto'}}>
            <h2>Player Scorecard</h2>
            <H3>Player Name</H3>
            <H3>Course Name</H3>
            <H3>9/29/2019</H3>
            
            <Table>
                <thead>
                    {/* TODO: Brainstorm different ways to handle this conditional table rendering */}
                    {
                        data.holesPlayed > 9 
                            ? (
                                <tr>    
                                    {generateScorecardHeader().slice(0, 9).map(score => <Th key={score}>{score}</Th>)}
                                    <th style={{fontWeight: 'bold'}}>In</th>
                                    {generateScorecardHeader().slice(9, 18).map(score => <Th key={score}>{score}</Th>)}
                                    <th style={{fontWeight: 'bold'}}>Out</th>
                                    <th>Total</th>
                                </tr>
                            ) 
                            : (
                                <tr>
                                    {generateScorecardHeader().map(score => <td key={score}>{score}</td>)}
                                    <Th>Total</Th>
                                </tr>
                            )
                    }  
                </thead>

                <tbody>
                    {
                        data.holesPlayed > 9 
                            ? (
                                <tr>    
                                    {data.scores.slice(0, 9).map(score => <td key={score}>{score}</td>)}
                                    <td style={{fontWeight: 'bold'}}>{reduceScores(data.scores.slice(0, 9))}</td>
                                    {data.scores.slice(9, 18).map(score => <td key={score}>{score}</td>)}
                                    <td style={{fontWeight: 'bold'}}>{reduceScores(data.scores.slice(9, 18))}</td>
                                    <td style={{fontWeight: 'bold'}}></td>
                                </tr>
                            ) 
                            : (
                                <tr>
                                    {data.scores.map(score => <td key={score}>{score}</td>)}
                                    <td style={{fontWeight: 'bold'}}></td>
                                </tr>
                            )
                    }
                    {/* TODO: Render a row that shows points earned? */}
                    {/* <tr>
                        {data.scores.map(score => <td key={}>{}</td>)}
                        <td></td>
                    </tr> */}
                </tbody>
            </Table>
            
        </div>
    )
}
