import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='row'>
                <Nav className="justify-content-center bg-light" activeKey="/home">
                        <Link className="link-color" to="/">Home</Link>
                        <Link className="link-color" to='/reviews'>Reviews</Link>
                        <Link className="link-color" to="/dashboard">Dashboard</Link>
                        <Link className="link-color" to="blogs">Blogs</Link>
                        <Link className="link-color" to="*">About</Link>
                </Nav>
            </div>
        </div>
    );
};

export default Header;