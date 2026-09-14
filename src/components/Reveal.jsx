import { motion, useReducedMotion } from "framer-motion";

// Fade-up on first scroll into view; disabled when the user prefers reduced motion.
export default function Reveal({ children, delay = 0, className = "" }) {
    const reduce = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
}
