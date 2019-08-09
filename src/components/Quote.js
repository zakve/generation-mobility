import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function Quote() {
    return (
        <Typography align="center" variant="h4" marked="center" className="quote">
            <Container>
                <span className="quote-char">"</span>
                Going to a foreign country was one of the best things in my life! It opened my eyes how the world can work elsewhere, I've learned to deal with things in a foreign language and realized what is important in life.
                <span className="quote-char">"</span>
            </Container>
        </Typography>
    )
}

export default Quote;