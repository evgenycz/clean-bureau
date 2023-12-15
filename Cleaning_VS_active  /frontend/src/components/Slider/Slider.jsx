import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import {
    KitchenSlider,
    LivingSlider,
    BathRoomSlider,
    AnimatedRoute,
} from "./components";
import { SliderStyled } from "./components/SliderStyled";
import PropTypes from "prop-types";

export const Slider = ({ selectedLang, langValue }) => {
    const userSelect =
        JSON.parse(localStorage.getItem("Language")) || selectedLang;

    const Value = langValue.SliderData[userSelect];

    const [active, setActive] = useState("/kitchen");

    const handleActive = (route) => {
        setActive(route);
    };

    return (
        <SliderStyled>
            <ul className="MainListSliderAll">
                <li
                    onClick={() => handleActive("/kitchen")}
                    className={`ListSlider ${
                        active === "/kitchen" ? "active" : ""
                    }`}
                >
                    <Link to="/kitchen">
                        {Value.map(({ Kitchen }) => Kitchen)}
                    </Link>
                </li>
                <li
                    onClick={() => handleActive("/livingroom")}
                    className={`ListSlider ${
                        active === "/livingroom" ? "active" : ""
                    }`}
                >
                    <Link to="/livingroom">
                        {Value.map(({ LivingRoom }) => LivingRoom)}
                    </Link>
                </li>
                <li
                    onClick={() => handleActive("/bathroom")}
                    className={`ListSlider ${
                        active === "/bathroom" ? "active" : ""
                    }`}
                >
                    <Link to="/bathroom">
                        {Value.map(({ Bathroom }) => Bathroom)}
                    </Link>
                </li>
            </ul>
            <Routes>
                <Route
                    path="/kitchen"
                    element={
                        <AnimatedRoute>
                            <KitchenSlider
                                selectedLang={selectedLang}
                                langValue={langValue}
                            />
                        </AnimatedRoute>
                    }
                />
                <Route
                    path="/livingroom"
                    element={
                        <AnimatedRoute>
                            <LivingSlider
                                selectedLang={selectedLang}
                                langValue={langValue}
                            />
                        </AnimatedRoute>
                    }
                />
                <Route
                    path="/bathroom"
                    element={
                        <AnimatedRoute>
                            <BathRoomSlider
                                selectedLang={selectedLang}
                                langValue={langValue}
                            />
                        </AnimatedRoute>
                    }
                />
                <Route path="/" element={<Navigate to="/kitchen" />} />
            </Routes>
        </SliderStyled>
    );
};

Slider.propTypes = {
    langValue: PropTypes.shape({
        SliderData: PropTypes.object.isRequired,
    }),
    selectedLang: PropTypes.string.isRequired,
};
