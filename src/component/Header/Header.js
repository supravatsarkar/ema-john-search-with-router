import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            {/* <h1>This is header</h1> */}
            <img className="logo" src={logo} alt="Logo" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory Here</Link>
            </nav>
        </div>
    );
};

export default Header;