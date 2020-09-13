import React from 'react'
import GapSpacer from '../components/GapSpacer'

const Intro = () => {
    return <div className="intro">
        <GapSpacer height="10vh" />
        <div className="intro-grid">
            <div>
                <h1>To build the web together.</h1>
                <p>
                    I create websites and web apps with user value and design thinking in mind. And I love to connect people through technology.
                </p>
            </div>
            <div>
            </div>
        </div>

        <div className="intro-buttons">
            <a href="#about">
                <button className="accent">Learn more</button>
            </a>
            <a href="#social">
                <button className="tertiary">Contact me</button>
            </a>
        </div>
    </div>
}

export default Intro