import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>

            <nav className='nav-container'>
                <div className='half-width'>
                    <a href="/" ><h2 className='nav-logo'>TV Reviewers</h2></a>
                </div>
                <div className='half-width nav-links'>
                    <Link to='/home'>Home</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;