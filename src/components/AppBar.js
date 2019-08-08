import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

function AppBar() {
    return (
        <Toolbar>
            <Typography variant="h6" color="inherit">
                Martin Zaklasnik
            </Typography>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
            >
            </IconButton>
        </Toolbar>

    )
}

export default AppBar;