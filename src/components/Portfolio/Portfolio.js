import React from 'react';
import ScrollDown from '../ScrollDown';
import './Portfolio.scss';

const Portfolio = () => (
    <section className="portfolio page-section" id="portfolio">
        <h2 className="secondary-headline">Portfolio Section</h2>
        <ScrollDown text="Keep scrolling, there is still more to come." main/>
    </section>
)

export default Portfolio;