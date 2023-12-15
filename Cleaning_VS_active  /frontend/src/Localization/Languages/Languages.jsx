export const Languages = {
    LocalizationButtons: () => {
        return [
            { id: 1, text: "CZ", textId: "cz" },
            { id: 2, text: "EN", textId: "en" },
            { id: 3, text: "RU", textId: "ru" },
            { id: 4, text: "UK", textId: "uk" },
        ];
    },
    LocalizationValidate: () => {
        return {
            cz: "[A-Za-zÁáČčĎďÉéĚěÍíŇňÓóŘřŠšŤťÚúŮůÝýŽž]",
            en: "[a-zA-Z]",
            ru: "[а-яА-Я]",
            uk: "[А-ЯҐЄІЇа-яґєії]",
        };
    },
};
