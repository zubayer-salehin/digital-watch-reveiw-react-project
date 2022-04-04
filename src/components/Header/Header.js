import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";


const Header = () => {
    return (
        <div className='main-header'>
            <div className='header-container'>
                <div className='logo'>
                    <h2>Techno</h2>
                </div>
                <div className='menuBar'>
                    <nav>
                        <ul>
                            <li><Link to="/Home">HOME</Link></li>
                            <li><Link to="/Reveiws">REVEIWS</Link></li>
                            <li><Link to="/Dashboard">DASHBOARD</Link></li>
                            <li><Link to="/Blogs">BLOGS</Link></li>
                            <li><Link to="/About">ABOUT</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;