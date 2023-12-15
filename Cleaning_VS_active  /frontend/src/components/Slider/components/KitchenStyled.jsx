import { styled } from "styled-components";

export const KitchenStyled = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: -50px;
    .MainImageSection {
        width: 100%;
        order: 2;
        .MainImageSlider {
            width: 100vw;
            object-fit: cover;
            z-index: 1;
            filter: brightness(50%);
        }
    }
    .MainListSlider {
        order: 1;
        z-index: 8;
        position: relative;
        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            list-style: none;
            .ElementList {
                position: absolute;
                display: flex;
                justify-content: center;
                cursor: pointer;
                &:hover {
                    li {
                        &:nth-child(2) {
                            transform: scale(1.05);
                            transition: 0.3s;
                            backdrop-filter: invert(10px);
                            border-radius: 30px;
                        }
                    }
                }
                &:first-child {
                    top: ${(props) =>
                        props.$dynamicheight - 0.51 * props.$dynamicheight}px;
                    left: ${(props) =>
                        props.$dynamicweight - 0.6 * props.$dynamicweight}px;
                }
                &:nth-child(2) {
                    top: ${(props) =>
                        props.$dynamicheight - 0.435 * props.$dynamicheight}px;
                    left: ${(props) =>
                        props.$dynamicweight - 0.3 * props.$dynamicweight}px;
                }
                &:nth-child(3) {
                    top: ${(props) =>
                        props.$dynamicheight - 0.475 * props.$dynamicheight}px;
                    left: ${(props) =>
                        props.$dynamicweight - 0.43 * props.$dynamicweight}px;
                    flex-direction: column;
                    align-items: center;
                }
                &:nth-child(4) {
                    top: ${(props) =>
                        props.$dynamicheight - 0.38 * props.$dynamicheight}px;
                    left: ${(props) =>
                        props.$dynamicweight - 0.25 * props.$dynamicweight}px;
                    flex-direction: column;
                    align-items: flex-end;
                }
                &:nth-child(5) {
                    top: ${(props) =>
                        props.$dynamicheight - 0.33 * props.$dynamicheight}px;
                    left: ${(props) =>
                        props.$dynamicweight - 0.22 * props.$dynamicweight}px;
                    flex-direction: column;
                    align-items: flex-end;
                }
                &:nth-child(6) {
                    top: ${(props) =>
                        props.$dynamicheight - 0.38 * props.$dynamicheight}px;
                    left: ${(props) =>
                        props.$dynamicweight - 0.42 * props.$dynamicweight}px;
                }
                &:nth-child(7) {
                    top: ${(props) =>
                        props.$dynamicheight - 0.23 * props.$dynamicheight}px;
                    left: ${(props) =>
                        props.$dynamicweight - 0.34 * props.$dynamicweight}px;
                }
                &:nth-child(8) {
                    top: ${(props) =>
                        props.$dynamicheight - 0.34 * props.$dynamicheight}px;
                    left: ${(props) =>
                        props.$dynamicweight - 0.67 * props.$dynamicweight}px;
                }
                &:nth-child(9) {
                    top: ${(props) =>
                        props.$dynamicheight - 0.07 * props.$dynamicheight}px;
                    left: ${(props) =>
                        props.$dynamicweight - 0.87 * props.$dynamicweight}px;
                }
                &:nth-child(10) {
                    top: ${(props) =>
                        props.$dynamicheight - 0.28 * props.$dynamicheight}px;
                    left: ${(props) =>
                        props.$dynamicweight - 0.65 * props.$dynamicweight}px;
                }
                li {
                    color: #fff;
                }
            }
        }
    }
    @media screen and (min-width: 320px) and (max-width: 399px) {
        .ElementList {
            width: 70px;
            .Circle {
                margin-right: 15px;
                margin-top: 6px;
                border: 1px solid #fff;
                border-radius: 50%;
            }
            li {
                font-size: 6px;
            }

            &:first-child {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 1px;
                }
            }
            &:nth-child(2) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 2px;
                }
            }
            &:nth-child(3) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: -1px;
                }
            }
            &:nth-child(4) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 25px;
                    margin-top: 0px;
                }
            }
            &:nth-child(5) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 40px;
                    margin-top: 2px;
                }
            }
            &:nth-child(6) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 3px;
                }
            }
            &:nth-child(7) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 2px;
                }
            }
            &:nth-child(8) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 2px;
                }
            }
            &:nth-child(9) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                }
            }
            &:nth-child(10) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 2px;
                }
            }
        }
    }
    @media screen and (min-width: 400px) and (max-width: 659px) {
        .ElementList {
            width: 95px;
            .Circle {
                margin-right: 15px;
                margin-top: 6px;
                border: 1px solid #fff;
                border-radius: 50%;
            }
            li {
                font-size: 7px;
            }

            &:first-child {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 1px;
                }
            }
            &:nth-child(2) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 2px;
                }
            }
            &:nth-child(3) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: -1px;
                }
            }
            &:nth-child(4) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 25px;
                    margin-top: 0px;
                }
            }
            &:nth-child(5) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 40px;
                    margin-top: 2px;
                }
            }
            &:nth-child(6) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 3px;
                }
            }
            &:nth-child(7) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 2px;
                }
            }
            &:nth-child(8) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 2px;
                }
            }
            &:nth-child(9) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                }
            }
            &:nth-child(10) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 2px;
                }
            }
        }
    }
    @media screen and (min-width: 660px) and (max-width: 859px) {
        .ElementList {
            width: 140px;
            .Circle {
                margin-right: 15px;
                margin-top: 6px;
                border: 2px solid #fff;
                border-radius: 50%;
            }
            li {
                font-size: 11px;
            }
            &:first-child {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 2px;
                }
            }
            &:nth-child(2) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 2px;
                }
            }
            &:nth-child(3) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 2px;
                }
            }
            &:nth-child(4) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 25px;
                    margin-top: 2px;
                }
            }
            &:nth-child(5) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 40px;
                    margin-top: 2px;
                }
            }
            &:nth-child(6) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 2px;
                }
            }
            &:nth-child(7) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 2px;
                }
            }
            &:nth-child(8) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 2px;
                }
            }
            &:nth-child(9) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                }
            }
            &:nth-child(10) {
                .Circle {
                    width: 1px;
                    height: 1px;
                    margin-right: 5px;
                    margin-top: 2px;
                }
            }
        }
    }
    @media screen and (min-width: 860px) and (max-width: 1049px) {
        .ElementList {
            width: 180px;
            .Circle {
                margin-right: 15px;
                margin-top: 6px;
                border: 3px solid #fff;
                border-radius: 50%;
            }
            li {
                font-size: 12px;
            }

            &:first-child {
                .Circle {
                    width: 3px;
                    height: 3px;
                }
            }
            &:nth-child(2) {
                .Circle {
                    width: 3px;
                    height: 3px;
                }
            }
            &:nth-child(3) {
                .Circle {
                    margin: 0;
                    width: 3px;
                    height: 3px;
                }
            }
            &:nth-child(4) {
                .Circle {
                    margin: 0;
                    width: 3px;
                    height: 3px;
                }
            }
            &:nth-child(5) {
                .Circle {
                    margin-right: 40px;
                    width: 3px;
                    height: 3px;
                }
            }
            &:nth-child(6) {
                .Circle {
                    width: 3px;
                    height: 3px;
                }
            }
            &:nth-child(7) {
                .Circle {
                    width: 3px;
                    height: 3px;
                }
            }
            &:nth-child(8) {
                .Circle {
                    width: 3px;
                    height: 3px;
                }
            }
            &:nth-child(9) {
                .Circle {
                    width: 3px;
                    height: 3px;
                }
            }
            &:nth-child(10) {
                .Circle {
                    width: 3px;
                    height: 3px;
                }
            }
        }
    }
    @media screen and (min-width: 1050px) and (max-width: 1189px) {
        .ElementList {
            width: 200px;
            li {
                font-size: 14px;
            }
            .Circle {
                margin-right: 20px;
                margin-top: 6px;
                border: 3px solid #fff;
                border-radius: 50%;
            }
            &:first-child {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(2) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(3) {
                .Circle {
                    margin: 0;
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(4) {
                .Circle {
                    margin: 0;
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(5) {
                .Circle {
                    margin-right: 40px;
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(6) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(7) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(8) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(9) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(10) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
        }
    }
    @media screen and (min-width: 1190px) and (max-width: 1399px) {
        .ElementList {
            width: 230px;
            li {
                font-size: 16px;
            }
            .Circle {
                margin-right: 20px;
                margin-top: 6px;
                border: 3px solid #fff;
                border-radius: 50%;
            }
            &:first-child {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(2) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(3) {
                .Circle {
                    margin: 0;
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(4) {
                .Circle {
                    margin: 0;
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(5) {
                .Circle {
                    margin-right: 40px;
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(6) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(7) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(8) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(9) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(10) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
        }
    }
    @media screen and (min-width: 1400px) and (max-width: 1675px) {
        .ElementList {
            width: 250px;
            li {
                font-size: 18px;
            }
            .Circle {
                margin-right: 20px;
                margin-top: 6px;
                border: 3px solid #fff;
                border-radius: 50%;
            }
            &:first-child {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(2) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(3) {
                .Circle {
                    margin: 0;
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(4) {
                .Circle {
                    margin: 0;
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(5) {
                .Circle {
                    margin-right: 40px;
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(6) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(7) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(8) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(9) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(10) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
        }
    }

    @media screen and (min-width: 1675px) {
        .ElementList {
            width: 300px;
            li {
                font-size: 20px;
            }
            .Circle {
                margin-right: 20px;
                margin-top: 6px;
                border: 3px solid #fff;
                border-radius: 50%;
            }
            &:first-child {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(2) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(3) {
                .Circle {
                    margin: 0;
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(4) {
                .Circle {
                    margin: 0;
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(5) {
                .Circle {
                    margin-right: 40px;
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(6) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(7) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(8) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(9) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
            &:nth-child(10) {
                .Circle {
                    width: 5px;
                    height: 5px;
                }
            }
        }
    }
`;
