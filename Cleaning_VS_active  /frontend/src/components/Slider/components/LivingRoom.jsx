import { ImagesSlider } from "./images/images";
import { LivingStyled } from "./LivingStyled";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const LivingSlider = ({ selectedLang, langValue }) => {
    const userSelect =
        JSON.parse(localStorage.getItem("Language")) || selectedLang;

    const Value = langValue.SliderTextLivingRoom[userSelect];

    const RefElement = useRef();

    const [position, setPosition] = useState({
        top: 0,
        left: 0,
        width: 0,
        height: 0,
    });

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const location = useLocation();

    const handleScroll = () => {
        if (RefElement.current) {
            const { offsetTop, offsetLeft, offsetWidth, offsetHeight } =
                RefElement.current;
            setPosition({
                top: offsetTop,
                left: offsetLeft,
                width: offsetWidth,
                height: offsetHeight,
            });
        }
    };

    useLayoutEffect(() => {
        handleScroll();
    }, [location]);

    return (
        <LivingStyled
            $dynamicheight={position.height}
            $dynamicweight={position.width}
        >
            <section className="MainImageSection">
                <img
                    ref={RefElement}
                    className="MainImageSlider"
                    src={ImagesSlider.livingRoom}
                    alt="kitchen"
                    onLoad={handleScroll}
                />
            </section>
            <ul className="MainListSlider">
                <li>
                    {Object.values(...Value).map((el, index) => (
                        <ul key={index} className="ElementList">
                            <li className="Circle"></li>
                            <li>{el}</li>
                        </ul>
                    ))}
                </li>
            </ul>
        </LivingStyled>
    );
};

LivingSlider.propTypes = {
    langValue: PropTypes.shape({
        SliderTextLivingRoom: PropTypes.object.isRequired,
    }),
    selectedLang: PropTypes.string.isRequired,
};
