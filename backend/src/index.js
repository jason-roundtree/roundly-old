import { GraphQLServer } from 'graphql-yoga'
import League from './resolvers/League'
import LeaguePlayer from './resolvers/LeaguePlayer'
import LeaguePointSetting from './resolvers/LeaguePointSetting'
import LeaguePrize from './resolvers/LeaguePrize'
import Mutation from './resolvers/Mutation'
import PlayerHole from './resolvers/PlayerHole'
import PlayerRound from './resolvers/PlayerRound'
import PointEarned from './resolvers/PointEarned'
import Query from './resolvers/Query'
import Round from './resolvers/Round'
import RoundPointSetting from './resolvers/RoundPointSetting'
import User from './resolvers/User'
import db from './db'
import './prisma'

const server = new GraphQLServer({
    // This may need to be relative to the root of the whole project, not just the backend root
    typeDefs: './src/schema.graphql',
    resolvers: {
        League,
        LeaguePlayer,
        LeaguePointSetting,
        LeaguePrize,
        Mutation,
        PlayerHole,
        PlayerRound,
        PointEarned,        
        Query,
        Round,
        RoundPointSetting,
        User
    },
    context: {
        db,
        // pubSub
    }
})

server.start(() => {
    console.log('GQL server is running')
})