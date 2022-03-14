import React from 'react'
import Navbar from '../Navbar/Navbar'
import './LandingPage.css'
import Button from '@mui/material/Button';

function LandingPage() {
    return (
        <div className="landingPage">
            <Navbar />
            <div className="landingPage-body">
                <div className="landingPage-body-img">
                    <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" />
                </div>
                <div className="landingPage-body-text">
                    <h4>Say goodbye to unhealthy eating habits and lets build a healthier generation together.</h4>
                </div>
                <div className="landingPage-button">
                    <Button variant="contained">Order Now</Button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
