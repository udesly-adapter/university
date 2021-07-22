import React, { useEffect, useState } from 'react';
import './cards.css';

const Cards = () => {

    return (
        <section className="white-section">
            <div className="cards">
                <div className="card card__dark">
                    <h3>No time to work on your next project?</h3>
                    <p>Our team of <strong>Webflow experts</strong> is ready to help you speed up the daily workflow and create professional web projects.</p>
                    <a href="https://studio.udesly.com" target="_blank" rel="noopener noreferrer" className="main-button">Go to Studio</a>
                </div>
                <div className="card">
                    <h3>Do you have questions or issues to solve?</h3>
                    <p>If you have an issue with one of our product don't hesitate to contact our support team. We are here to solve your problems 🙂</p>
                    <a href="https://www.udesly.com/help-center" target="_blank" rel="noopener noreferrer" className="main-button">Help Center</a>
                </div>
            </div>
        </section>
    );
}

export default Cards;