import React from 'react'
import Navbar from './Navbar'
// import styles from './Header.module.css'
import './Header.module.css'

export default function Header() {
    return (
        <header role="banner">
            <span>Roundly</span>
            <Navbar />
        </header>
    )
}
