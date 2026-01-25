import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-container">
                <motion.div
                    className="footer-main"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="footer-brand">
                        <h2 className="footer-logo">SMASH<span>BOYS</span></h2>
                        <p>Atlanta's favorite smash burgers. Fresh, never frozen, always delicious.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">Our Story</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#location">Find Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <p>📞 (404) 555-SMASH</p>
                        <p>📧 hello@smashboys.com</p>
                    </div>

                    <div className="footer-social">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="#" className="social-icon">IG</a>
                            <a href="#" className="social-icon">FB</a>
                            <a href="#" className="social-icon">TT</a>
                        </div>
                    </div>
                </motion.div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Smash Boys. All rights reserved.</p>
                    <p>Made with 🍔 in Atlanta</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
