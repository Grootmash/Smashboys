import React from "react";
import { motion } from "framer-motion";
import "./Marquee.css";

const Marquee = ({ text, repeat = 6 }) => {
    return (
        <div className="marquee-wrapper">
            <motion.div
                className="marquee-content"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 25,
                }}
            >
                {Array.from({ length: repeat }).map((_, i) => (
                    <span key={i} className="marquee-text">{text}&nbsp;</span>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
