import { useEffect, useContext } from "react";
import {
    Header,
    BodyOrder,
    Services,
    NotesBody,
    Slider,
    FormOrder,
    Comments,
    Answer,
    Footer,
} from "./components";
import { LocalizationComponentBottom } from "./Localization/LocalizationComponentBottom";
import PropTypes from "prop-types";
import { CreatePost } from "./api";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import body from "./components/images/MainSmudge.png";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyleBody = createGlobalStyle`
    :root {
        --primary-orange-color: orange;
        --primary-text-color: #95a4aa;
        --primary-darkblue-color: #accae7;
        --primary-green-color: #c6d73c;
    }
    body{
        background-image: url(${body});
        background-repeat: no-repeat;
        background-size: 100% ;
    }
    html{
        overflow-x: hidden;
    }
`;

export const App = ({
    LanguageContext,
    Languages,
    LocalizationComponent,
    ContextForm,
}) => {
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/languages/");
    }, []);

    const { selectedLang, handleLangChange, langValue } =
        useContext(LanguageContext);

    const useFormContext = useContext(ContextForm);

    return (
        <BrowserRouter>
            <>
                <StyleBody />
                <Header
                    selectedLang={selectedLang}
                    langValue={langValue}
                    LocalizationComponent={LocalizationComponent}
                    handleLangChange={handleLangChange}
                />
                <BodyOrder
                    ContextForm={ContextForm}
                    CreatePost={CreatePost}
                    Languages={Languages}
                    selectedLang={selectedLang}
                    langValue={langValue}
                />
                <Services selectedLang={selectedLang} langValue={langValue} />
                <NotesBody selectedLang={selectedLang} langValue={langValue} />
                <Slider selectedLang={selectedLang} langValue={langValue} />
                <FormOrder
                    langValue={langValue}
                    {...useFormContext}
                    CreatePost={CreatePost}
                    selectedLang={selectedLang}
                />
                <Comments selectedLang={selectedLang} langValue={langValue} />
                <Answer selectedLang={selectedLang} langValue={langValue} />
                <Footer selectedLang={selectedLang} langValue={langValue} />
                <LocalizationComponentBottom
                    handleLangChange={handleLangChange}
                />
                <ToastContainer />
            </>
        </BrowserRouter>
    );
};

App.propTypes = {
    LanguageContext: PropTypes.object.isRequired,
    Languages: PropTypes.object.isRequired,
    LocalizationComponent: PropTypes.elementType.isRequired,
    ContextForm: PropTypes.object.isRequired,
};
