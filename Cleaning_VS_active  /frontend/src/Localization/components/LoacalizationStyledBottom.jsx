import { styled } from "styled-components";

export const LocalizationStyledBottom = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: -10px;
    border: 1px solid var(--primary-orange-color);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    padding: 0.5vh;
    width: 30px;

    .ButtonFixed {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
    }
    button {
        cursor: pointer;
    }
    .activeLanguage {
        background-color: #c3e1fb;
        height: 30px;
        width: 30px;
        border: 0;
        color: #fff;
        font-weight: 600;
        user-select: none !important;
        border-radius: 10px;
        margin-bottom: 0.5vh;
    }
    .inactiveLanguage {
        background-color: rgba(255, 255, 255, 0);
        height: 30px;
        width: 30px;
        border: 0;
        color: var(--primary-text-color);
        margin-bottom: 0.5vh;
        &:hover {
            background-color: var(--primary-orange-color);
            transition: 0.5s;
            border-radius: 10px;
            color: #fff;
        }
    }
    .MenuLanguageList {
        display: flex;
        flex-direction: column;
        .LanguageImage {
            height: 100%;
            background-color: rgba(255, 255, 255, 0);
            border: none;
            color: var(--primary-orange-color);
            font-weight: 600;
            &:hover {
                transform: scale(1.2);
                transition: 0.5s;
            }
            &:active {
                transform: scale(0.9);
                transition: 0.2s;
            }
        }
    }
    @media screen and (max-width: 899px) {
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 1000;
        margin-bottom: 30px;
        margin-right: 30px;
        .activeLanguage {
            font-size: 14px;
        }
        .inactiveLanguage {
            font-size: 14px;
        }
    }
    @media screen and (min-width: 900px) and (max-width: 1023px) {
        .activeLanguage {
            font-size: 16px;
        }
        .inactiveLanguage {
            font-size: 16px;
        }
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 1000;
        margin-bottom: 30px;
        margin-right: 30px;
    }
    @media screen and (min-width: 1024px) {
        display: none;
        button {
            font-size: 18px;
        }
    }
`;
