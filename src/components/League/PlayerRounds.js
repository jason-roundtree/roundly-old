import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const rounds = [
    {
        course: 'Bellevue Muni',
        roundName: 'Bellevue Open',
        date: '9/15/2019',
        points: 20
    },
    {
        course: 'Newcastle GC',
        roundName: 'Thrill on the Hill',
        date: '9/2/2019',
        points: 40
    },
    {
        course: 'Tam o\'Shanter',
        roundName: null,
        date: '8/21/2019',
        points: 30
    },
    {
        course: 'Bellevue Muni',
        roundName: 'Season Opener',
        date: '8/17/2019',
        points: -5
    },
]

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px 10px;
    
    div {
        display: grid;
        align-items: center;
        text-align: center;
        border: 1px solid black;
        padding: 5px;
    }
`
const PageDiv = styled.div`
    padding: 40px 20px 20px;
`

// TODO: add sorting by points, date, course name
export default function PlayerRounds() {
    return (
        <PageDiv>
            <h2>Player Rounds</h2>
            <h3>Jason Roundtree</h3>
            <h3>My Cool League</h3>
            <GridContainer>
                {rounds.map(round => {
                    return (
                        <div>
                            <p>{round.date}</p>
                            <p>{round.course}</p>
                            {round.roundName && <p>{round.roundName}</p>}
                            <p>{round.points}</p>
                        </div>
                    )
                })}
            </GridContainer>
        </PageDiv>
    )
}
