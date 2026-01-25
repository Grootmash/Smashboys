import React from 'react';
import { motion } from 'framer-motion';
import './Location.css';

const Location = () => {
    return (
        <section id="location" className="location-section">
            <div className="container">
                <motion.div
                    className="location-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">Come Find Us</span>
                    <h2 className="section-title">Location</h2>
                </motion.div>

                <div className="location-content">
                    <motion.div
                        className="location-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="location-icon">📍</div>
                        <h3>Current Location</h3>
                        <p>123 Food Truck Alley</p>
                        <p>Atlanta, GA 30301</p>
                    </motion.div>

                    <motion.div
                        className="location-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="location-icon">🕐</div>
                        <h3>Hours</h3>
                        <ul className="hours-list">
                            <li><span>Mon - Wed:</span> 11AM - 8PM</li>
                            <li><span>Thu - Sat:</span> 11AM - 10PM</li>
                            <li><span>Sunday:</span> 12PM - 8PM</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="location-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="location-icon">📱</div>
                        <h3>Follow for Updates</h3>
                        <p>Live location tracker coming soon!</p>
                        <p className="social-tag">@smashboysatl</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Location;
