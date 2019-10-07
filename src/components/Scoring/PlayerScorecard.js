import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PageHeaderBlock from '../PageHeaderBlock'

const data = {
    holesPlayed: 18,
    // TODO: should I store front 9, back 9, 18 hole totals??
    scores: ['4', '3', '4', '5', '4', '4', '3', '4', '7', '4', '3', '4', '5', '4', '6', '4', '2', '4']
    // scores: ['4', '3', '4', '5', '4', '4', '3', '4', '7']
}

const H3 = styled.h3`
    font-weight: 500;
    font-size: 1em;
`
const Table = styled.table`
    /* TODO: is overflowX on containing div enough to make the table responsive? */
    /* TODO: POST MVP should I also add a button that allows the table to be oriented vertically? */
`
const ShadedTh = styled.th`
    &:nth-of-type(odd) { background-color: rgb(241,241,241); }
`
const HoleNumberTh = styled(ShadedTh)`
    font-size: .75em;
`
const ShadedTd = styled.td`
    &:nth-of-type(odd) { background-color: rgb(245,245,245); }
`

const reduceScores = scores => {
    return scores.reduce((totalScore, score) => {
        return totalScore + +score
    }, 0)
}

const generateScorecardHeader = () => {
    return [...Array(data.holesPlayed + 1).keys()].slice(1)
}

export default function PlayerScorecard() {
    // const [front9Score, setFront9Score] = useState(0)
    // const [back9Score, setBack9Score] = useState(0)
    // const [totalScore, setTotalScore] = useState(0)
    // TODO: add useEffect to pull data and set score state
    
    return (
        <div style={{overflowX: 'auto', paddingBottom: '5px'}}>
            <h2>Player Scorecard</h2>
            <PageHeaderBlock />
            
            <Table>
                <thead>
                    {/* TODO: Brainstorm different ways to handle this conditional table rendering */}
                    {
                        data.holesPlayed > 9 
                            ? (
                                // TODO: How to change this so that <tr> is outside the conditional, therefore only needing to have 1 Total cell? Can fragments help??
                                <tr>    
                                    {generateScorecardHeader()
                                        .slice(0, 9).map(score => (
                                            <HoleNumberTh key={score}>{score}</HoleNumberTh>
                                        ))}
                                    <th style={{fontWeight: 'bold'}}>In</th>
                                    {generateScorecardHeader()
                                        .slice(9, 18).map(score => (
                                            <HoleNumberTh key={score}>{score}</HoleNumberTh>
                                        ))}
                                    <th style={{fontWeight: 'bold'}}>Out</th>
                                    <th>Total</th>
                                </tr>
                            ) 
                            : (
                                <tr>
                                    {generateScorecardHeader()
                                        .map(score => (
                                            <HoleNumberTh key={score}>{score}</HoleNumberTh>
                                    ))}
                                    <th>Total</th>
                                </tr>
                            )
                    }  
                </thead>

                <tbody>
                    {
                        data.holesPlayed > 9 
                            ? (
                                <tr>    
                                    {data.scores
                                        .slice(0, 9).map(score => (
                                            <ShadedTd key={score}>{score}</ShadedTd>
                                        ))}
                                    <td style={{fontWeight: 'bold'}}>{reduceScores(data.scores.slice(0, 9))}</td>
                                    {data.scores
                                        .slice(9, 18).map(score => (
                                            <ShadedTd key={score}>{score}</ShadedTd>
                                        ))}
                                    <td style={{fontWeight: 'bold'}}>{reduceScores(data.scores.slice(9, 18))}</td>
                                    <td style={{fontWeight: 'bold'}}></td>
                                </tr>
                            ) 
                            : (
                                <tr>
                                    {data.scores.map(score => <ShadedTd key={score}>{score}</ShadedTd>)}
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
