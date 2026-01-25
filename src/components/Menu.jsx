import React from 'react';
import { motion } from 'framer-motion';
import { menuItems } from '../menuData';
import './Menu.css';
import burgerImg from '../assets/burger.png';
import friesImg from '../assets/fries.png';

const Menu = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
        }
    };

    return (
        <section id="menu" className="menu-section">
            <div className="container">
                <motion.div
                    className="menu-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">What We Serve</span>
                    <h2 className="section-title">Our Menu</h2>
                    <p className="section-subtitle">Every burger smashed to perfection, every bite a flavor explosion</p>
                </motion.div>

                <div className="menu-category">
                    <h3 className="category-title">Smash Burgers</h3>
                    <motion.div
                        className="menu-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {menuItems.burgers.map((item) => (
                            <motion.div
                                key={item.id}
                                className="menu-card"
                                variants={cardVariants}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                <div className="card-image-wrapper">
                                    <img src={burgerImg} alt={item.name} />
                                    {item.popular && <span className="badge">🔥 Best Seller</span>}
                                    <div className="card-overlay">
                                        <span className="view-details">View Details</span>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <h4 className="item-name">{item.name}</h4>
                                        <span className="item-price">{item.price}</span>
                                    </div>
                                    <p className="item-desc">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="menu-category">
                    <h3 className="category-title">Loaded Fries</h3>
                    <motion.div
                        className="menu-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {menuItems.fries.map((item) => (
                            <motion.div
                                key={item.id}
                                className="menu-card"
                                variants={cardVariants}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                <div className="card-image-wrapper">
                                    <img src={friesImg} alt={item.name} />
                                    {item.popular && <span className="badge">✨ Must Try</span>}
                                    <div className="card-overlay">
                                        <span className="view-details">View Details</span>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <h4 className="item-name">{item.name}</h4>
                                        <span className="item-price">{item.price}</span>
                                    </div>
                                    <p className="item-desc">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Menu;
