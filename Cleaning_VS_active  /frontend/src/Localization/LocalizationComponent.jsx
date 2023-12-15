import { useState } from "react";
import PropTypes from "prop-types";
import { LocalizationStyled } from "./components/LoacalizationStyled";

import { Languages } from "./Languages/Languages";

const Values = Languages.LocalizationButtons();

export const LocalizationComponent = ({ handleLangChange }) => {
    const [activeId, setActiveId] = useState(1);

    const handleClick = (id, textId) => {
        localStorage.setItem("Language", JSON.stringify(textId));
        handleLangChange(textId);
        setActiveId(id);
    };

    return (
        <LocalizationStyled>
            {Values.map(({ id, text, textId }) => (
                <button
                    key={textId}
                    onClick={() => handleClick(id, textId)}
                    className={
                        activeId === id ? "activeLanguage" : "inactiveLanguage"
                    }
                >
                    {text}
                </button>
            ))}
        </LocalizationStyled>
    );
};
LocalizationComponent.propTypes = {
    handleLangChange: PropTypes.func.isRequired,
};
