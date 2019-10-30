import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import usePositionRank from '../../hooks/usePositionRank'
import styled from 'styled-components'
import { 
    Checkbox,
    FormControl, 
    FormControlLabel,
    Radio,
    RadioGroup,
    Input,
    InputLabel
} from '@material-ui/core'
import data from '../dummyData'

const Div = styled.div`
    overflow-x: auto;
    @media (max-width: 700px) {
        padding: 0;
    }
`
const SettingsP = styled.p`
    display: inline;
    margin: 4px 10px 0 0;
    font-weight: 700;
`
const HandicapForNineP = styled.p`
    font-style: italic;
    font-size: .8em;
`
const ToggleSpan = styled.span`
    font-weight: 500;
`
const ToggleButton = styled.button`
    padding: 4px 7px;
    font-size: .75em;
`
const Table = styled.table`
    margin-top: 20px;
    width: 70%;
    @media (max-width: 700px) {
        width: 100%;
    }
`
const Th = styled.th`
    font-size: 1.1em;
    @media (max-width: 700px) {
        font-size: .85em;
    }
`
const Td = Th.withComponent('td')
const TdPlace = styled.td`
    font-weight: 500;
`
const FlexContainer = styled.div`
    display: flex;
`
export default function RoundSummary() {
    const sortedPlayersByPos = usePositionRank(data.pointsEarned)
    const [trackPlayerScores, setTrackPlayerScores] = useState(true)
    const [trackNetScores, setTrackNetScores] = useState(false)
    const [holesPlayed, setHolesPlayed] = useState('18')
    const [usgaChecked, setToggleUsgaCheck] = useState(false)

    function handleToggleScoreTracking() {
        if (trackNetScores) {
            setTrackNetScores(false)
        }
        setTrackPlayerScores(!trackPlayerScores)
    }

    return (
        <Div>
            <h2>Round Summary</h2>
            <h3>Course Name</h3>
            <h3>9/28/2019</h3>

            <SettingsP>
                Tracking Player Hole-by-Hole Scores: {' '}
                <ToggleSpan>
                    {trackPlayerScores ? 'True' : 'False'}
                </ToggleSpan>
            </SettingsP>
            <ToggleButton onClick={() => handleToggleScoreTracking()}>
                Toggle
            </ToggleButton>
            <br />

            <SettingsP>
                Tracking Net Scores: {' '}
                <ToggleSpan>
                    {trackNetScores && trackPlayerScores ? 'True' : 'False'}
                </ToggleSpan>
            </SettingsP>
            <ToggleButton 
                onClick={() => setTrackNetScores(!trackNetScores)}
                disabled={trackPlayerScores === false}
                className={trackPlayerScores === false 
                    ? 'disabledItem' 
                    : ''
                }
            >
                Toggle
            </ToggleButton>
            <br />
            
            <FlexContainer>
                <SettingsP>Holes: {' '}</SettingsP>
                <FormControl>
                    <RadioGroup 
                        aria-label="holesPlayed"
                        name="holesPlayed" 
                        value={holesPlayed} 
                        onChange={e => setHolesPlayed(e.target.value)}
                    >
                        <FormControlLabel 
                            value="18" 
                            control={<Radio color="primary" />} 
                            label="18" 
                        />

                        <FormControlLabel 
                            value="9" 
                            control={<Radio color="primary" />} 
                            label="9" 
                        />
                    </RadioGroup>
                </FormControl>
            </FlexContainer>

            {/* TODO: is this the right way to go about tracking net scores for 9 holed? */}
            {holesPlayed === '9' && trackNetScores && (
                <>
                    <HandicapForNineP>
                        If you would like the handicaps for 9 holes to be calculated according to <a href="https://www.usga.org/articles/2014/07/only-time-for-nine-you-can-still-post-your-score-21474870775.html" target="_blank">USGA specifications</a> please check the following box and then enter the USGA slope rating for the 9 holes being played. Otherwise, 9 hole net scores will be calculated as half of the full 18 hole handicaps.
                    </HandicapForNineP>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={usgaChecked}
                                onChange={() => setToggleUsgaCheck(!usgaChecked)}
                                value="checked"
                                color="primary"
                            />
                        }
                        label="Calculate 9 Hole Handicap According to USGA:"
                        labelPlacement="start"
                    />
                    <br />

                    {usgaChecked && (
                        <FormControl
                            style={{marginLeft: '16px', marginTop: '-8px'}}
                        >
                            <InputLabel htmlFor="usga-rating">9 Hole Rating</InputLabel>
                            <Input id="usga-rating" type="number" style={{padding: '0px'}} />
                        </FormControl>
                    )}
                </>
            )}


            {/* TODO: work some more responsiveness in here, particularly with the first couple of columns to stay static while the rest drag */}
            <Table>
                <thead>
                    <tr>
                        <Th>Place</Th>
                        <Th>Player</Th>
                        <Th>Holes</Th>
                        <Th>Round Point Total</Th>

                        {trackPlayerScores && (
                            <Th>Total Score</Th>
                        )}

                        {trackNetScores && trackPlayerScores && (
                            <>
                                <Th>Handicap</Th>
                                <Th>Net Score</Th>
                            </>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {sortedPlayersByPos.map(player => {
                        const playerInfo = data.players.find(_player => {
                            return _player.id === player.playerId
                        })

                        return (
                            <tr key={player.playerId}>
                                <TdPlace>{player.place}</TdPlace>
                                <Td>
                                    <Link 
                                        to={`player-scorecard/${player.playerId}?trackNet=${trackNetScores}`
                                    }>
                                        {playerInfo.name}
                                    </Link>
                                </Td>
                                {/* TODO: update holes to use actual data */}
                                <Td>8</Td>
                                <Td className="round-point-total">{player.points}</Td>

                                {trackPlayerScores && (
                                    <Td></Td>
                                )}

                                {trackNetScores && trackPlayerScores && (
                                    <>
                                        <Td></Td>
                                        <Td></Td>
                                    </>
                                )}
                            </tr>
                        )}
                    )}
                </tbody>
            </Table>
        </Div>
        
    )
}
