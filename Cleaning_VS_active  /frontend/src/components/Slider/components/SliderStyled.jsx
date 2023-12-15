import { styled } from "styled-components";

export const SliderStyled = styled.div`
    margin-top: 100px;
    .MainListSliderAll {
        justify-content: center;
        height: 50px;
        display: flex;
        list-style: none;
        .ListSlider {
            text-align: center;
            z-index: 9;
            background-color: #fff;
            &:hover {
                background-color: #eff6fc;
            }
            a {
                text-decoration: none;
                color: var(--primary-text-color);
            }
            &:first-child {
                border-radius: 20px 0 0 20px;
                border-right: 2px solid var(--primary-text-color);
            }
            &:last-child {
                border-radius: 0 20px 20px 0;
                border-left: 2px solid var(--primary-text-color);
            }
        }
        .ListSlider.active {
            text-align: center;
            z-index: 9;
            background-color: var(--primary-darkblue-color);
            a {
                text-decoration: none;
                color: #fff;
            }
            &:first-child {
                border-radius: 20px 0 0 20px;
                border-right: 2px solid var(--primary-text-color);
            }
            &:last-child {
                border-radius: 0 20px 20px 0;
                border-left: 2px solid var(--primary-text-color);
            }
        }
    }
    @media screen and (min-width: 320px) and (max-width: 479px) {
        .ListSlider {
            margin-top: 10px;
            font-size: 8px;
            width: 15vw;
            height: 10px;
            padding-top: 1px;
        }
        .ListSlider.active {
            width: 15vw;
            height: 10px;
            padding-top: 1px;
            font-size: 8px;
        }
    }
    @media screen and (min-width: 480px) and (max-width: 659px) {
        .ListSlider {
            margin-top: 20px;
            font-size: 9px;
            width: 12vw;
            height: 15px;
            padding-top: 3px;
        }
        .ListSlider.active {
            width: 12vw;
            height: 15px;
            padding-top: 3px;
            font-size: 9px;
        }
    }
    @media screen and (min-width: 660px) and (max-width: 859px) {
        .MainListSliderAll {
            .ListSlider {
                margin-top: 30px;
                font-size: 11px;
                width: 12vw;
                height: 20px;
                padding-top: 8px;
            }
            .ListSlider.active {
                width: 12vw;
                height: 20px;
                padding-top: 8px;
                font-size: 11px;
            }
        }
    }
    @media screen and (min-width: 860px) and (max-width: 1189px) {
        .MainListSliderAll {
            .ListSlider {
                margin-top: 30px;
                font-size: 14px;
                width: 12vw;
                height: 30px;
                padding-top: 12px;
            }
            .ListSlider.active {
                width: 12vw;
                height: 30px;
                padding-top: 12px;
                font-size: 14px;
            }
        }
    }
    @media screen and (min-width: 1190px) and (max-width: 1599px) {
        .MainListSliderAll {
            .ListSlider {
                margin-top: 30px;
                width: 10vw;
                height: 30px;
                padding-top: 12px;
            }
            .ListSlider.active {
                width: 10vw;
                height: 30px;
                padding-top: 12px;
            }
        }
    }
    @media screen and (min-width: 1600px) {
        .MainListSliderAll {
            .ListSlider {
                margin-top: 30px;
                width: 8vw;
                height: 30px;
                padding-top: 1vh;
            }
            .ListSlider.active {
                width: 8vw;
                height: 30px;
                padding-top: 1vh;
            }
        }
    }
`;
