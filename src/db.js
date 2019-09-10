export const players = [
    {id: '1', name: 'Jason'},
    {id: '2', name: 'Tiger'},
    {id: '3', name: 'Rory'},
    {id: '4', name: 'Dustin'},
    {id: '5', name: 'Rickie'},
    {id: '6', name: 'Brooks'},
    {id: '7', name: 'Bubba'},
]

export const pointSettings = [
    {type: 'holeInOne', weight: 100},
    {type: 'eagle', weight: 40},
    {type: 'lowestRound', weight: 25},
    {type: 'birdie', weight: 15},
    {type: 'par', weight: 4},
    {type: 'bogey', weight: -5},
    {type: 'doubleBogey', weight: -15},
    {type: 'grtDoubleBogey', weight: -25},
    {type: 'swearing', weight: -20},
    {type: 'throwClub', weight: -30}
]

// GraphQL dummy data
export const leagues = [
    {
        id: 1,
        name: 'My Cool League',
        startDate: '1/1/2020',
        endDate: '8/30/2020',
        players: [11, 22, 33, 44, 55, 777],
        archived: false
    },
    {
        id: 2,
        name: 'Another Cool League',
        startDate: '4/1/2020',
        endDate: '7/31/2020',
        players: [111, 333, 66, 77],
        archived: false
    }
]
export const users = [
    { id: 1, username: 'tree', firstName: 'Jason', leagues: []},
    { id: 2, username: 'woody', firstName: 'Tiger', leagues: []},
    { id: 3, username: 'mcAttack', firstName: 'Rory', leagues: []},
    { id: 4, username: 'slickRick', firstName: 'Rickie', leagues: []},
    { id: 5, username: 'dustin the disgusted', firstName: 'Dustin', leagues: []},
    { id: 6, username: 'brooks', firstName: 'Brooks', leagues: []},
    { id: 7, username: 'bubs', firstName: 'Bubba', leagues: []}
]
export const leaguePlayer = [
    { id: 11, user: 1, leagueId: 1, rounds: [] },
    { id: 22, user: 2, leagueId: 1, rounds: [] },
    { id: 33, user: 3, leagueId: 1, rounds: [] },
    { id: 44, user: 4, leagueId: 1, rounds: [] },
    { id: 55, user: 5, leagueId: 1, rounds: [] },
    { id: 777, user: 7, leagueId: 1, rounds: [] },
    
    { id: 111, user: 1, leagueId: 2, rounds: [] },
    { id: 333, user: 3, leagueId: 2, rounds: [] },
    { id: 66, user: 6, leagueId: 2, rounds: [] },
    { id: 77, user: 7, leagueId: 2, rounds: [] },
]