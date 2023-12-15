import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const pageTransition = {
    in: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.2, ease: "easeInOut" },
    },
    out: {
        opacity: 0,
        x: -100,
        transition: { duration: 0.2, ease: "easeInOut" },
    },
};

export const AnimatedRoute = ({ children }) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial="out"
                key={location.pathname}
                animate="in"
                exit="out"
                variants={pageTransition}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

AnimatedRoute.propTypes = {
    children: PropTypes.any.isRequired,
};
