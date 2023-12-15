import logo from "./images/logo.svg";
import { ImagesHeader } from "./images/images";
import { StyleHeader } from "./components/StyledComponents";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = ({
    selectedLang,
    langValue,
    handleLangChange,
    LocalizationComponent,
}) => {
    const userLanguage =
        JSON.parse(localStorage.getItem("Language")) || selectedLang;
    const Values = langValue.HeaderAll[userLanguage];

    const [isBlurred, setIsBlurred] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleChangeBlur = () => {
            const ofset = window.scrollY;
            setIsBlurred(ofset > 0);
        };

        window.addEventListener("scroll", handleChangeBlur);

        return () => window.removeEventListener("scroll", handleChangeBlur);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <StyleHeader $isBlurred={isBlurred}>
                <img src={logo} alt="logo" className="ImgHeaderUl" />
                <section className="ListHeader">
                    <button
                        className="MenuImage"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <img src={ImagesHeader.menu} alt="menu" />
                    </button>
                    <AnimatePresence>
                        {isOpen || window.innerWidth >= 1024
                            ? Values.map(
                                  (
                                      {
                                          headerEl1,
                                          headerEl2,
                                          headerEl3,
                                          headerEl4,
                                      },
                                      index
                                  ) => (
                                      <motion.ul
                                          className="ArrFirstHeader"
                                          key={index}
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
                                          <li>
                                              <a
                                                  onClick={() =>
                                                      setIsOpen(false)
                                                  }
                                                  href="#section1"
                                              >
                                                  {headerEl1}
                                              </a>
                                          </li>
                                          <li>
                                              <a
                                                  onClick={() =>
                                                      setIsOpen(false)
                                                  }
                                                  href="#section2"
                                              >
                                                  {headerEl2}
                                              </a>
                                          </li>
                                          <li>
                                              <a
                                                  onClick={() =>
                                                      setIsOpen(false)
                                                  }
                                                  href="#section3"
                                              >
                                                  {headerEl3}
                                              </a>
                                          </li>
                                          <li>
                                              <a
                                                  onClick={() =>
                                                      setIsOpen(false)
                                                  }
                                                  href="#section4"
                                              >
                                                  {headerEl4}
                                              </a>
                                          </li>
                                      </motion.ul>
                                  )
                              )
                            : null}
                    </AnimatePresence>
                </section>
                <LocalizationComponent handleLangChange={handleLangChange} />
            </StyleHeader>
        </>
    );
};

Header.propTypes = {
    langValue: PropTypes.shape({
        HeaderAll: PropTypes.object.isRequired,
        HeaderQuest: PropTypes.object.isRequired,
    }).isRequired,
    selectedLang: PropTypes.string.isRequired,
    handleLangChange: PropTypes.func.isRequired,
    LocalizationComponent: PropTypes.func.isRequired,
};
