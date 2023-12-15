import { ImagesSlider } from "./images/images";
import { KitchenStyled } from "./KitchenStyled";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const KitchenSlider = ({ selectedLang, langValue }) => {
    const userSelect =
        JSON.parse(localStorage.getItem("Language")) || selectedLang;

    const Value = langValue.SliderTextKitchen[userSelect];

    const RefElement = useRef();

    const [position, setPosition] = useState({
        top: 0,
        left: 0,
        width: 0,
        height: 0,
    });

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

    useEffect(() => {
        window.addEventListener(
            "scroll",
            handleScroll || RefElement.offsetWidth != 0
        );
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useLayoutEffect(() => {
        handleScroll();
    }, [location]);

    return (
        <KitchenStyled
            $dynamicheight={position.height}
            $dynamicweight={position.width}
        >
            <section className="MainImageSection">
                <img
                    ref={RefElement}
                    className="MainImageSlider"
                    src={ImagesSlider.kitchen}
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
        </KitchenStyled>
    );
};

KitchenSlider.propTypes = {
    langValue: PropTypes.shape({
        SliderTextKitchen: PropTypes.object.isRequired,
    }),
    selectedLang: PropTypes.string.isRequired,
};
