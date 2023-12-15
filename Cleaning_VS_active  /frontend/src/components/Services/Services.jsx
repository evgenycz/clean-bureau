import { StyledServices } from "./components/StyledServices";
import { ImagesServices } from "./components/images/images";
import PropTypes from "prop-types";

export const Services = ({ selectedLang, langValue }) => {
    const userLanguage =
        JSON.parse(localStorage.getItem("Language")) || selectedLang;
    const ValueHead = langValue.HeadServices[userLanguage];
    return (
        <>
            <StyledServices>
                <h1 id="section1">
                    {ValueHead.map(({ TypesClean }) => TypesClean)}
                </h1>
                <ul className="MainList">
                    <li>
                        <ul className="SubList">
                            <li>
                                <h2>
                                    {ValueHead.map(({ TypeOfF }) => TypeOfF)}
                                </h2>
                            </li>
                            <li>
                                <img src={ImagesServices.Maintenance} alt="" />
                            </li>
                            <li>
                                {ValueHead.map(
                                    ({ TextOfTypeF }) => TextOfTypeF
                                )}
                            </li>
                            <li>1-2 {ValueHead.map(({ People }) => People)}</li>
                            <li>
                                {ValueHead.map(({ CheckListF }) => CheckListF)}
                            </li>
                            <li>3 {ValueHead.map(({ Time }) => Time)}</li>
                        </ul>
                    </li>
                    <li>
                        <ul className="SubList">
                            <li>
                                <h2>
                                    {ValueHead.map(({ TypeOfS }) => TypeOfS)}
                                </h2>
                            </li>
                            <li>
                                <img
                                    src={ImagesServices.Comprehensive}
                                    alt=""
                                />
                            </li>
                            <li>
                                {ValueHead.map(
                                    ({ TextOfTypeS }) => TextOfTypeS
                                )}
                            </li>
                            <li>2-3 {ValueHead.map(({ People }) => People)}</li>
                            <li>
                                {ValueHead.map(({ CheckListS }) => CheckListS)}
                            </li>
                            <li>5 {ValueHead.map(({ TimeT }) => TimeT)}</li>
                        </ul>
                    </li>
                    <li>
                        <ul className="SubListDif">
                            <li>
                                <h2>
                                    {ValueHead.map(({ TypeOfT }) => TypeOfT)}
                                </h2>
                            </li>
                            <li>
                                <img src={ImagesServices.General} alt="" />
                            </li>
                            <li>
                                {ValueHead.map(
                                    ({ TextOfTypeT }) => TextOfTypeT
                                )}
                            </li>
                            <li>1-2 {ValueHead.map(({ People }) => People)}</li>
                            <li>
                                {ValueHead.map(({ CheckListT }) => CheckListT)}
                            </li>
                            <li>8 {ValueHead.map(({ TimeT }) => TimeT)}</li>
                        </ul>
                    </li>
                </ul>
            </StyledServices>
        </>
    );
};

Services.propTypes = {
    langValue: PropTypes.shape({
        HeadServices: PropTypes.object.isRequired,
    }),
    selectedLang: PropTypes.string.isRequired,
};
