import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="navbar-logo">
                    SMASH BOYS
                </a>

                <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#hero" className="nav-links" onClick={() => setIsOpen(false)}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-links" onClick={() => setIsOpen(false)}>Story</a>
                    </li>
                    <li className="nav-item">
                        <a href="#menu" className="nav-links" onClick={() => setIsOpen(false)}>Menu</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-links" onClick={() => setIsOpen(false)}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
