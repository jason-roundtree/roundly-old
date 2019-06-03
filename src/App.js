import React from 'react'
import './App.module.css'
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Header from './components/Header'
import { BrowserRouter as Router, Route } from "react-router-dom"
// import styles from './App.module.css'

function App() {
  return (
    <Router>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Router>
  )
}

export default App
