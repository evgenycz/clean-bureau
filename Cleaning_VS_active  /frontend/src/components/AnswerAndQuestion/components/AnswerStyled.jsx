import { styled } from "styled-components";

export const AnswerStyled = styled.div`
    margin: 0 auto;
    margin-bottom: 5vh;
    h1 {
        text-align: center;
        color: var(--primary-orange-color);
        margin-bottom: 5vh;
    }
    .ContainerAnswer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        section {
            background-color: #eff6fc;
            margin-bottom: 2vh;
            border-radius: 30px 30px 30px 30px;
            ul {
                list-style: none;
                display: flex;
                justify-content: space-between;
                padding: 1vh 1vw;
                li {
                    h3 {
                        cursor: pointer;
                        color: var(--primary-text-color);
                    }
                }
            }

            p {
                background-color: #eff6fc;
                border-radius: 0 0 30px 30px;
                border-top: 1px solid var(--primary-text-color);
                color: var(--primary-text-color);
            }
        }
    }
    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 80vw;
        h1 {
            font-size: 30px;
        }
        .ContainerAnswer {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            section {
                width: 80vw;
                ul {
                    li {
                        &:first-child {
                            margin-top: 0.3vh;
                            margin-left: 2vw;
                        }
                        h3 {
                            font-size: 15px;
                        }
                    }
                }
            }
            p {
                font-size: 13px;
                padding: 1vh 3vw;
            }
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1199px) {
        width: 80vw;
        h1 {
            font-size: 40px;
        }
        .ContainerAnswer {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            section {
                width: 80vw;
                ul {
                    li {
                        &:first-child {
                            padding-left: 1vh;
                            padding-top: 0.2vh;
                        }
                        h3 {
                            font-size: 20px;
                        }
                    }
                }
            }
            p {
                padding: 1vh 2vw;
            }
        }
    }
    @media screen and (min-width: 1200px) {
        width: 50vw;
        h1 {
            font-size: 40px;
        }
        .ContainerAnswer {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            section {
                width: 50vw;
                ul {
                    li {
                        h3 {
                            font-size: 20px;
                        }
                    }
                }
            }
            p {
                padding: 1vh 1vw;
            }
        }
    }
`;
