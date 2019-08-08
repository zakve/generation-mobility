import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


function AppBar() {
    return (
        <Toolbar className="app-bar">
            <Typography variant="h6" color="inherit" className="logo">
                Martin Zaklasnik
            </Typography>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
            >
                <FontAwesomeIcon icon={faGithub} />
            </IconButton>
        </Toolbar>

    )
}

export default AppBar;