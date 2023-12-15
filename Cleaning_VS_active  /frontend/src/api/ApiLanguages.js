import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const LanguagesApi = async () => {
    try {
        const response = await axios.get("languages/");
        const responseObj = { ...response.data }[0];
        const langValue = responseObj.header_all;
        return langValue;
    } catch (error) {
        console.log(error);
        return null;
    }
};
