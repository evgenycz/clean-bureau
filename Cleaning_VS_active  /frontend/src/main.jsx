import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import {
    LanguageContext,
    LanguageProvider,
    FormProvider,
    ContextForm,
} from "./context";
import { Localization } from "./Localization";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <LanguageProvider>
            <FormProvider>
                <App
                    {...Localization}
                    LanguageContext={LanguageContext}
                    ContextForm={ContextForm}
                />
            </FormProvider>
        </LanguageProvider>
    </React.StrictMode>
);
