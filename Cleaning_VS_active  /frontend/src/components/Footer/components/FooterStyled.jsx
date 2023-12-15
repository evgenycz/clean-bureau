import { styled } from "styled-components";

export const FooterStyled = styled.div`
    background-color: var(--primary-darkblue-color);
    height: 300px;
    width: 100%;
    bottom: 0;
    .FooterMainList {
        display: flex;
        list-style: none;
        justify-content: space-between;
        width: 95%;
        margin-left: 7.5vw;
        h5 {
            margin-top: 9vh;
            color: #fff;
            font-weight: 400;
            font-size: 14px;
        }
        .FooterContacts {
            margin-right: 7.5vw;
            margin-top: 9vh;
            list-style: none;
            font-size: 14px;
            color: #fff;
            li {
                &:first-child {
                    margin-bottom: 1vh;
                    text-decoration: underline;
                }
                &:nth-child(2) {
                    margin-bottom: 1vh;
                    a {
                        text-decoration: none;
                        color: #fff;
                    }
                }
            }

            .FooterContactsImages {
                list-style: none;
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                img {
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }
    @media screen and (min-width: 320px) and (max-width: 599px) {
        .FooterMainList {
            h5 {
                width: 55vw;
                margin-top: 4vh;
                color: #fff;
                font-weight: 400;
                font-size: 10px;
            }
            .FooterContacts {
                margin-top: 4vh;
                font-size: 12px;
                margin-right: 10vw;
                margin-left: 2vw;
                .FooterContactsImages {
                    img {
                        width: 30px;
                        height: 30px;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 600px) and (max-width: 999px) {
        .FooterMainList {
            h5 {
                width: 55vw;
                margin-top: 5vh;
                color: #fff;
                font-weight: 400;
                font-size: 12px;
            }
            .FooterContacts {
                margin-top: 5vh;
                font-size: 12px;
                margin-right: 10vw;
                margin-left: 2vw;
            }
        }
    }
    @media screen and (min-width: 1000px) and (max-width: 1399px) {
        .FooterMainList {
            h5 {
                width: 45vw;
                margin-top: 9vh;
                color: #fff;
                font-weight: 400;
                font-size: 12px;
            }
            .FooterContacts {
                margin-top: 9vh;
                font-size: 12px;
            }
        }
    }
    @media screen and (min-width: 1400px) {
        .FooterMainList {
            h5 {
                width: 45vw;
                margin-top: 9vh;
                color: #fff;
                font-weight: 400;
                font-size: 14px;
            }
            .FooterContacts {
                margin-top: 9vh;
                font-size: 14px;
            }
        }
    }
`;
