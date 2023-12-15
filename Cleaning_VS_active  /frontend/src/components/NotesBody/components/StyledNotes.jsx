import styled from "styled-components";

export const StyledNotes = styled.div`
    @media screen and (min-width: 320px) and (max-width: 374px) {
        h1 {
            margin-top: 50px;
            text-align: center;
            color: var(--primary-orange-color);
            font-size: 25px;
        }
        h3 {
            margin-top: 20px;
            font-size: 15px;
            text-align: center;
            color: var(--primary-text-color);
        }
        .MainServicesList {
            display: flex;
            list-style: none;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            margin-top: 20px;
            &:last-child {
                li {
                    &:last-child {
                        margin-top: 3px;
                    }
                }
            }
            .SvgListF {
                display: none;
            }
            .SvgListS {
                display: none;
            }
            .ImagesList {
                width: 12vw;
                &:last-child {
                    img {
                        margin-left: 0.5vw;
                        margin-top: -18px;
                    }
                }
                ul {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    li {
                        img {
                            width: 70px;
                            height: 80px;
                        }
                        &:first-child {
                            margin-bottom: 15px;
                        }
                        &:nth-child(2) {
                            text-align: center;
                            color: var(--primary-text-color);
                            width: 70px;
                            font-size: 12px;
                            &:last-child {
                                margin-top: -10px;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 375px) and (max-width: 499px) {
        h1 {
            margin-top: 100px;
            text-align: center;
            color: var(--primary-orange-color);
            font-size: 30px;
        }
        h3 {
            margin-top: 20px;
            font-size: 18px;
            text-align: center;
            color: var(--primary-text-color);
        }
        .MainServicesList {
            display: flex;
            list-style: none;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            margin-top: 30px;
            .SvgListF {
                display: none;
            }
            .SvgListS {
                display: none;
            }
            .ImagesList {
                width: 12vw;
                &:first-child {
                    margin-top: 8px;
                    img {
                        margin-bottom: 7px;
                    }
                }
                &:last-child {
                    margin-top: 10px;
                    img {
                        margin-left: 0.5vw;
                        margin-top: -8px;
                    }
                }
                ul {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    li {
                        img {
                            width: 80px;
                            height: 90px;
                        }
                        &:first-child {
                            margin-bottom: 6px;
                        }
                        &:nth-child(2) {
                            text-align: center;
                            color: var(--primary-text-color);
                            width: 100px;
                            font-size: 12px;
                            &:last-child {
                                margin-top: -10px;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 500px) and (max-width: 767px) {
        h1 {
            margin-top: 100px;
            text-align: center;
            color: var(--primary-orange-color);
            font-size: 30px;
        }
        h3 {
            margin-top: 20px;
            font-size: 18px;
            text-align: center;
            color: var(--primary-text-color);
        }
        .MainServicesList {
            display: flex;
            list-style: none;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            margin-top: 30px;
            .SvgListF {
                width: 30px;
                svg {
                    margin-top: -35px;
                    margin-left: -50px;
                    width: 150px;
                }
            }
            .SvgListS {
                width: 30px;
                svg {
                    margin-top: -25px;
                    margin-left: -40px;
                    width: 120px;
                }
            }
            .ImagesList {
                width: 12vw;
                &:first-child {
                    margin-top: 6px;
                    img {
                        margin-bottom: 6px;
                    }
                }
                &:last-child {
                    margin-top: -10px;
                    img {
                        margin-left: 0.5vw;
                        margin-top: 10px;
                    }
                }
                ul {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    li {
                        img {
                            width: 80px;
                            height: 90px;
                        }
                        &:first-child {
                            margin-bottom: 10px;
                        }
                        &:nth-child(2) {
                            text-align: center;
                            color: var(--primary-text-color);
                            width: 100px;
                            font-size: 12px;
                            &:last-child {
                                margin-top: -10px;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        h1 {
            margin-top: 100px;
            text-align: center;
            color: var(--primary-orange-color);
            font-size: 40px;
        }
        h3 {
            margin-top: 20px;
            text-align: center;
            color: var(--primary-text-color);
        }
        .MainServicesList {
            display: flex;
            list-style: none;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 50px;
            margin-left: 20px;
            .SvgListF {
                width: 100px;
                svg {
                    margin-top: -50px;
                    margin-left: -20px;
                    width: 150px;
                }
            }
            .SvgListS {
                width: 100px;
                svg {
                    margin-top: -30px;
                    margin-left: -15px;
                    width: 120px;
                }
            }
            .ImagesList {
                width: 12vw;
                &:last-child {
                    img {
                        margin-left: 0.5vw;
                    }
                }
                ul {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    li {
                        img {
                            width: 100px;
                            height: 110px;
                        }
                        &:first-child {
                            margin-bottom: 20px;
                        }
                        &:nth-child(2) {
                            text-align: center;
                            color: var(--primary-text-color);
                            width: 150px;
                            font-size: 13px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1024px) and (max-width: 1279px) {
        h1 {
            margin-top: 100px;
            text-align: center;
            color: var(--primary-orange-color);
            font-size: 40px;
        }
        h3 {
            margin-top: 20px;
            text-align: center;
            color: var(--primary-text-color);
        }
        .MainServicesList {
            display: flex;
            list-style: none;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 50px;
            margin-left: 20px;
            .SvgListF {
                width: 150px;
                svg {
                    margin-top: -55px;
                    margin-left: -20px;
                    width: 200px;
                }
            }
            .SvgListS {
                width: 150px;
                svg {
                    margin-top: -40px;
                    margin-left: -20px;
                    width: 180px;
                }
            }
            .ImagesList {
                width: 12vw;
                &:last-child {
                    img {
                        margin-left: 0.5vw;
                    }
                }
                ul {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    li {
                        img {
                            width: 120px;
                            height: 130px;
                        }
                        &:first-child {
                            margin-bottom: 20px;
                        }
                        &:nth-child(2) {
                            text-align: center;
                            color: var(--primary-text-color);
                            width: 250px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1280px) and (max-width: 1799px) {
        h1 {
            margin-top: 100px;
            text-align: center;
            color: var(--primary-orange-color);
            font-size: 40px;
        }
        h3 {
            margin-top: 20px;
            text-align: center;
            color: var(--primary-text-color);
        }
        .MainServicesList {
            display: flex;
            list-style: none;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 50px;
            margin-left: 20px;
            .SvgListF {
                width: 150px;
                svg {
                    margin-top: -70px;
                    margin-left: -20px;
                    width: 200px;
                }
            }
            .SvgListS {
                width: 150px;
                svg {
                    margin-top: -40px;
                    margin-left: -30px;
                    width: 200px;
                }
            }
            .ImagesList {
                width: 12vw;
                &:last-child {
                    img {
                        margin-left: 0.5vw;
                    }
                }
                ul {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    li {
                        img {
                            width: 120px;
                            height: 130px;
                        }
                        &:first-child {
                            margin-bottom: 20px;
                        }
                        &:nth-child(2) {
                            text-align: center;
                            color: var(--primary-text-color);
                            width: 250px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1800px) {
        h1 {
            margin-top: 100px;
            text-align: center;
            color: var(--primary-orange-color);
            font-size: 40px;
        }
        h3 {
            margin-top: 20px;
            text-align: center;
            color: var(--primary-text-color);
        }
        .MainServicesList {
            display: flex;
            list-style: none;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 50px;
            margin-left: 20px;
            .SvgListF {
                width: 200px;
                svg {
                    margin-top: -70px;
                    width: 250px;
                }
            }
            .SvgListS {
                width: 200px;
                svg {
                    margin-top: -40px;
                    margin-left: -20px;
                    width: 250px;
                }
            }
            .ImagesList {
                width: 12vw;
                &:last-child {
                    img {
                        margin-left: 0.5vw;
                    }
                }
                ul {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    li {
                        img {
                            width: 150px;
                            height: 180px;
                        }
                        &:first-child {
                            margin-bottom: 20px;
                        }
                        &:nth-child(2) {
                            text-align: center;
                            color: var(--primary-text-color);
                            width: 250px;
                        }
                    }
                }
            }
        }
    }
`;
