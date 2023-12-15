import quotes from "./components/images/quotes.svg";
import { CommentsStyled } from "./components/CommentsStyled";
import chevronleft from "./components/images/chevron-left.svg";
import chevronright from "./components/images/chevron-right.svg";
import { useState } from "react";
import { FirstSlide, SecondSlide, ThirdSlide } from "./components";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

export const Comments = ({ langValue, selectedLang }) => {
    const userLanguage =
        JSON.parse(localStorage.getItem("Language")) || selectedLang;

    const ValueHeader = langValue.CommentsHeaderText[userLanguage];
    const ValueText = langValue.CommentsText[userLanguage];

    const [slide, setSlide] = useState(1);

    const NextSlide = () => {
        setSlide((prevSlide) => (prevSlide < 3 ? prevSlide + 1 : 1));
    };

    const PrevSlide = () => {
        setSlide((prevSlide) => (prevSlide > 1 ? prevSlide - 1 : 3));
    };

    const SliderComments = () => {
        return (
            <motion.div
                className="slider-wrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide}
                        className="slide"
                        style={{
                            transform: `translateX(-${(slide - 1) * 100}%)`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FirstSlide quotes={quotes} ValueText={ValueText} />
                        <SecondSlide quotes={quotes} ValueText={ValueText} />
                        <ThirdSlide quotes={quotes} ValueText={ValueText} />
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        );

        // switch (slide) {
        //     case 1:
        //         return <FirstSlide quotes={quotes} ValueText={ValueText} />;
        //     case 2:
        //         return <SecondSlide quotes={quotes} ValueText={ValueText} />;
        //     case 3:
        //         return <ThirdSlide quotes={quotes} ValueText={ValueText} />;
        // }
    };

    return (
        <CommentsStyled>
            <h1 id="section3">
                {ValueHeader.map(({ HeaderComments }) => HeaderComments)}
            </h1>
            {SliderComments()}
            <ul className="ListButton">
                <li>
                    <motion.button
                        onClick={PrevSlide}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img src={chevronleft} alt="chevron" />
                    </motion.button>
                </li>
                <li>
                    <motion.button
                        onClick={NextSlide}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img src={chevronright} alt="chevron" />
                    </motion.button>
                </li>
            </ul>
        </CommentsStyled>
    );
};

Comments.propTypes = {
    langValue: PropTypes.shape({
        CommentsHeaderText: PropTypes.object.isRequired,
        CommentsText: PropTypes.object.isRequired,
    }),
    selectedLang: PropTypes.string.isRequired,
};
