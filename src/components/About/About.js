import React from 'react';
import ScrollDown from '../ScrollDown';
import './About.scss';
import Author from './JasonWood.png';

const About = () => (
    <section className="about page-section" id="about">
        <div className="about__container container">
            <div className="about__image">
                <img src={Author} alt="Jason Wood" />
            </div>
            <div className="about__content">
                <h2 className="about__headline secondary-headline">About me</h2>
                <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="about__text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p className="about__name">Jason Wood</p>
            </div>
        </div>
        <ScrollDown text="Keep scrolling, there is still more to come." main/>
    </section>
)

export default About;