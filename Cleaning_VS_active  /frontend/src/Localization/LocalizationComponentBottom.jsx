import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { LocalizationStyledBottom } from "./components/LoacalizationStyledBottom";
import { motion, AnimatePresence } from "framer-motion";

import { Languages } from "./Languages/Languages";

const Values = Languages.LocalizationButtons();

export const LocalizationComponentBottom = ({ handleLangChange }) => {
    const [activeId, setActiveId] = useState(1);
    const [Open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setOpen(true);
            } else {
                setOpen(false);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClick = (id, textId) => {
        localStorage.setItem("Language", JSON.stringify(textId));
        handleLangChange(textId);
        setActiveId(id);
        setOpen(!Open);
    };

    return (
        <LocalizationStyledBottom>
            <section className="MenuLanguageList">
                <AnimatePresence>
                    {Open || window.innerWidth >= 1024 ? (
                        <section className="ButtonFixed">
                            {Values.map(({ id, text, textId }) => (
                                <motion.button
                                    key={textId}
                                    onClick={() => handleClick(id, textId)}
                                    className={
                                        activeId === id
                                            ? "activeLanguage"
                                            : "inactiveLanguage"
                                    }
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {text}
                                </motion.button>
                            ))}
                        </section>
                    ) : null}
                </AnimatePresence>
                <button
                    className="LanguageImage"
                    onClick={() => setOpen(!Open)}
                >
                    {Values[activeId - 1].text}
                </button>
            </section>
        </LocalizationStyledBottom>
    );
};
LocalizationComponentBottom.propTypes = {
    handleLangChange: PropTypes.func.isRequired,
};
