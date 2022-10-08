import React from 'react';

const Home = () => {
    return (
        <div className='home-container'>
            <div className="content-container">
                <p>ON SALE!</p>
                <h3>A reader lives a</h3>
                <h3>thousand lives <span>before he dies</span></h3>
                <p>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren't very new after all. The man who does not read good books is no better than the man who can't.</p>
                <div className="button">
                    <a href='/books'>Visit Store</a>
                    <a href='/about'>Learn More</a>
                </div>
            </div>
            <div className="animation">

            </div>
        </div>
    );
};

export default Home;