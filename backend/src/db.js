const data = {
    roundAndCourseInfo: {
        leagueName: 'My Cool League',
        hole: 9,
        course: 'Butterfly Fields',
    },
    
    leagues: [
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
    ],
    pointSettings: [
        {id: '1', type: 'Hole in One', weight: 100, frequency: 'ONCE_PER_HOLE'},
        {id: '2', type: 'Eagle', weight: 40, frequency: 'ONCE_PER_HOLE'},
        {id: '3', type: 'Lowest Round', weight: 25, frequency: 'ONCE_PER_ROUND'},
        {id: '4', type: 'Birdie', weight: 15, frequency: 'ONCE_PER_HOLE'},
        {id: '5', type: 'Par', weight: 4, frequency: 'ONCE_PER_HOLE'},
        {id: '6', type: 'Bogey', weight: -5, frequency: 'ONCE_PER_HOLE'},
        {id: '7', type: 'Double Bogey', weight: -15, frequency: 'ONCE_PER_HOLE'},
        {id: '8', type: '> Double Bogey', weight: -25, frequency: 'ONCE_PER_HOLE'},
        {id: '9', type: 'Swearing', weight: -20, frequency: 'MULTIPLE_PER_ROUND'},
        {id: '10', type: 'Throw Club', weight: -30, frequency: 'MULTIPLE_PER_ROUND'}
    ],
    players: [
        {name: 'Tobias', id: '1'},
        {name: 'Buster', id: '2'},
        {name: 'Gob', id: '3'},
        {name: 'Gene', id: '4'},
        {name: 'Lucille', id: '5'},
        {name: 'Annyong', id: '6'},
        {name: 'Barry', id: '7'},
    ],
    pointsEarned: [
        {playerId: '1', points: 40},
        {playerId: '2', points: 30},
        {playerId: '3', points: 20},
        {playerId: '4', points: 40},
        {playerId: '5', points: 50},
        {playerId: '6', points: 10},
        {playerId: '7', points: 20},
    ],
    // TODO: not sure if this is currently being used:
    leaguePlayer: [
        { id: '11', user: '1', leagueId: '1', rounds: [] },
        { id: '22', user: '2', leagueId: '1', rounds: [] },
        { id: '33', user: '3', leagueId: '1', rounds: [] },
        { id: '44', user: '4', leagueId: '1', rounds: [] },
        { id: '55', user: '5', leagueId: '1', rounds: [] },
        { id: '777', user: '7', leagueId: '1', rounds: [] },
        
        { id: '111', user: '1', leagueId: '2', rounds: [] },
        { id: '333', user: '3', leagueId: '2', rounds: [] },
        { id: '66', user: '6', leagueId: '2', rounds: [] },
        { id: '77', user: '7', leagueId: '2', rounds: [] },
    ],
    
}

export default data

