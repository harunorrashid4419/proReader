import React from 'react';
import './Home.css';
import Lottie from "lottie-react";
import reader from '../asset/reader.json'

const Home = () => {
    return (
        <div className='home-container'>
            <div className="content-container">
                <p className='top-header'>ON SALE!</p>
                <h3>A reader lives a</h3>
                <h3 className='lives-header'>thousand lives <span>before he dies</span></h3>
                <p>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren't very new after all. The man who does not read good books is no better than the man who can't.</p>
                <div className="button">
                    <a className='visit-btn' href='/books'>Visit Store</a>
                    <a className='learn-btn' href='/about'>Learn More</a>
                </div>
            </div>
            <div className="animation">
                <Lottie animationData={reader} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default Home;