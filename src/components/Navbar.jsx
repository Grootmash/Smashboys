import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { title: 'Home', href: '#hero' },
        { title: 'Story', href: '#about' },
        { title: 'Menu', href: '#menu' },
        { title: 'Contact', href: '#contact' }
    ];

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="navbar-container">
                <a href="#" className="navbar-logo">
                    SMASH<span className="logo-accent">BOYS</span>
                </a>

                {/* Desktop Menu */}
                <ul className="nav-menu desktop">
                    {navLinks.map((link, index) => (
                        <li key={index} className="nav-item">
                            <a href={link.href} className="nav-links">
                                {link.title}
                                <span className="link-hover-effect"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="mobile-menu-overlay"
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <div className="mobile-menu-content">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                    >
                                        <a
                                            href={link.href}
                                            className="mobile-nav-link"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="mobile-link-number">0{index + 1}</span>
                                            {link.title}
                                        </a>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="mobile-menu-decors"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="decor-circle"></div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
