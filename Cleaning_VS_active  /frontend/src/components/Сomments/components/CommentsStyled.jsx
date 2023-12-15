import { styled } from "styled-components";
import { FlexColumnCenter } from "../../StyledBase/Mixin";

export const CommentsStyled = styled.div`
    margin: 5vh auto;
    ${FlexColumnCenter}
    overflow: hidden;
    h1 {
        text-align: center;
        color: var(--primary-orange-color);
    }
    ul {
        list-style: none;
        li {
            .ImagesHeaderComment {
                margin-top: 1vh;
                list-style: none;
                display: flex;
                justify-content: space-between;
                li {
                    img {
                        width: 30px;
                        height: 30px;
                    }
                    &:first-child {
                        margin-top: 5vh;
                        width: 5vw;
                    }
                    &:last-child {
                        width: 5vw;
                    }
                }
            }
            .TextList {
                ${FlexColumnCenter}
                align-items: center;
                color: var(--primary-text-color);
                li {
                    &:last-child {
                        margin-top: 1vh;
                    }
                }
            }
        }
    }
    .ListButton {
        margin-top: 1vh;
        display: flex;
        justify-content: center;
        button {
            background-color: #fff;
            border: none;
        }
        img {
            width: 30px;
        }
    }
    .slide {
        display: flex;
        .slider {
            width: 50vw;
            ul {
                width: 50vw;
            }
        }
    }
    @media screen and (min-width: 320px) and (max-width: 459px) {
        width: 80vw;
        h1 {
            font-size: 30px;
        }
        .TextList {
            li {
                &:first-child {
                    font-size: 10px;
                }
                &:last-child {
                    font-size: 12px;
                }
            }
        }
        .slide {
            .slider {
                width: 80vw;
                ul {
                    width: 80vw;
                }
            }
        }
    }
    @media screen and (min-width: 460px) and (max-width: 699px) {
        width: 80vw;
        h1 {
            font-size: 30px;
        }
        .TextList {
            li {
                &:first-child {
                    font-size: 12px;
                }
            }
        }
        .slide {
            .slider {
                width: 80vw;
                ul {
                    width: 80vw;
                }
            }
        }
    }
    @media screen and (min-width: 700px) and (max-width: 767px) {
        width: 80vw;
        h1 {
            font-size: 30px;
        }
        .slide {
            .slider {
                width: 80vw;
                ul {
                    width: 80vw;
                }
            }
        }
    }
    @media screen and (min-width: 768px) and (max-width: 999px) {
        width: 80vw;
        h1 {
            font-size: 40px;
        }
        .slide {
            .slider {
                width: 80vw;
                ul {
                    width: 80vw;
                }
            }
        }
    }
    @media screen and (min-width: 1000px) and (max-width: 1199px) {
        width: 80vw;
        h1 {
            font-size: 40px;
        }
        .slide {
            .slider {
                width: 80vw;
                ul {
                    width: 80vw;
                }
            }
        }
    }
    @media screen and (min-width: 1200px) {
        width: 50vw;
        h1 {
            font-size: 40px;
        }
        .slider {
            width: 50vw;
            ul {
                width: 50vw;
            }
        }
    }
`;
