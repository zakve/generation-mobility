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
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam neque. Pellentesque ipsum. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Aliquam erat volutpat. Etiam posuere lacus quis dolor. Fusce aliquam vestibulum ipsum. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Integer vulputate sem a nibh rutrum consequat. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin in tellus sit amet nibh dignissim sagittis. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Suspendisse sagittis ultrices augue. Vivamus porttitor turpis ac leo. Nulla quis diam.
                </p>
            </Container>
        </div>
    )
}
