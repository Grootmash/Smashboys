import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import neonLogo from '../assets/logo-neon.png';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <span className="section-label">Our Story</span>
                        <h2 className="section-title">Farm to Truck</h2>
                        <p>
                            At Smash Boys, we believe that the best burgers start with the best ingredients.
                            Our "Farm to Truck" philosophy means we source our beef from local farms,
                            ensuring every smash burger is fresh, juicy, and packed with flavor.
                        </p>
                        <p>
                            We don't cut corners. From our handmade patties to our signature Smash Sauce,
                            everything is crafted with passion. Whether you're craving a classic cheeseburger
                            or our loaded fries, we're here to serve you the ultimate street food experience.
                        </p>
                        <div className="about-stats">
                            <div className="stat">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Fresh Beef</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">0</span>
                                <span className="stat-label">Frozen Meat</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">5★</span>
                                <span className="stat-label">Reviews</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="image-frame">
                            <img src={neonLogo} alt="Smash Boys Neon Logo" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
