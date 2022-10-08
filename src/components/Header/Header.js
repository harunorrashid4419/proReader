import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { ViewfinderCircleIcon } from '@heroicons/react/24/solid';

const Header = () => {
    return (
        <nav className='header'>
            <div className="logo">
                <a href='/home'>
                    <ViewfinderCircleIcon className='icon'></ViewfinderCircleIcon>
                    <h3>proReader</h3>
                </a>
            </div>
            <div className="link">
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/books'>Books</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;