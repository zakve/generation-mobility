import React from 'react'
import Typography from '@material-ui/core/Typography';
import AppBar from './AppBar';

import ArrowDownIcon from '@material-ui/icons/ArrowDownward';

function Hero() {
    return (
        <div className="hero-image">
            <AppBar />
            <div className="hero-text">
                <Typography color="inherit" align="center" variant="h2" marked="center">
                    My stay in Netherlands
                </Typography>
                <p className="title-underline"></p>
            </div>
            <ArrowDownIcon className="arrow-down" />
        </div>
    )
}

export default Hero;