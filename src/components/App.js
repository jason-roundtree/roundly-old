import React from 'react'
import About from './About'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Header from './Header'
import AccountHome from './AccountHome'
import CreateNewLeague from './NewLeague/CreateNewLeague'
import CreateRound from './LeagueHome/CreateRound'
import LeagueHome from './LeagueHome/LeagueHome'
import PlayerHole from './Scorecard/PlayerHole'
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
      <Route path="/new-league" component={CreateNewLeague} />
      <Route path="/create-round" component={CreateRound} />
      {/* <Route path="/league/:id" component={LeagueHome} /> */}
      <Route path="/league" component={LeagueHome} />
      <Route path="/player-hole" component={PlayerHole} />

      <Route exact path='/callback' component={AuthCallback} />
    </Router>
  )
}

export default App
