import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import 'antd/dist/antd.css'

export default class AccountHome extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>My Leagues</h2>
                </div>
                <div>
                    <Link to="new-league">
                        <h2>Create New League</h2>
                    </Link>
                </div>
                <div>
                    <h2>Freinds & Foes</h2>
                </div>
                <div>
                    <h2>Account Settings</h2>
                </div>
            </div>
            
        )
    }
}
