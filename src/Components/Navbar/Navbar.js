import React from 'react'
import "./Navbar.css"
import AppShortcutIcon from '@mui/icons-material/AppShortcut';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <AppShortcutIcon />
                <span>Get The App</span>
            </div>
            <div className="navbar-right">
                <ul>
                    <li>Add restaurant</li>
                    <li>Log in</li>
                    <li>Sign up</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
