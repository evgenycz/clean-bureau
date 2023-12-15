import { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { ServicesForm } from "./components/ServicesForm";
import { FormStyled } from "./components/FormStyled";
import { motion } from "framer-motion";
import chevron from "./components/img/chevron-down.svg";

export const FormOrder = ({
    CreatePost,
    langValue,
    selectedLang,
    handleInfo,
    handleCheckbox,
    info,
    infoCheckboxes,
    TotalPriceServices,
    TotalChangeArea,
    handleServicesInfo,
    setInfo,
    settotalPriceArea,
    settotalTimeArea,
    settotalPriceServices,
}) => {
    const [selButt, setSelButt] = useState(false);

    const [selectText, setSelectText] = useState("");

    const [buttClean, setButtClean] = useState(false);
    const [selectCleanText, setSelectCleanText] = useState("");

    const [buttTime, setButtTime] = useState(false);

    const [selectTimeText, setSelectTimeText] = useState("");

    const [pending, setPending] = useState(true);

    const [controlVisible, setControlVisible] = useState({
        content1: false,
        content2: false,
        content3: false,
    });

    const userLanguage =
        JSON.parse(localStorage.getItem("Language")) || selectedLang;

    const Value = langValue.PlaceholderForm[userLanguage];
    const ValueValid = langValue.Validation[userLanguage];
    const ValueSelectTime = langValue.SelectorTime[userLanguage];
    const ValueSelectBuild = langValue.SelectorBuilding[userLanguage];
    const ValueSelectClean = langValue.SelectorClean[userLanguage];
    const ValueServicesState = langValue.ServicesState[userLanguage];
    const ValueFormText = langValue.FormTextNotes[userLanguage];

    const handleClick = (nameUs) => {
        setControlVisible((content) => ({
            content1: nameUs === "content1" ? !content.content1 : false,
        }));
        setSelButt(!selButt);
    };

    const handleClickT = (nameUs) => {
        setControlVisible((content) => ({
            content2: nameUs === "content2" ? !content.content2 : false,
        }));
        setButtClean(!buttClean);
    };

    const handleClickTh = (nameUs) => {
        setControlVisible((content) => ({
            content3: nameUs === "content3" ? !content.content3 : false,
        }));
        setButtTime(!buttTime);
    };

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: "onBlur" });

    const handleChangeState = (selectValue) => {
        setSelectText(selectValue);
        handleInfo({ targetName: "type_building", targetValue: selectValue });
        setSelButt(false);
    };
    const handleCleanState = (value) => {
        setSelectCleanText(value);
        handleInfo({ targetName: "typ_of_cleaning", targetValue: value });
        setButtClean(false);
    };
    const handleTimeState = (value) => {
        setSelectTimeText(value);
        handleInfo({ targetName: "lastCleaning", targetValue: value });

        setButtTime(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "area_rooms") {
            TotalChangeArea({ name, value });
        } else {
            handleInfo({ name: name, value: value });
        }
    };

    const FormHandleSubmit = async () => {
        try {
            await CreatePost({
                info,
                setPending,
                selectedLang,
                langValue,
            });
            reset();
            setInfo({
                name: "",
                surname: "",
                phone: "",
                user_mail: "",
                type_building: "",
                rooms: "",
                area_rooms: 0,
                bathrooms: "",
                typ_of_cleaning: "",
                services: [],
                comments: "",
                lastCleaning: "",
                time: 0,
                price: 0,
            });
            settotalPriceArea(0), settotalTimeArea(0), settotalPriceServices(0);
        } catch (error) {
            console.log(error);
        } finally {
            setPending(!pending);
        }
    };

    const ErrorEmpty = `${ValueValid.map(({ validEmpty }) => validEmpty)}`;
    const ErrorNull = `${ValueValid.map(
        ({ validNumberExist }) => validNumberExist
    )}`;
    const ErrorLetter = `${ValueValid.map(({ validLetter }) => validLetter)}`;

    let validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const SelBuild = ValueSelectBuild.map((value) => value);
    const SelClean = ValueSelectClean.map((value) => value);
    const SelTime = ValueSelectTime.map((value) => value);
    const ServState = ValueServicesState.map((value) => value);

    const regexPattern = /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґČčĎďĚěŇňŘřŠšŤťŮůŽž]+$/;

    return (
        <FormStyled>
            <form id="section2" onSubmit={handleSubmit(FormHandleSubmit)}>
                <ul className="MainListUl">
                    <li>
                        <label>
                            <p className="LabelText">
                                {Value.map(({ name }) => name)}:
                            </p>
                            <section className="InputStyle">
                                <input
                                    type="text"
                                    {...register("name", {
                                        required: ErrorEmpty,
                                        validate: (value) =>
                                            regexPattern.test(value) ||
                                            ErrorLetter,
                                    })}
                                    onChange={handleChange}
                                    placeholder={Value.map(({ name }) => name)}
                                />
                                {errors?.name && (
                                    <p className="TextError">
                                        {errors?.name?.message}
                                    </p>
                                )}
                            </section>
                        </label>
                    </li>
                    <li className="TextHelp">
                        {ValueFormText.map(({ NameText }) => NameText)}
                    </li>
                </ul>
                <ul className="MainListUl">
                    <li>
                        <label>
                            <p className="LabelText">
                                {Value.map(({ surname }) => surname)}:
                            </p>
                            <section className="InputStyle">
                                <input
                                    type="text"
                                    {...register("surname", {
                                        required: ErrorEmpty,
                                        validate: (value) =>
                                            regexPattern.test(value) ||
                                            ErrorLetter,
                                    })}
                                    onChange={handleChange}
                                    placeholder={Value.map(
                                        ({ surname }) => surname
                                    )}
                                />
                                {errors?.surname && (
                                    <p className="TextError">
                                        {errors?.surname?.message}
                                    </p>
                                )}
                            </section>
                        </label>
                    </li>
                    <li className="TextHelp">
                        {ValueFormText.map(({ LastNameText }) => LastNameText)}
                    </li>
                </ul>
                <ul className="MainListUl">
                    <li>
                        <label>
                            <p className="LabelText">
                                {Value.map(({ telefon }) => telefon)}:
                            </p>
                            <section className="InputStyle">
                                <input
                                    type="text"
                                    {...register("phone", {
                                        required: ErrorEmpty,
                                        validate: {
                                            NumberFunc: (value) =>
                                                !isNaN(value) || ErrorNull,
                                            ZeroFunc: (value) =>
                                                value > 0 ||
                                                `${ValueValid.map(
                                                    ({ validNull }) => validNull
                                                )}`,
                                        },
                                        minLength: {
                                            value: 9,
                                            message: `${ValueValid.map(
                                                ({ validNumber }) => validNumber
                                            )}`,
                                        },
                                        maxLength: {
                                            value: 9,
                                            message: `${ValueValid.map(
                                                ({ validNumber }) => validNumber
                                            )}`,
                                        },
                                    })}
                                    onChange={handleChange}
                                    placeholder="+420"
                                />
                                {errors?.phone && (
                                    <p className="TextError">
                                        {errors?.phone?.message}
                                    </p>
                                )}
                            </section>
                        </label>
                    </li>
                    <li className="TextHelp">
                        {ValueFormText.map(({ PhoneText }) => PhoneText)}
                    </li>
                </ul>
                <ul className="MainListUl">
                    <li>
                        <label>
                            <p className="LabelText">
                                {Value.map(({ user_mail }) => user_mail)}:
                            </p>
                            <section className="InputStyle">
                                <input
                                    type="text"
                                    {...register("user_mail", {
                                        required: ErrorEmpty,
                                        validate: (value) =>
                                            validRegex.test(value) ||
                                            `${ValueValid.map(
                                                ({ validMail }) => validMail
                                            )}`,
                                    })}
                                    onChange={handleChange}
                                    placeholder={Value.map(
                                        ({ user_mail }) => user_mail
                                    )}
                                />
                                {errors?.user_mail && (
                                    <p className="TextError">
                                        {errors?.user_mail?.message}
                                    </p>
                                )}
                            </section>
                        </label>
                    </li>
                    <li className="TextHelp">
                        {ValueFormText.map(({ MailText }) => MailText)}
                    </li>
                </ul>
                <ul className="MainListUl">
                    <li>
                        <label>
                            <p className="LabelText">
                                {Value.map(
                                    ({ TypeOfBulding }) => TypeOfBulding
                                )}
                                :
                            </p>
                            <div className="BlockSelector">
                                <ul className="BuildingStyleInputAll">
                                    <li>
                                        <ul
                                            className="BuildingStyleInput"
                                            onClick={() =>
                                                handleClick("content1")
                                            }
                                        >
                                            <li>
                                                <motion.img
                                                    animate={
                                                        controlVisible.content1
                                                            ? "close"
                                                            : "open"
                                                    }
                                                    variants={{
                                                        open: { rotate: 0 },
                                                        close: { rotate: 360 },
                                                    }}
                                                    transition={{
                                                        duration: 0.5,
                                                    }}
                                                    src={chevron}
                                                    alt="chevron"
                                                />
                                            </li>
                                            <li>
                                                <p className="BuildingStyle">
                                                    {selectText}
                                                </p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        {selButt && (
                                            <ul className="SelectorList">
                                                {Object.values(...SelBuild).map(
                                                    (value, index) => (
                                                        <li
                                                            key={index}
                                                            onClick={() =>
                                                                handleChangeState(
                                                                    value
                                                                )
                                                            }
                                                        >
                                                            {value}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </label>
                    </li>
                    <li className="TextHelp">
                        {ValueFormText.map(({ CleanText }) => CleanText)}
                    </li>
                </ul>
                <ul className="MainListUl">
                    <li>
                        <label>
                            <p className="LabelText">
                                {Value.map(({ Rooms }) => Rooms)}:
                            </p>
                            <section className="InputStyle">
                                <input
                                    type="text"
                                    {...register("rooms", {
                                        required: ErrorEmpty,
                                        validate: {
                                            NumberFuc: (value) =>
                                                !isNaN(value) ||
                                                `${ValueValid.map(
                                                    ({ validNumberExist }) =>
                                                        validNumberExist
                                                )}`,
                                            EmptyFunc: (value) =>
                                                value > 0 ||
                                                `${ValueValid.map(
                                                    ({ validNull }) => validNull
                                                )}`,
                                        },
                                    })}
                                    onChange={handleChange}
                                    placeholder={Value.map(
                                        ({ Rooms }) => Rooms
                                    )}
                                />
                                {errors?.rooms && (
                                    <p className="TextError">
                                        {errors?.rooms?.message}
                                    </p>
                                )}
                            </section>
                        </label>
                    </li>
                    <li className="TextHelp">
                        {ValueFormText.map(({ RoomText }) => RoomText)}
                    </li>
                </ul>
                <ul className="MainListUl">
                    <li>
                        <label>
                            <p className="LabelText">
                                {Value.map(({ AreaOfRooms }) => AreaOfRooms)}:
                            </p>
                            <section className="InputStyle">
                                <input
                                    type="text"
                                    {...register("area_rooms", {
                                        required: ErrorEmpty,
                                        validate: {
                                            FuncNumb: (value) =>
                                                !isNaN(value) ||
                                                `${ValueValid.map(
                                                    ({ validNumberExist }) =>
                                                        validNumberExist
                                                )}`,
                                            FuncNull: (value) =>
                                                value > 10 ||
                                                `${ValueValid.map(
                                                    ({ validTen }) => validTen
                                                )}`,
                                        },
                                    })}
                                    onChange={handleChange}
                                    placeholder={Value.map(
                                        ({ AreaOfRooms }) => AreaOfRooms
                                    )}
                                />
                                {errors?.area_rooms && (
                                    <p className="TextError">
                                        {errors?.area_rooms?.message}
                                    </p>
                                )}
                            </section>
                        </label>
                    </li>
                    <li className="TextHelp">
                        {ValueFormText.map(({ AreaText }) => AreaText)}
                    </li>
                </ul>
                <ul className="MainListUl">
                    <li>
                        <label>
                            <p className="LabelText">
                                {Value.map(({ Bathrooms }) => Bathrooms)}:
                            </p>
                            <section className="InputStyle">
                                <input
                                    type="text"
                                    {...register("bathrooms", {
                                        required: ErrorEmpty,
                                        validate: (value) =>
                                            !isNaN(value) || ErrorNull,
                                    })}
                                    onChange={handleChange}
                                    placeholder={Value.map(
                                        ({ Bathrooms }) => Bathrooms
                                    )}
                                />
                                {errors?.bathrooms && (
                                    <p className="TextError">
                                        {errors?.bathrooms?.message}
                                    </p>
                                )}
                            </section>
                        </label>
                    </li>
                    <li className="TextHelp">
                        {ValueFormText.map(({ WCText }) => WCText)}
                    </li>
                </ul>
                <ul className="MainListUl">
                    <li>
                        <label>
                            <p className="LabelText">
                                {Value.map(
                                    ({ TypeOfCleaning }) => TypeOfCleaning
                                )}
                                :
                            </p>
                            <div className="BlockSelector">
                                <ul className="BuildingStyleInputAll">
                                    <li>
                                        <ul
                                            className="BuildingStyleInput"
                                            onClick={() =>
                                                handleClickT("content2")
                                            }
                                        >
                                            <li>
                                                <motion.img
                                                    animate={
                                                        controlVisible.content2
                                                            ? "close"
                                                            : "open"
                                                    }
                                                    variants={{
                                                        open: { rotate: 0 },
                                                        close: { rotate: 360 },
                                                    }}
                                                    transition={{
                                                        duration: 0.5,
                                                    }}
                                                    src={chevron}
                                                    alt="chevron"
                                                />
                                            </li>
                                            <li>
                                                <p className="BuildingStyle">
                                                    {selectCleanText}
                                                </p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        {buttClean && (
                                            <ul className="SelectorList">
                                                {Object.values(...SelClean).map(
                                                    (value, index) => (
                                                        <li
                                                            key={index}
                                                            onClick={() =>
                                                                handleCleanState(
                                                                    value
                                                                )
                                                            }
                                                        >
                                                            {value}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            </div>
                            {info.typ_of_cleaning === "" && (
                                <p className="TextError">{ErrorEmpty}</p>
                            )}
                        </label>
                    </li>
                    <li className="TextHelp">
                        {ValueFormText.map(({ CleanTypText }) => CleanTypText)}
                    </li>
                </ul>
                <ul className="MainServicesUL">
                    <li>
                        <p className="LabelText">
                            {Value.map(({ Services }) => Services)}:
                        </p>
                    </li>
                    <li>
                        <section>
                            <ServicesForm
                                ServState={ServState}
                                handleCheckbox={handleCheckbox}
                                infoCheckboxes={infoCheckboxes}
                                info={info}
                                TotalPriceServices={TotalPriceServices}
                                handleServicesInfo={handleServicesInfo}
                            />
                        </section>
                    </li>
                </ul>

                <ul className="MainListCommentUl">
                    <li>
                        <label>
                            <p className="LabelText">
                                {Value.map(({ comments }) => comments)}:
                            </p>
                            <section className="InputStyle">
                                <input
                                    className="CommentsStyle"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder={Value.map(
                                        ({ comments }) => comments
                                    )}
                                    name="comments"
                                />
                            </section>
                        </label>
                    </li>
                </ul>
                <ul className="MainListUl">
                    <li>
                        <label>
                            <p className="LabelTextClean">
                                {Value.map(({ lastCleaning }) => lastCleaning)}:
                            </p>
                            <div className="BlockSelector">
                                <ul className="BuildingStyleInputAll">
                                    <li>
                                        <ul
                                            className="BuildingStyleInput"
                                            onClick={() =>
                                                handleClickTh("content3")
                                            }
                                        >
                                            <li>
                                                <motion.img
                                                    animate={
                                                        controlVisible.content3
                                                            ? "close"
                                                            : "open"
                                                    }
                                                    variants={{
                                                        open: { rotate: 0 },
                                                        close: { rotate: 360 },
                                                    }}
                                                    transition={{
                                                        duration: 0.5,
                                                    }}
                                                    src={chevron}
                                                    alt="chevron"
                                                />
                                            </li>
                                            <li>
                                                <p className="BuildingStyle">
                                                    {selectTimeText}
                                                </p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        {buttTime && (
                                            <ul className="SelectorList">
                                                {Object.values(...SelTime).map(
                                                    (value, index) => (
                                                        <li
                                                            key={index}
                                                            onClick={() =>
                                                                handleTimeState(
                                                                    value
                                                                )
                                                            }
                                                        >
                                                            {value}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            </div>
                            {!info.lastCleaning && (
                                <p className="TextErrorClean">{ErrorEmpty}</p>
                            )}
                        </label>
                    </li>
                    <li className="TextHelp">
                        {ValueFormText.map(
                            ({ LastCleanText }) => LastCleanText
                        )}
                    </li>
                </ul>
                <ul className="CalcStyle">
                    <li>
                        <ul className="CalcSubStyle">
                            <li>
                                <span className="">
                                    {Value.map(({ time }) => time)}:
                                </span>
                            </li>
                            <li>
                                <span>{info.time}</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className="CalcSubStyle">
                            <li>
                                <span>{Value.map(({ price }) => price)}:</span>
                            </li>
                            <li>
                                <span>{info.price} Kč</span>
                            </li>
                        </ul>
                    </li>
                </ul>
                <section className="ButtonStyle">
                    <button
                        type="submit"
                        disabled={
                            !info.typ_of_cleaning ||
                            !isValid ||
                            !info.lastCleaning
                        }
                        className="ButtonPOST"
                    >
                        Submit
                    </button>
                </section>
            </form>
        </FormStyled>
    );
};

FormOrder.propTypes = {
    CreatePost: PropTypes.func.isRequired,
    langValue: PropTypes.shape({
        PlaceholderForm: PropTypes.object.isRequired,
        Validation: PropTypes.object.isRequired,
        SelectorTime: PropTypes.object.isRequired,
        SelectorBuilding: PropTypes.object.isRequired,
        SelectorClean: PropTypes.object.isRequired,
        ServicesState: PropTypes.object.isRequired,
        FormTextNotes: PropTypes.object.isRequired,
    }).isRequired,
    selectedLang: PropTypes.any,
    handleInfo: PropTypes.func.isRequired,
    handleCheckbox: PropTypes.func.isRequired,
    info: PropTypes.object.isRequired,
    infoCheckboxes: PropTypes.object.isRequired,
    handleChangeTime: PropTypes.func.isRequired,
    TotalPriceServices: PropTypes.func.isRequired,
    TotalChangeArea: PropTypes.func.isRequired,
    handleServicesInfo: PropTypes.func.isRequired,
    setInfo: PropTypes.func.isRequired,
    settotalPriceArea: PropTypes.func.isRequired,
    settotalTimeArea: PropTypes.func.isRequired,
    settotalPriceServices: PropTypes.func.isRequired,
};
