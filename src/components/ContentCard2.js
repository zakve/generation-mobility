import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

export default function ContentCard() {
    return (
        <div className="content-card-white">
            <Container>
                <div className="hero-text">
                    <p className="title-uperline"></p>
                    <Typography id="title1" color="inherit" align="left" variant="h5">
                        Before flight
                    </Typography>
                </div>
                <p>
                    Paperwork at school, with the other university, financial contract, air tickets, train tickets, accommodation, what to take, not far but for me the first flight in my life, insurance
                </p>
            </Container>
        </div>
    )
}
