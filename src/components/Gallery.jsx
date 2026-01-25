import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

import burgerHero from '../assets/hero-burger-final.png';
import fries from '../assets/fries.png';
import burgerClassic from '../assets/burger.png';

const Gallery = () => {
    const galleryImages = [
        { id: 1, src: burgerHero, alt: 'Smash Burger Close' },
        { id: 2, src: fries, alt: 'Loaded Fries' },
        { id: 3, src: burgerClassic, alt: 'Classic Smash' },
        { id: 4, src: fries, alt: 'Golden Fries' },
        { id: 5, src: burgerHero, alt: 'Big Smash' },
        { id: 6, src: burgerClassic, alt: 'Tasty Burger' },
    ];

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <motion.div
                    className="gallery-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">Food Porn</span>
                    <h2 className="section-title">Gallery</h2>
                </motion.div>

                <div className="gallery-grid">
                    {galleryImages.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`gallery-item ${index === 0 ? 'large' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <img src={item.src} alt={item.alt} />
                            <div className="gallery-overlay">
                                <span className="gallery-label">{item.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
