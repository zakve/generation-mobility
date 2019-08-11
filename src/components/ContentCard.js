import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

export default function ContentCard(props) {
    return (
        <div id={props.id} className="content-card">
            <Container>
                <div className="hero-text">
                    <p className="title-uperline"></p>
                    <Typography align="left" variant="h5">
                        {props.title}
                    </Typography>
                </div>
                <p>
                    {props.text}
                </p>
            </Container>
        </div>
    )
}
