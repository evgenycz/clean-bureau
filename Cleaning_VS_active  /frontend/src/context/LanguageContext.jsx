import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { LanguagesApi } from "../api";
import { MutatingDots } from "react-loader-spinner";

export const LanguageContext = createContext();

const Preloader = () => (
    <div>
        <MutatingDots
            height="100"
            width="100"
            color="#accae7"
            secondaryColor="#c6d73c"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
);

export const LanguageProvider = ({ children, initialLanguage }) => {
    const [selectedLang, setSelectedLang] = useState(initialLanguage);
    const [langValue, setLangValue] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await LanguagesApi();
                if (data) {
                    setLangValue(data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (!localStorage.getItem("Language")) {
            handleLangChange("cz");
            localStorage.setItem("Language", "cz");
        } else {
            handleLangChange(localStorage.getItem("Language"));
        }
    }, []);

    const handleLangChange = (lang) => {
        setSelectedLang(lang);
    };

    if (loading) return <Preloader />;

    return (
        <LanguageContext.Provider
            value={{ selectedLang, handleLangChange, langValue, loading }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
    initialLanguage: PropTypes.string,
};

LanguageProvider.defaultProps = {
    initialLanguage: "cz",
};
