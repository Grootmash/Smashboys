import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ScrollReveal = ({ children, width = "100%", delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
