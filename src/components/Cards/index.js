import React, { useEffect, useState } from 'react';
import './cards.css';

const Cards = () => {

    return (
        <section className="white-section">
            <div className="cards">
                <div className="card card__dark">
                    <h3>Our experts are always happy to help you!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
                    <a href="https://studio.udesly.com" target="_blank" rel="noopener noreferrer" className="main-button">Studio</a>
                </div>
                <div className="card">
                    <h3>Our experts are always happy to help you!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
                    <a href="https://www.udesly.com/help-center" target="_blank" rel="noopener noreferrer" className="main-button">Support</a>
                </div>
            </div>
        </section>
    );
}

export default Cards;