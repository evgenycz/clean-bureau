import { styled } from "styled-components";

export const LocalizationStyled = styled.section`
    display: flex;
    justify-content: center;
    height: 30px;
    margin-top: -10px;
    .ButtonFixed {
        display: flex;
        flex-wrap: nowrap;
    }
    button {
        cursor: pointer;
        font-size: 18px;
        box-shadow: 0.1px 0.1px 2px var(--primary-darkblue-color);
        &:first-child {
            border-radius: 25px 0 0 25px;
        }
        &:last-child {
            border-radius: 0 25px 25px 0;
        }
    }
    .activeLanguage {
        background-color: #c3e1fb;
        width: 3vw;
        height: 30px;
        border: 0;
        color: #fff;
        font-weight: 600;
        user-select: none !important;
    }
    .inactiveLanguage {
        background-color: #fff;
        width: 3vw;
        height: 30px;
        border: 0;
        color: var(--primary-text-color);
        &:hover {
            background-color: var(--primary-darkblue-color);
            transition: 0.5s;
        }
    }
    @media screen and (max-width: 1023px) {
        display: none;
    }
    @media screen and (min-width: 1024px) and (max-width: 1279px) {
        padding-top: 10px;
        margin-right: 4vw;
        button {
            width: 12vw;
            font-size: 15px;
        }
    }
    @media screen and (min-width: 1280px) and (max-width: 1799px) {
        margin-right: 4vw;
        button {
            width: 10vw;
        }
    }
    @media screen and (min-width: 1800px) {
        margin-right: 5vw;
        button {
            width: 10vw;
        }
    }
`;
