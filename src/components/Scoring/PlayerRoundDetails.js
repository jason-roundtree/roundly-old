import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// TODO: move this file and PlayerRounds to Scorecard folder?
const pointsBreakdown = [
    {id: 1, name: 'Birdie', weight: 10, earned: 3},
    {id: 2, name: 'Par', weight: 2, earned: 8},
    {id: 3, name: 'Bogey', weight: -5, earned: 5},
    {id: 4, name: 'Swearing', weight: -3, earned: 4},
    {id: 5, name: 'Lowest Round', weight: 25, earned: 1}
]

const Div = styled.div`
    width: 80%;
    margin: 40px auto 0;
    padding: 20px;
`
const H3 = styled.h2`
    font-weight: 500;
    font-size: 1em;
`
const PointsEarned = styled.p`
    font-size: 1.3em;
    font-weight: 700;
    margin-top: 20px;
`
const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 5px 5px 5px 0;
    border: 1px solid rgb(122, 213, 178);
    width: 60%;
    @media (max-width: 700px) {
        width: 100%;
    }
`
const BoldSpan = styled.span`
    font-weight: 500;
`

export default function PlayerRoundDetails() {
    const total = pointsBreakdown.reduce((total, current) => {
        return total + (current.weight * current.earned)
    }, 0)
    return (
        
        <Div>
            {/* TODO: should I be using multiple h3s? */}
            <h2>Round Point Breakdown</h2>
            <H3>Player Name</H3>
            <H3>Course Name</H3>
            <H3>9/28/2019</H3>

            <PointsEarned>{total} Points Earned</PointsEarned>

            <ul>
                {pointsBreakdown.map((point, i) => {
                    return (
                        <ListItem
                            id={i}
                        >
                            <BoldSpan>{point.name} 
                                <span style={{fontWeight: 'normal'}}>  
                                    &nbsp;&nbsp; x{point.earned}
                                </span>
                            </BoldSpan>
                            {/* TODO: check if point is one that can only be earned once and then don't show 'x'?? */}
                            {/* <span></span> */}
                            <span>{point.earned * point.weight}</span>
                        </ListItem>
                    )
                })}
            </ul>
            <Link 
                to='/player-scorecard'
            >
                <span>Hole-by-hole Scorecard</span>
            </Link>
        </Div>
       

    )
}
