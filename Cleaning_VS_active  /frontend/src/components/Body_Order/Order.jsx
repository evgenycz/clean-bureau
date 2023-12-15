import PropTypes from "prop-types";
import { StyledBodyOrder } from "./components/StyledBodyOrder";
import { ImagesOrder } from "./components/images/Image";

export const BodyOrder = ({ langValue, selectedLang }) => {
    const userLanguage =
        JSON.parse(localStorage.getItem("Language")) || selectedLang;
    const Values = langValue.BodyOrder[userLanguage];
    const ValueText = langValue.BodyOrder2[userLanguage];
    const ValueList = langValue.ListOrder[userLanguage];

    return (
        <>
            <StyledBodyOrder>
                <ul>
                    <li>
                        <ul>
                            <li>
                                {Values.map(({ orderEl1, orderEl2 }, index) => (
                                    <ul className="HeadArr" key={index}>
                                        <li>
                                            <h1 className="BlueText">
                                                {orderEl1}
                                            </h1>
                                        </li>
                                        <li>
                                            <h1 className="GreenText">
                                                {orderEl2}
                                            </h1>
                                        </li>
                                    </ul>
                                ))}
                            </li>
                            <li>
                                {ValueText.map(({ orderEl }, index) => (
                                    <p key={index}>{orderEl}</p>
                                ))}
                            </li>
                            <li>
                                <ul>
                                    <li>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </li>
                                    <li></li>
                                </ul>
                            </li>
                            {/*<FormOrder
                                {...useFormContext}
                                CreatePost={CreatePost}
                                Languages={Languages}
                                />*/}
                        </ul>
                    </li>
                </ul>
                <ul className="ImagesList">
                    <li className="PictureList">
                        <ul className="ImagesSubList">
                            <li>
                                <ul className="ImagesSubListText">
                                    <li>
                                        <ul className="ImagesListNoteFirst">
                                            <li>
                                                <img
                                                    src={ImagesOrder.security}
                                                    alt="security"
                                                />
                                            </li>
                                            <li>
                                                {ValueList.map(
                                                    ({ Quality }) => Quality
                                                )}
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul className="ImagesListNoteSecond">
                                            <li>
                                                <img
                                                    src={ImagesOrder.calendar}
                                                    alt="calendar"
                                                />
                                            </li>
                                            <li>
                                                {ValueList.map(
                                                    ({ Schedule }) => Schedule
                                                )}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul className="ImagesSubListText">
                                    <li>
                                        <ul className="ImagesListNoteThird">
                                            <li>
                                                <img
                                                    src={ImagesOrder.eco}
                                                    alt="eco"
                                                />
                                            </li>
                                            <li>
                                                {ValueList.map(
                                                    ({ Products }) => Products
                                                )}
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul className="ImagesListNoteClock">
                                            <li>
                                                <img
                                                    src={ImagesOrder.clock}
                                                    alt="clock"
                                                    className="ClockImg"
                                                />
                                            </li>
                                            <li>
                                                {ValueList.map(
                                                    ({ Deadlines }) => Deadlines
                                                )}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="MainPicture">
                        <img src={ImagesOrder.imgWoman} alt="" />
                    </li>
                </ul>
            </StyledBodyOrder>
        </>
    );
};

BodyOrder.propTypes = {
    langValue: PropTypes.shape({
        BodyOrder: PropTypes.object.isRequired,
        BodyOrder2: PropTypes.object.isRequired,
        OrderButton: PropTypes.object.isRequired,
        ListOrder: PropTypes.object.isRequired,
    }).isRequired,
    selectedLang: PropTypes.string.isRequired,
    CreatePost: PropTypes.func.isRequired,
    ContextForm: PropTypes.object.isRequired,
};
