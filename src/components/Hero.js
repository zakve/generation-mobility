import React from 'react'
import Typography from '@material-ui/core/Typography';
import AppBar from './AppBar';

function Hero() {
    return (
        <div className="hero-image">
            <AppBar />
            <div className="hero-text">
                <Typography color="inherit" align="center" variant="h2" marked="center">
                    My stay in Netherlands
                </Typography>
            </div>
        </div>
    )
}

export default Hero;