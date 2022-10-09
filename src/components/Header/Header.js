import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { ArchiveBoxArrowDownIcon, Bars3Icon, ViewfinderCircleIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='header'>
            <div className="logo">
                <a href='/'>
                    <ViewfinderCircleIcon className='icon'></ViewfinderCircleIcon>
                    <h3>proReader</h3>
                </a>
            </div>
            <div className="NavLink">
                <div onClick={() => setOpen(!open)} className="icon">
                    {
                        open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg> : <Bars3Icon></Bars3Icon>
                    }
                </div>
                <ul className={`pos ${open ? 'top-[110px]' : 'top-[-110px]'}`}>
                    <li><NavLink className={({isActive}) => isActive ? 'style' : undefined} to='/home'>Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? 'style' : undefined} to='/books'>Books</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? 'style' : undefined} to='/about'>About</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;