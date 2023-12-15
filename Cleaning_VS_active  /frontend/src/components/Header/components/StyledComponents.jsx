import styled from "styled-components";
import { FlexCenter } from "../../StyledBase/Mixin";

export const StyleHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(${(props) => props.$isBlurred && "10px"});
    transition: backdrop-filter 0.3s;
    z-index: 10;
    height: 100px;
    .ListHeader {
        width: 40vw;
    }
    .ArrFirstHeader {
        width: 40vw;
        ${FlexCenter}
        text-align: center;
        .active {
            text-decoration: underline;
            font-weight: 600;
        }
        a {
            text-decoration: none;
            color: var(--primary-orange-color);
        }
        li {
            width: 10vw;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 374px) {
        justify-content: space-between;
        .ImgHeaderUl {
            width: 230px;
            height: 180px;
            margin-left: 4vw;
        }
        .ListHeader {
            position: relative;
            padding-top: 8px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: end;
            height: 100px;
            margin-right: 5px;
            button {
                position: fixed;
                img {
                    width: 40px;
                    height: 40px;
                    &:hover {
                        transform: scale(1.05);
                        transition: 0.2s;
                    }
                    &:active {
                        transform: scale(0.95);
                        transition: 0.2s;
                    }
                }
            }
        }

        .ArrFirstHeader {
            margin-right: 10px;
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 150px;
            width: 150px;
            font-size: 18px;
            box-shadow: 0px 0px 2px var(--primary-darkblue-color);
            border-radius: 30px;
            background-color: #fff;
            li {
                width: 30vw;
                &:not(last-child) {
                    margin-bottom: 5px;
                }
                &:first-child {
                    margin-top: 5px;
                }
            }
        }
        .ArrConnectHeader {
            display: none;
        }
        .MenuImage {
            width: 50px;
            height: 50px;
            border: none;
            background-color: #eff6fc14;
            img {
                width: 50px;
                height: 50px;
                filter: invert(80%) sepia(16%) saturate(194%) hue-rotate(152deg)
                    brightness(85%) contrast(88%);
            }
        }
    }
    @media screen and (min-width: 375px) and (max-width: 767px) {
        justify-content: space-between;
        .ImgHeaderUl {
            width: 300px;
            height: 100px;
            margin-left: 4vw;
        }
        .ListHeader {
            position: relative;
            padding-top: 8px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: end;
            height: 100px;
            button {
                position: fixed;
                img {
                    width: 40px;
                    height: 40px;
                    &:hover {
                        transform: scale(1.05);
                        transition: 0.2s;
                    }
                    &:active {
                        transform: scale(0.95);
                        transition: 0.2s;
                    }
                }
            }
        }

        .ArrFirstHeader {
            position: absolute;
            display: flex;
            margin-right: 20px;
            flex-direction: column;
            margin-top: 200px;
            width: 150px;
            font-size: 18px;
            box-shadow: 0px 0px 2px var(--primary-darkblue-color);
            border-radius: 30px;
            background-color: #fff;
            li {
                width: 30vw;
                &:not(last-child) {
                    margin-bottom: 10px;
                }
                &:first-child {
                    margin-top: 10px;
                }
            }
        }
        .ArrConnectHeader {
            display: none;
        }
        .MenuImage {
            width: 50px;
            height: 50px;
            margin-right: 15px;
            border: none;
            background-color: #eff6fc13;
            img {
                width: 50px;
                height: 50px;
                filter: invert(80%) sepia(16%) saturate(194%) hue-rotate(152deg)
                    brightness(85%) contrast(88%);
            }
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        justify-content: space-between;
        .LanguageImage {
            position: fixed;
            bottom: 0;
            right: 0;
            z-index: 1000;
        }
        .ImgHeaderUl {
            width: 350px;
            height: 100px;
            margin-left: 6vw;
        }
        .ListHeader {
            padding-top: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100px;
            button {
                position: fixed;
                margin-left: 5vw;
                img {
                    &:hover {
                        transform: scale(1.05);
                        transition: 0.2s;
                    }
                    &:active {
                        transform: scale(0.95);
                        transition: 0.2s;
                    }
                }
            }
        }

        .ArrFirstHeader {
            position: absolute;
            display: flex;
            flex-direction: column;
            margin-top: 200px;
            margin-right: -70px;
            width: 200px;
            font-size: 20px;
            box-shadow: 0px 0px 2px var(--primary-darkblue-color);
            border-radius: 30px;
            background-color: #fff;
            li {
                &:not(last-child) {
                    margin-bottom: 10px;
                    &:hover {
                        border-bottom: 1px solid var(--primary-darkblue-color);
                        transform: translateX(-20px);
                        transition: 0.5s;
                    }
                }
                &:first-child {
                    margin-top: 10px;
                }
            }
        }
        .ArrConnectHeader {
            display: none;
        }
        .MenuImage {
            width: 50px;
            margin-right: -180px;
            height: 50px;
            border: none;
            background-color: #eff6fc13;
            img {
                width: 50px;
                height: 50px;
                filter: invert(80%) sepia(16%) saturate(194%) hue-rotate(152deg)
                    brightness(85%) contrast(88%);
            }
        }
    }
    @media screen and (min-width: 1024px) and (max-width: 1279px) {
        background-color: ${(props) =>
            props.$isBlurred ? "#eff6fcae" : "#eff6fc"};
        position: fixed;
        top: 0;
        font-size: 18px;
        justify-content: space-between;
        .ListHeader {
            margin-left: 8vw;
            margin-right: 8vw;
        }
        .ImgHeaderUl {
            width: 230px;
            height: 60px;
            margin-top: -8px;
            margin-left: 6vw;
        }
        .ArrFirstHeader {
            text-align: center;
            display: flex;
            opacity: 1;
            transform: scale(1);
            pointer-events: all;
            li {
                margin-left: 3vw;
                &:first-child {
                    margin-left: 0px;
                }
            }
        }
        .MenuImage {
            display: none;
        }
    }
    @media screen and (min-width: 1280px) and (max-width: 1799px) {
        font-size: 20px;
        background-color: ${(props) =>
            props.$isBlurred ? "#eff6fcae" : "#eff6fc"};
        position: fixed;
        top: 0;
        justify-content: space-between;
        .ListHeader {
            margin-left: 8vw;
            margin-right: 8vw;
        }
        .ImgHeaderUl {
            width: 300px;
            height: 100px;
            margin-top: -10px;
            margin-left: 6vw;
        }
        .MenuImage {
            display: none;
        }
        .ArrFirstHeader {
            text-align: center;
            display: flex;
            opacity: 1;
            transform: scale(1);
            pointer-events: all;
            li {
                margin-left: 3vw;
                &:first-child {
                    margin-left: 0px;
                }
            }
        }
    }
    @media screen and (min-width: 1800px) {
        font-size: 20px;
        background-color: ${(props) =>
            props.$isBlurred ? "#eff6fcae" : "#eff6fc"};
        position: fixed;
        justify-content: space-between;
        top: 0;
        .ListHeader {
            margin-left: 7vw;
            margin-right: 7vw;
        }
        .ImgHeaderUl {
            margin-left: 7.5vw;
            width: 400px;
            height: 100px;
            margin-top: -10px;
        }
        .MenuImage {
            display: none;
        }
        .ArrFirstHeader {
            text-align: center;
            display: flex;
            opacity: 1;
            transform: scale(1);
            pointer-events: all;
            li {
                margin-left: 3vw;
                &:first-child {
                    margin-left: 0px;
                }
            }
        }
    }
`;
