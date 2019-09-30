import React from 'react'
import About from './About'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Header from './Header'
import AccountHome from './AccountHome'
import CreateNewLeague from './NewLeague/CreateNewLeague'
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

const App = () => {
  return (
    <Router>
      <Header />
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
      <Route path="/player-rounds" component={PlayerRounds} />
      {/* TODO: add round and player id */}
      <Route path="/player-round" component={PlayerRoundDetails} />
      {/* TODO: add round and player id */}
      <Route path="/player-scorecard" component={PlayerScorecard} />

      <Route exact path='/callback' component={AuthCallback} />
    </Router>
  )
}

export default App
