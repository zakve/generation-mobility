import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

export default function ContentCard() {
    return (
        <div className="content-card">
            <Container>
                <div className="hero-text">
                    <p className="title-uperline"></p>
                    <Typography id="title1" color="inherit" align="left" variant="h5">
                        Why Netherlands?
                    </Typography>
                </div>
                <p>
                    As a Master's degree student I had opportunity for a six-month exchange stay in another country through Erasmus+ program. I was choosing between Portugal and the Netherlands. On the Googl I was looking for information about every country and because I love cycling, Netherlands was the number 1 choice for me.
                </p>
            </Container>
        </div>
    )
}
