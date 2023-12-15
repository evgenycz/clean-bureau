import styled from "styled-components";
import { FlexColumn } from "../../StyledBase/Mixin";

export const StyledServices = styled.div`
    @media screen and (min-width: 320px) and (max-width: 376px) {
        margin-top: 4vh;
        .MainList {
            display: flex;
            justify-content: center;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
            list-style: none;
            width: 95vw;
            margin: 0 auto;
            li {
                &:first-child {
                }
                &:nth-child(2) {
                    li {
                        img {
                            width: 100px;
                            height: 170px;
                            margin-top: -1vh;
                        }
                        &:nth-child(3) {
                            margin-top: -1vh;
                        }
                        &:nth-child(4) {
                            margin-top: 1.2vh;
                        }
                    }
                }
                &:last-child {
                    margin: 0 auto;
                }
            }
            .SubList {
                margin-top: 5vh;
                padding-top: 3vh;
                list-style: none;
                border-radius: 50px;
                background-image: linear-gradient(
                    to top,
                    #eff6fc 0%,
                    #c4defd 100%
                );
                width: 250px;
                height: 350px;
                box-shadow: 10px 10px 10px #dae8f5;
                ${FlexColumn}
                font-size: 20px;
                &:hover {
                    transform: scale(1.05);
                    transition: 0.5s;
                }
                h2 {
                    font-size: 23px;
                }
                li {
                    text-align: center;
                    color: var(--primary-text-color);
                    margin-left: 40px;
                    margin-right: 40px;
                    font-size: 15px;
                    &:nth-child(3) {
                        margin-top: 1vh;
                    }
                    &:nth-child(4) {
                        margin-top: 2vh;
                    }
                    &:nth-child(5) {
                        margin-top: 1vh;
                    }
                    &:nth-child(6) {
                        margin-top: 1vh;
                    }
                    img {
                        width: 100px;
                        height: 120px;
                        margin-top: 1vh;
                    }
                }
            }
            .SubListDif {
                margin-top: 5vh;
                padding-top: 3vh;
                list-style: none;
                border-radius: 50px;
                background-image: linear-gradient(
                    to top,
                    #eff6fc 0%,
                    #c4defd 100%
                );
                width: 250px;
                height: 350px;
                box-shadow: 10px 10px 10px #dae8f5;
                ${FlexColumn}
                font-size: 15px;
                &:hover {
                    transform: scale(1.05);
                    transition: 0.5s;
                }
                h2 {
                    font-size: 23px;
                }
                li {
                    text-align: center;
                    color: var(--primary-text-color);
                    margin-left: 30px;
                    margin-right: 30px;
                    font-size: 15px;
                    &:nth-child(3) {
                        margin-top: 1vh;
                    }
                    &:nth-child(4) {
                        margin-top: 1vh;
                    }
                    &:nth-child(5) {
                        margin-top: 1vh;
                    }
                    &:nth-child(6) {
                        margin-top: 1vh;
                    }
                    img {
                        width: 150px;
                        height: 120px;
                    }
                }
            }
        }
        h1 {
            text-align: center;
            font-size: 25px;
            color: var(--primary-orange-color);
        }
    }
    @media screen and (min-width: 377px) and (max-width: 767px) {
        margin-top: 80px;
        .MainList {
            display: flex;
            justify-content: center;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
            list-style: none;
            width: 95vw;
            margin: 0 auto;
            li {
                &:first-child {
                }
                &:nth-child(2) {
                    li {
                        img {
                            width: 150px;
                            height: 150px;
                        }
                    }
                }
                &:last-child {
                    margin: 0 auto;
                }
            }
            .SubList {
                margin-top: 50px;
                padding-top: 40px;
                list-style: none;
                border-radius: 50px;
                background-image: linear-gradient(
                    to top,
                    #eff6fc 0%,
                    #c4defd 100%
                );
                width: 350px;
                height: 400px;
                box-shadow: 10px 10px 10px #dae8f5;
                ${FlexColumn}
                font-size: 20px;
                &:hover {
                    transform: scale(1.05);
                    transition: 0.5s;
                }
                li {
                    text-align: center;
                    color: var(--primary-text-color);
                    margin-left: 40px;
                    margin-right: 40px;
                    font-size: 18px;
                    &:nth-child(3) {
                        margin-top: 10px;
                    }
                    &:nth-child(4) {
                        margin-top: 20px;
                    }
                    &:nth-child(5) {
                        margin-top: 10px;
                    }
                    &:nth-child(6) {
                        margin-top: 10px;
                    }
                    img {
                        width: 100px;
                        height: 150px;
                    }
                }
            }
            .SubListDif {
                margin-top: 50px;
                padding-top: 40px;
                list-style: none;
                border-radius: 50px;
                background-image: linear-gradient(
                    to top,
                    #eff6fc 0%,
                    #c4defd 100%
                );
                width: 350px;
                height: 400px;
                box-shadow: 10px 10px 10px #dae8f5;
                ${FlexColumn}
                font-size: 20px;
                &:hover {
                    transform: scale(1.05);
                    transition: 0.5s;
                }
                li {
                    text-align: center;
                    color: var(--primary-text-color);
                    margin-left: 50px;
                    margin-right: 50px;
                    font-size: 18px;
                    &:nth-child(3) {
                        margin-top: 10px;
                    }
                    &:nth-child(4) {
                        margin-top: 10px;
                    }
                    &:nth-child(5) {
                        margin-top: 10px;
                    }
                    &:nth-child(6) {
                        margin-top: 10px;
                    }
                    img {
                        width: 150px;
                        height: 170px;
                        margin-top: -15px;
                    }
                }
            }
        }
        h1 {
            text-align: center;
            font-size: 30px;
            color: var(--primary-orange-color);
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        margin-top: 200px;
        .MainList {
            display: flex;
            justify-content: center;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
            list-style: none;
            width: 95vw;
            margin: 0 auto;
            li {
                &:last-child {
                    margin: 0 auto;
                }
            }
            .SubList {
                margin-top: 50px;
                padding-top: 50px;
                list-style: none;
                border-radius: 50px;
                background-image: linear-gradient(
                    to top,
                    #eff6fc 0%,
                    #c4defd 100%
                );
                width: 450px;
                height: 400px;
                box-shadow: 10px 10px 10px #dae8f5;
                ${FlexColumn}
                font-size: 20px;
                &:hover {
                    transform: scale(1.05);
                    transition: 0.5s;
                }
                li {
                    text-align: center;
                    color: var(--primary-text-color);
                    margin-left: 40px;
                    margin-right: 40px;
                    font-size: 18px;
                    &:nth-child(3) {
                        margin-top: 10px;
                    }
                    &:nth-child(4) {
                        margin-top: 30px;
                    }
                    &:nth-child(5) {
                        margin-top: 10px;
                    }
                    &:nth-child(6) {
                        margin-top: 10px;
                    }
                    img {
                        width: 100px;
                        height: 150px;
                    }
                }
            }
        }
        .SubListDif {
            margin-top: 50px;
            padding-top: 50px;
            list-style: none;
            border-radius: 50px;
            background-image: linear-gradient(to top, #eff6fc 0%, #c4defd 100%);
            width: 450px;
            height: 400px;
            box-shadow: 10px 10px 10px #dae8f5;
            ${FlexColumn}
            font-size: 20px;
            &:hover {
                transform: scale(1.05);
                transition: 0.5s;
            }
            li {
                text-align: center;
                color: var(--primary-text-color);
                margin-left: 50px;
                margin-right: 50px;
                font-size: 18px;
                &:nth-child(3) {
                    margin-top: 10px;
                }
                &:nth-child(4) {
                    margin-top: 15px;
                }
                &:nth-child(5) {
                    margin-top: 10px;
                }
                &:nth-child(6) {
                    margin-top: 10px;
                }
                img {
                    width: 100px;
                    height: 150px;
                }
            }
        }
        h1 {
            text-align: center;
            font-size: 40px;
            color: var(--primary-orange-color);
        }
    }
    @media screen and (min-width: 1024px) and (max-width: 1279px) {
        .MainList {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            list-style: none;
            width: 95vw;
            margin: 0 auto;
            li {
                &:first-child {
                    margin-left: 3.2vw;
                }
                &:nth-child(2) {
                    margin-right: 1.8vw;
                }
                &:last-child {
                    margin: 0 auto;
                }
            }
            .SubList {
                margin-top: 50px;
                padding-top: 50px;
                list-style: none;
                border-radius: 50px;
                background-image: linear-gradient(
                    to top,
                    #eff6fc 0%,
                    #c4defd 100%
                );
                width: 450px;
                height: 500px;
                box-shadow: 10px 10px 10px #dae8f5;
                ${FlexColumn}
                font-size: 20px;
                &:hover {
                    transform: scale(1.05);
                    transition: 0.5s;
                }
                li {
                    text-align: center;
                    color: var(--primary-text-color);
                    margin-left: 40px;
                    margin-right: 40px;
                    font-size: 18px;
                    &:nth-child(3) {
                        margin-top: 15px;
                    }
                    &:nth-child(4) {
                        margin-top: 60px;
                    }
                    &:nth-child(5) {
                        margin-top: 10px;
                    }
                    &:nth-child(6) {
                        margin-top: 10px;
                    }
                    img {
                        width: 150px;
                        height: 200px;
                        margin-top: 10px;
                    }
                }
            }
            .SubListDif {
                margin-top: 50px;
                padding-top: 50px;
                list-style: none;
                border-radius: 50px;
                background-image: linear-gradient(
                    to top,
                    #eff6fc 0%,
                    #c4defd 100%
                );
                width: 450px;
                height: 500px;
                box-shadow: 10px 10px 10px #dae8f5;
                ${FlexColumn}
                font-size: 20px;
                &:hover {
                    transform: scale(1.05);
                    transition: 0.5s;
                }
                margin-right: -3.5vw;
                li {
                    text-align: center;
                    color: var(--primary-text-color);
                    margin-left: 50px;
                    margin-right: 50px;
                    font-size: 18px;
                    &:nth-child(3) {
                        margin-top: 15px;
                    }
                    &:nth-child(4) {
                        margin-top: 60px;
                    }
                    &:nth-child(5) {
                        margin-top: 10px;
                    }
                    &:nth-child(6) {
                        margin-top: 10px;
                    }
                    img {
                        width: 150px;
                        height: 200px;
                        margin-top: -10px;
                    }
                }
            }
        }
        h1 {
            text-align: center;
            font-size: 40px;
            color: var(--primary-orange-color);
        }
    }
    @media screen and (min-width: 1280px) and (max-width: 1799px) {
        margin-top: 100px;
        .MainList {
            display: flex;
            justify-content: space-between;
            list-style: none;
            width: 85vw;
            margin: 0 auto;
            li {
                &:first-child {
                    margin-left: -1.6vw;
                }
            }
            .SubList {
                margin-top: 100px;
                padding-top: 40px;
                list-style: none;
                border-radius: 50px;
                background-image: linear-gradient(
                    to top,
                    #eff6fc 0%,
                    #c4defd 100%
                );
                width: 375px;
                height: 550px;
                box-shadow: 10px 10px 10px #dae8f5;
                ${FlexColumn}
                font-size: 20px;
                &:hover {
                    transform: scale(1.05);
                    transition: 0.5s;
                }
                li {
                    text-align: center;
                    color: var(--primary-text-color);
                    margin-left: 50px;
                    margin-right: 50px;
                    font-size: 18px;
                    &:nth-child(3) {
                        margin-top: 40px;
                    }
                    &:nth-child(4) {
                        margin-top: 50px;
                    }
                    &:nth-child(5) {
                        margin-top: 10px;
                    }
                    &:nth-child(6) {
                        margin-top: 10px;
                    }
                    img {
                        width: 200px;
                        height: 247px;
                    }
                }
            }
            .SubListDif {
                margin-top: 100px;
                padding-top: 40px;
                list-style: none;
                border-radius: 50px;
                background-image: linear-gradient(
                    to top,
                    #eff6fc 0%,
                    #c4defd 100%
                );
                width: 375px;
                height: 550px;
                box-shadow: 10px 10px 10px #dae8f5;
                ${FlexColumn}
                font-size: 20px;
                &:hover {
                    transform: scale(1.05);
                    transition: 0.5s;
                }
                margin-right: -3.5vw;
                li {
                    text-align: center;
                    color: var(--primary-text-color);
                    margin-left: 50px;
                    margin-right: 50px;
                    font-size: 18px;
                    &:nth-child(3) {
                        margin-top: 50px;
                    }
                    &:nth-child(4) {
                        margin-top: 30px;
                    }
                    &:nth-child(5) {
                        margin-top: 10px;
                    }
                    &:nth-child(6) {
                        margin-top: 10px;
                    }
                    img {
                        width: 200px;
                        height: 247px;
                        margin-top: -10px;
                    }
                }
            }
        }
        h1 {
            text-align: center;
            font-size: 40px;
            color: var(--primary-orange-color);
        }
    }
    @media screen and (min-width: 1800px) {
        margin-top: 100px;
        .MainList {
            display: flex;
            justify-content: space-between;
            list-style: none;
            width: 85vw;
            margin: 0 auto;
            .SubList {
                margin-top: 100px;
                padding-top: 80px;
                list-style: none;
                border-radius: 50px;
                background-image: linear-gradient(
                    to top,
                    #eff6fc 0%,
                    #c4defd 100%
                );
                width: 510px;
                height: 650px;
                box-shadow: 10px 10px 10px #dae8f5;
                ${FlexColumn}
                font-size: 20px;
                &:hover {
                    transform: scale(1.05);
                    transition: 0.5s;
                }
                li {
                    text-align: center;
                    color: var(--primary-text-color);
                    margin-left: 70px;
                    margin-right: 70px;
                    &:nth-child(3) {
                        margin-top: 40px;
                    }
                    &:nth-child(4) {
                        margin-top: 70px;
                    }
                    &:nth-child(5) {
                        margin-top: 10px;
                    }
                    &:nth-child(6) {
                        margin-top: 10px;
                    }
                    img {
                        width: 200px;
                        height: 247px;
                    }
                }
            }
            .SubListDif {
                margin-top: 100px;
                padding-top: 80px;
                list-style: none;
                border-radius: 50px;
                background-image: linear-gradient(
                    to top,
                    #eff6fc 0%,
                    #c4defd 100%
                );
                width: 510px;
                height: 650px;
                box-shadow: 10px 10px 10px #dae8f5;
                ${FlexColumn}
                font-size: 20px;
                &:hover {
                    transform: scale(1.05);
                    transition: 0.5s;
                }
                margin-right: -2.5vw;
                li {
                    text-align: center;
                    color: var(--primary-text-color);
                    margin-left: 70px;
                    margin-right: 70px;
                    &:nth-child(3) {
                        margin-top: 40px;
                    }
                    &:nth-child(4) {
                        margin-top: 48px;
                    }
                    &:nth-child(5) {
                        margin-top: 10px;
                    }
                    &:nth-child(6) {
                        margin-top: 10px;
                    }
                    img {
                        width: 200px;
                        height: 247px;
                    }
                }
            }
        }
        h1 {
            text-align: center;
            font-size: 40px;
            color: var(--primary-orange-color);
        }
    }
`;
