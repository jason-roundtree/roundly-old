const roundData = {
    hole: 9,
    course: 'Butterfly Fields',
    points: [
        { id: 1, type: 'Birdie', weight: 10, frequency: 'ONCE_PER_HOLE' },
        { id: 2, type: 'Par', weight: 2, frequency: 'ONCE_PER_HOLE' },
        { id: 3, type: 'Bogey', weight: -5, frequency: 'ONCE_PER_HOLE' },
        { id: 4, type: 'Lowest Round', weight: 25, frequency: 'ONCE_PER_ROUND' },
    ],
    players: [
        {name: 'Tobias', id: '1'},
        {name: 'Buster', id: '2'},
        {name: 'Gob', id: '3'},
        {name: 'Gene', id: '4'},
        {name: 'Lucille', id: '5'},
        {name: 'Annyong', id: '6'},
    ],
    pointsEarned: [
        {playerId: '1', points: 40},
        {playerId: '2', points: 30},
        {playerId: '3', points: 20},
        {playerId: '4', points: 40},
        {playerId: '5', points: 50},
        {playerId: '6', points: 10},
    ]
}
export default roundData