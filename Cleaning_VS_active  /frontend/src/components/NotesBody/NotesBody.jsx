import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { calendar, element, windowImg } from "./components/images/images";
import { StyledNotes } from "./components/StyledNotes";
import PropTypes from "prop-types";

export const NotesBody = ({ selectedLang, langValue }) => {
    const userLanguage =
        JSON.parse(localStorage.getItem("Language")) || selectedLang;
    const Value = langValue.ServiceData[userLanguage];
    const [svgControls, setSvgControls] = useState(false);
    const svgRef = useRef(null);

    const handleScroll = () => {
        if (svgRef.current) {
            const svgTop = svgRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (svgTop < windowHeight * 0.8) {
                setSvgControls(true);
            } else {
                setSvgControls(false);
            }
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const SvgTransform = {
        hidden: {
            opacity: 0,
            pathLength: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 2,
                ease: "easeInOut",
            },
        },
    };
    return (
        <StyledNotes>
            <h1>{Value.map(({ Work }) => Work)}</h1>
            <h3>{Value.map(({ Steps }) => Steps)}</h3>
            <ul className="MainServicesList">
                <li className="ImagesList">
                    <ul>
                        <li>
                            <img src={calendar} alt="calendar" />
                        </li>
                        <li>{Value.map(({ TimeRequest }) => TimeRequest)}</li>
                    </ul>
                </li>
                <li className="SvgListF">
                    <motion.svg
                        ref={svgRef}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 278.25 153.7"
                        width={"12vw"}
                        initial="hidden"
                        animate={svgControls ? "visible" : "hidden"}
                    >
                        <motion.path
                            fill="none"
                            stroke="var(--primary-text-color)"
                            strokeMiterlimit={"10"}
                            strokeDasharray={"1.5"}
                            d="M2.45,32.46c11.33-1.42,153.82-17.84,185.92,45.22c1.76,3.46,14.23,27.95,3.59,48.1
			c-10.86,20.56-40.63,27.34-63.17,21.54c-14.11-3.63-35.28-14.73-39.48-33.74c-7.38-33.35,43.34-64.55,48.1-67.48
			c52.64-32.38,114.99-13.99,133.93-7.53"
                            variants={SvgTransform}
                        />
                        <motion.polygon
                            fill="var(--primary-text-color)"
                            points="266.91,41.46 266.49,40.55 270.96,38.47 268.55,34.16 269.43,33.68 272.35,38.92 			"
                            variants={SvgTransform}
                        />
                    </motion.svg>
                </li>
                <li className="ImagesList">
                    <ul>
                        <li>
                            <img src={element} alt="element" />
                        </li>
                        <li>{Value.map(({ Standarts }) => Standarts)}</li>
                    </ul>
                </li>
                <li className="SvgListS">
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 278.25 153.7"
                        width={"12vw"}
                        initial="hidden"
                        animate={svgControls ? "visible" : "hidden"}
                    >
                        <motion.path
                            fill="none"
                            stroke="var(--primary-text-color)"
                            strokeMiterlimit={"10"}
                            strokeDasharray={"1.5"}
                            d="M18.53,84.96c15.4,8.96,38.62,19.13,66.04,17.23c28.89-2,42.81-16.05,67.48-24.41
			c23.09-7.82,58.4-11.61,110.26,8.93"
                            variants={SvgTransform}
                        />
                        <motion.polygon
                            fill="var(--primary-text-color)"
                            points="257.75,89.38 257.37,88.45 261.94,86.59 259.75,82.17 260.65,81.73 263.31,87.11 			"
                            variants={SvgTransform}
                        />
                    </motion.svg>
                </li>
                <li className="ImagesList">
                    <ul>
                        <li>
                            <img src={windowImg} alt="window" />
                        </li>
                        <li>
                            {Value.map(({ CompletedWork }) => CompletedWork)}
                        </li>
                    </ul>
                </li>
            </ul>
        </StyledNotes>
    );
};

NotesBody.propTypes = {
    langValue: PropTypes.shape({
        ServiceData: PropTypes.object.isRequired,
    }),
    selectedLang: PropTypes.string.isRequired,
};
