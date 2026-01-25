import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';

import Marquee from './components/Marquee';
import SmoothScroll from './components/SmoothScroll';
import './components/Grain.css';

function App() {
    return (
        <SmoothScroll>
            <div className="grain-overlay"></div>
            <div className="app">
                <Navbar />
                <Hero />
                <About />
                <Marquee text="SMASHED FRESH DAILY • NO FROZEN MEAT • FARM TO TRUCK •" />
                <Menu />
                <Gallery />
                <Location />
                <Footer />
            </div>
        </SmoothScroll>
    );
}

export default App;
