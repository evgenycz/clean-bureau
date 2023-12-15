import axios from "axios";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
emailjs.init("qaizRBTrz9VgiojlQ");

export const CreatePost = async ({
    info,
    setPending,
    selectedLang,
    langValue,
}) => {
    const userLanguage =
        JSON.parse(localStorage.getItem("Language")) || selectedLang;
    const Value = langValue.ToastText[userLanguage];

    try {
        const response = await axios.post("/Forms/", info, {
            headers: { "Content-Type": "application/json" },
        });
        toast.success(`${Value.map(({ ToastEl }) => ToastEl)}`, {
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        const emailParams = {
            to_name: info.name,
            userEmail: info.user_mail,
        };
        try {
            await emailjs.send(
                "service_r8k06tc",
                "template_h5euzh4",
                emailParams
            );
        } catch (emailError) {
            console.error("Email sending failed:", emailError);
            toast.error("Email sending failed: " + emailError.message);
        }
        return response.data;
    } catch (error) {
        toast.error("Post failed: " + error.message);
        console.log(error);
    } finally {
        setPending(false);
    }
};
