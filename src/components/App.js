import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import About from './About'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Header from './Header'
import AccountHome from './AccountHome'
import CreateNewLeague from './NewLeague/CreateLeague'
import CreateRound from './League/CreateRound'
import LeagueHome from './League/LeagueHome'
import LeagueStandings from './League/LeagueStandings'
import PlayerRounds from './Scoring/PlayerRounds'
import PlayerRoundDetails from './Scoring/PlayerRoundDetails'
import PlayerScorecard from './Scoring/PlayerScorecard'
import PlayerHole from './Scoring/PlayerHole'
import RoundSummary from './Scoring/RoundSummary'

import AuthCallback from './AuthCallback';
import { BrowserRouter as Router, Route } from "react-router-dom"

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    '.MuiFormLabel-root, .MuiSelect-root, .MuiListItem-button': {
      fontSize: '.8em',
    },
  },
})(() => null);

function App() {
  return (
    <Router>
      <Header />
      <GlobalCss />
      <div id='page-width-control'>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/account" component={AccountHome} />
        <Route path="/create-league" component={CreateNewLeague} />
        <Route path="/create-round" component={CreateRound} />
        {/* TODO: add league id */}
        <Route path="/league" component={LeagueHome} />
        {/* TODO: add league id */}
        <Route path="/standings" component={LeagueStandings} />
        <Route path="/player-hole/:id" component={PlayerHole} />
        {/* TODO: add league and round id */}
        <Route path="/round-summary" component={RoundSummary} />
        {/* TODO: add league, player and round id */}
        <Route exact path="/player-rounds/:playerId" component={PlayerRounds} />
        {/* TODO: which one is the best way?? OR when should IDs be in query params vs query string or not at all?? */}
        {/* <Route path="/player-rounds/:playerId?player-round=roundId" component={PlayerRoundDetails} /> */}
        {/* <Route path="/player-round/:playerId" component={PlayerRoundDetails} /> */}
        <Route path="/player-rounds/:playerId/round/:roundId" component={PlayerRoundDetails} />
        {/* TODO: add round and player id */}
        <Route path="/player-scorecard/:playerId" component={PlayerScorecard} />

        <Route exact path='/callback' component={AuthCallback} />
      </div>
    </Router>
  )
}

export default App
