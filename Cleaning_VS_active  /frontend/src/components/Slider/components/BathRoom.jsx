import { ImagesSlider } from "./images/images";
import { BathStyled } from "./BathRoomStyled";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const BathRoomSlider = ({ selectedLang, langValue }) => {
    const userSelect =
        JSON.parse(localStorage.getItem("Language")) || selectedLang;

    const Value = langValue.SliderTextBathRoom[userSelect];

    const RefElement = useRef();

    const [position, setPosition] = useState({
        top: 0,
        left: 0,
        width: 0,
        height: 0,
    });

    const location = useLocation();

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        <BathStyled
            $dynamicheight={position.height}
            $dynamicweight={position.width}
        >
            <section className="MainImageSection">
                <img
                    ref={RefElement}
                    className="MainImageSlider"
                    src={ImagesSlider.bathroom}
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
        </BathStyled>
    );
};

BathRoomSlider.propTypes = {
    langValue: PropTypes.shape({
        SliderTextBathRoom: PropTypes.object.isRequired,
    }),
    selectedLang: PropTypes.string.isRequired,
};
