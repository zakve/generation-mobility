import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function AppBar() {
    return (
        <Toolbar className="app-bar" disableGutters="true">
            <Typography variant="h6" color="inherit" className="logo">
                Martin Zaklasnik
            </Typography>
            <IconButton
                aria-label="Linkedin link"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={() => window.open("https://www.linkedin.com/in/zaklasnikm/", "_blank")}
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
            <IconButton
                aria-label="Github link"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={() => window.open("https://github.com/zakve", "_blank")}
            >
                <FontAwesomeIcon icon={faGithub} />
            </IconButton>
        </Toolbar>

    )
}

export default AppBar;