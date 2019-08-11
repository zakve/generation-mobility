import React from 'react'
import { Container } from '@material-ui/core';

export default function AppFooter() {
    return (
        <div className="app-footer">
            <Container>
                This landing page is created using <a href="https://reactjs.org/">React</a>, <a href="https://material-ui.com/">Material design</a> and images from <a href="https://unsplash.com/">Unsplash</a>. Using React for landing pages is not an ideal solution because the page content is dynamically loaded and that is difficult to read for search robots with resulting in poor SEO (Search Engine Optimization). The main reason for the use of React in this project is to learn and try new technology. All source codes are available on <a href="https://github.com/zakve">Github</a>.
            </Container>
        </div>
    )
}
