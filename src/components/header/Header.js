import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='row'>
                <Nav className="justify-content-center bg-light" activeKey="/home">
                        <Link className="link-color btn-warning text-white" to="/">Home</Link>
                        <Link className="link-color btn-warning text-white" to='/reviews'>Reviews</Link>
                        <Link className="link-color btn-warning text-white" to="/dashboard">Dashboard</Link>
                        <Link className="link-color btn-warning text-white" to="blogs">Blogs</Link>
                        <Link className="link-color btn-warning text-white" to="*">About</Link>
                </Nav>
            </div>
        </div>
    );
};

export default Header;