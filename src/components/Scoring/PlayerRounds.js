import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const rounds = [
    {
        id: '1',
        course: 'Bellevue Muni',
        roundName: 'Bellevue Open',
        date: '9/15/2019',
        points: 20
    },
    {
        id: '2',
        course: 'Newcastle GC',
        roundName: 'Thrill on the Hill',
        date: '9/2/2019',
        points: 40
    },
    {
        id: '3',
        course: 'Tam o\'Shanter',
        roundName: null,
        date: '8/21/2019',
        points: 30
    },
    {
        id: '4',
        course: 'Bellevue Muni',
        roundName: 'Season Opener',
        date: '8/17/2019',
        points: -5
    },
]

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
    grid-gap: 10px 10px;
    margin-top: 20px;
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
const H3 = styled.h3`
    font-weight: 500;
    font-size: 1em;
`

// TODO: add sorting by points, date, course name
export default function PlayerRounds() {
    return (
        <PageDiv>
            {/* TODO: should I be using multiple h3s? */}
            {/* TODO: move these styles to global */}
            <h2>Player Rounds</h2>
            <H3>Jason Roundtree</H3>
            <H3>My Cool League</H3>
            {/* TODO: Replace x and y with playerId and roundId */}
            <Link to={`/player-rounds/x/round/y`}>
                <GridContainer>
                    {rounds.map(round => {
                        return (
                            <div key={round.id}>
                                <p>{round.date}</p>
                                <p>{round.course}</p>
                                {round.roundName && <p>{round.roundName}</p>}
                                <p>{round.points}</p>
                            </div>
                        )
                    })}
                </GridContainer>
            </Link>
        </PageDiv>
    )
}
