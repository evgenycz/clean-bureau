import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnswerStyled } from "./components/AnswerStyled";
import chevron from "./components/images/chevron-down.svg";
import PropTypes from "prop-types";

export const Answer = ({ langValue, selectedLang }) => {
    const userLanguage =
        JSON.parse(localStorage.getItem("Language")) || selectedLang;

    const Value = langValue.AnswerText[userLanguage];

    const [controlVisible, setControlVisible] = useState({
        content1: false,
        content2: false,
        content3: false,
        content4: false,
        content5: false,
        content6: false,
        content7: false,
    });

    const handleClick = (nameUs) => {
        setControlVisible((content) => ({
            content1: nameUs === "content1" ? !content.content1 : false,
            content2: nameUs === "content2" ? !content.content2 : false,
            content3: nameUs === "content3" ? !content.content3 : false,
            content4: nameUs === "content4" ? !content.content4 : false,
            content5: nameUs === "content5" ? !content.content5 : false,
            content6: nameUs === "content6" ? !content.content6 : false,
            content7: nameUs === "content7" ? !content.content7 : false,
        }));
    };

    return (
        <AnswerStyled>
            <h1>{Value.map(({ AnswerMain }) => AnswerMain)}</h1>
            <div className="ContainerAnswer">
                <section>
                    <ul onClick={() => handleClick("content1")}>
                        <li>
                            <h3>{Value.map(({ QuestionF }) => QuestionF)}</h3>
                        </li>
                        <li>
                            <motion.img
                                animate={
                                    controlVisible.content1 ? "open" : "close"
                                }
                                variants={{
                                    open: { rotate: 0 },
                                    close: { rotate: 180 },
                                }}
                                transition={{ duration: 0.3 }}
                                src={chevron}
                                alt="chevron"
                            />
                        </li>
                    </ul>
                    <AnimatePresence>
                        {controlVisible.content1 && (
                            <motion.p
                                key="content1"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {Value.map(({ AnswerF }) => AnswerF)}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </section>
                <section>
                    <ul onClick={() => handleClick("content2")}>
                        <li>
                            <h3>{Value.map(({ QuestionS }) => QuestionS)}</h3>
                        </li>
                        <li>
                            <motion.img
                                animate={
                                    controlVisible.content2 ? "open" : "close"
                                }
                                variants={{
                                    open: { rotate: 0 },
                                    close: { rotate: 180 },
                                }}
                                transition={{ duration: 0.3 }}
                                src={chevron}
                                alt="chevron"
                            />
                        </li>
                    </ul>

                    <AnimatePresence>
                        {controlVisible.content2 && (
                            <motion.p
                                key="content2"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {Value.map(({ AnswerS }) => AnswerS)}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </section>
                <section>
                    <ul onClick={() => handleClick("content3")}>
                        <li>
                            <h3>{Value.map(({ QuestionT }) => QuestionT)}</h3>
                        </li>
                        <li>
                            <motion.img
                                animate={
                                    controlVisible.content3 ? "open" : "close"
                                }
                                variants={{
                                    open: { rotate: 0 },
                                    close: { rotate: 180 },
                                }}
                                transition={{ duration: 0.3 }}
                                src={chevron}
                                alt="chevron"
                            />
                        </li>
                    </ul>
                    <AnimatePresence>
                        {controlVisible.content3 && (
                            <motion.p
                                key="content3"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {Value.map(({ AnswerT }) => AnswerT)}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </section>
                <section>
                    <ul onClick={() => handleClick("content4")}>
                        <li>
                            <h3>{Value.map(({ QuestionFo }) => QuestionFo)}</h3>
                        </li>
                        <li>
                            <motion.img
                                animate={
                                    controlVisible.content4 ? "open" : "close"
                                }
                                variants={{
                                    open: { rotate: 0 },
                                    close: { rotate: 180 },
                                }}
                                transition={{ duration: 0.3 }}
                                src={chevron}
                                alt="chevron"
                            />
                        </li>
                    </ul>
                    <AnimatePresence>
                        {controlVisible.content4 && (
                            <motion.p
                                key="content4"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {Value.map(({ AnswerFo }) => AnswerFo)}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </section>
                <section>
                    <ul onClick={() => handleClick("content5")}>
                        <li>
                            <h3>{Value.map(({ QuestionFi }) => QuestionFi)}</h3>
                        </li>
                        <li>
                            <motion.img
                                animate={
                                    controlVisible.content5 ? "open" : "close"
                                }
                                variants={{
                                    open: { rotate: 0 },
                                    close: { rotate: 180 },
                                }}
                                transition={{ duration: 0.3 }}
                                src={chevron}
                                alt="chevron"
                            />
                        </li>
                    </ul>
                    <AnimatePresence>
                        {controlVisible.content5 && (
                            <motion.p
                                key="content5"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {Value.map(({ AnswerFi }) => AnswerFi)}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </section>
                <section>
                    <ul onClick={() => handleClick("content6")}>
                        <li>
                            <h3>{Value.map(({ QuestionSi }) => QuestionSi)}</h3>
                        </li>
                        <li>
                            <motion.img
                                animate={
                                    controlVisible.content6 ? "open" : "close"
                                }
                                variants={{
                                    open: { rotate: 0 },
                                    close: { rotate: 180 },
                                }}
                                transition={{ duration: 0.3 }}
                                src={chevron}
                                alt="chevron"
                            />
                        </li>
                    </ul>
                    <AnimatePresence>
                        {controlVisible.content6 && (
                            <motion.p
                                key="content6"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {Value.map(({ AnswerSi }) => AnswerSi)}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </section>
                <section>
                    <ul onClick={() => handleClick("content7")}>
                        <li>
                            <h3>{Value.map(({ QuestionSe }) => QuestionSe)}</h3>
                        </li>
                        <li>
                            <motion.img
                                animate={
                                    controlVisible.content7 ? "open" : "close"
                                }
                                variants={{
                                    open: { rotate: 0 },
                                    close: { rotate: 180 },
                                }}
                                transition={{ duration: 0.3 }}
                                src={chevron}
                                alt="chevron"
                            />
                        </li>
                    </ul>

                    <AnimatePresence>
                        {controlVisible.content7 && (
                            <motion.p
                                key="content7"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {Value.map(({ AnswerSe }) => AnswerSe)}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </section>
            </div>
        </AnswerStyled>
    );
};

Answer.propTypes = {
    langValue: PropTypes.shape({
        AnswerText: PropTypes.object.isRequired,
    }),
    selectedLang: PropTypes.string.isRequired,
};
