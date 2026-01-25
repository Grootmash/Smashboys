import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';
import heroBurger from '../assets/hero-burger-final.png';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingChars = "SMASH".split('');

  return (
    <section id="hero" className="hero-container">
      {/* Animated background elements */}
      <div className="hero-bg-elements">
        <div className="hero-gradient-orb orb-1"></div>
        <div className="hero-gradient-orb orb-2"></div>
        <div className="hero-gradient-orb orb-3"></div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="floating-elements"
        style={{ y, opacity }}
      >
        <motion.div
          className="floating-text left"
          animate={{ y: [0, -20, 0], rotate: [-5, -3, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          SMASH
        </motion.div>
        <motion.div
          className="floating-text right"
          animate={{ y: [0, 20, 0], rotate: [5, 3, 5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          BOYS
        </motion.div>
      </motion.div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <span className="badge-fire">🔥</span>
            <span>Atlanta's #1 Smash Burgers</span>
          </motion.div>

          <div className="hero-title-wrapper">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.span
                className="title-line title-smash"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              >
                {floatingChars.map((char, index) => (
                  <motion.span
                    key={index}
                    className="title-char"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.6 + index * 0.1,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 120
                    }}
                    whileHover={{
                      scale: 1.2,
                      color: "#FFD700",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                className="title-line title-boys"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8, type: "spring" }}
              >
                BOYS
              </motion.span>
            </motion.h1>
          </div>

          <motion.div
            className="hero-divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          ></motion.div>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            Real Burgers<span className="tagline-dot">.</span> Real Taste<span className="tagline-dot">.</span>
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.6 }}
          >
            Farm to Truck quality in every bite. Fresh beef, smashed to perfection,
            never frozen. Experience Atlanta's most talked-about burgers.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.6 }}
          >
            <motion.a
              href="#menu"
              className="btn-hero-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Menu</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-hero-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Find Us</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Fresh Beef</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">5K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4.9★</span>
              <span className="stat-label">Google Rating</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 50 }}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        >
          <div className="burger-glow-ring"></div>
          <div className="burger-glow-ring ring-2"></div>
          <div className="burger-glow-ring ring-3"></div>

          <motion.div
            className="burger-container"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="burger-shadow"></div>
            <img src={heroBurger} alt="Delicious Smash Burger" className="hero-burger-img" />
          </motion.div>

          <motion.div
            className="burger-badge fresh-badge"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
          >
            <span>🥩</span>
            <p>Never Frozen</p>
          </motion.div>

          <motion.div
            className="burger-badge quality-badge"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
          >
            <span>⭐</span>
            <p>Premium Quality</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>Scroll to explore</span>
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
