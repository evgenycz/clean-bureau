import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ContextForm = createContext();

export const FormProvider = ({ children }) => {
    const [info, setInfo] = useState({
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

    const [infoCheckboxes, setInfoCheckboxes] = useState({
        ironing: false,
        Window: false,
        keyDelivery: false,
        RefrigeratorWith: false,
        RefrigeratorWithout: false,
        Microwave: false,
        Oven: false,
        Exhaust: false,
        Chandelier: false,
    });

    const Price = {
        ironing: 350,
        Window: 0,
        keyDelivery: 150,
        RefrigeratorWith: 550,
        RefrigeratorWithout: 400,
        Microwave: 200,
        Oven: 400,
        Exhaust: 300,
        Chandelier: 700,
    };

    const [totalPriceArea, settotalPriceArea] = useState(0);
    const [totalTimeArea, settotalTimeArea] = useState(0);

    const [totalPriceServices, settotalPriceServices] = useState(0);
    const [totalTimeServices, setTotalTimeServices] = useState(0);

    const handleChangeTime = (time, price, { name, value }) => {
        setInfo({ ...info, time: time, price: price, [name]: value });
    };

    const handleInfo = ({ name, value, targetName, targetValue }) => {
        if (targetName && targetValue) {
            setInfo({ ...info, [targetName]: targetValue });
        } else {
            setInfo({ ...info, [name]: value });
        }
    };

    const handleNumber = (time, price) => {
        settotalTimeArea(time);
        settotalPriceArea(price);
    };

    const TotalChangeArea = ({ name, value }) => {
        if (name === "area_rooms") {
            setInfo({ ...info, [name]: value });
            if (value.length === 2) {
                if (parseInt(value) <= 40 && parseInt(value) >= 10) {
                    handleNumber(4, 900);
                } else if (parseInt(value) <= 60 && parseInt(value) > 40) {
                    handleNumber(5, 1300);
                } else if (parseInt(value) <= 90 && parseInt(value) > 60) {
                    handleNumber(6, 1800);
                }
            } else if (value.length === 3) {
                if (parseInt(value) <= 120 && parseInt(value) > 90) {
                    handleNumber(7, 2100);
                } else if (parseInt(value) <= 150 && parseInt(value) > 120) {
                    handleNumber(8, 2600);
                } else {
                    handleNumber(0, 0);
                }
            } else {
                handleNumber(0, 0);
            }
        }
    };

    const TotalPriceServices = ({ name, checked }) => {
        if (checked) {
            settotalPriceServices(totalPriceServices + Price[name]);
            if (name === "ironing") {
                setTotalTimeServices(totalTimeServices + 1);
            }
        } else {
            settotalPriceServices(totalPriceServices - Price[name]);
            if (name === "ironing") {
                setTotalTimeServices(totalTimeServices - 1);
            }
        }
    };

    useEffect(() => {
        const totalcalcPrice = totalPriceServices + totalPriceArea;
        const totalcalcTime = totalTimeServices + totalTimeArea;
        setInfo((prevInfo) => ({
            ...prevInfo,
            time: totalcalcTime,
            price: totalcalcPrice,
        }));
    }, [totalPriceServices, totalPriceArea, totalTimeArea, totalTimeServices]);

    const handleCheckbox = ({ name, checked }) => {
        setInfoCheckboxes({ ...infoCheckboxes, [name]: checked });
    };

    const handleServicesInfo = ({ checked }, value) => {
        if (checked) {
            setInfo((prevInfo) => ({
                ...prevInfo,
                services: [...prevInfo.services, value],
            }));
        } else {
            setInfo((prevInfo) => ({
                ...prevInfo,
                services: prevInfo.services.filter((item) => item != value),
            }));
        }
    };

    return (
        <ContextForm.Provider
            value={{
                handleInfo,
                handleCheckbox,
                info,
                infoCheckboxes,
                handleChangeTime,
                TotalPriceServices,
                TotalChangeArea,
                handleServicesInfo,
                setInfo,
                settotalPriceArea,
                settotalTimeArea,
                settotalPriceServices,
            }}
        >
            {children}
        </ContextForm.Provider>
    );
};

FormProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
