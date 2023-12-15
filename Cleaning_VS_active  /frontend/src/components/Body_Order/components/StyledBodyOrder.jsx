import styled from "styled-components";

export const StyledBodyOrder = styled.div`
    @media screen and (min-width: 320px) and (max-width: 376px) {
        margin: 40px 4vw 0 4vw;
        .ImagesList {
            display: flex;
            width: 100%;
            margin-top: 5vh;
            position: relative;
            .PictureList {
                z-index: 10;
            }
            li {
                .ImagesSubList {
                    margin-left: 20vw;
                    margin-top: 0vh;
                    width: 50vw;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .ImagesSubListText {
                        display: flex;
                        li {
                            text-align: center;
                            img {
                                width: 175px;
                                height: 175px;
                            }
                        }
                        .ImagesListNoteFirst {
                            background-color: #ffffff96;
                            border-top-left-radius: 30px;
                            backdrop-filter: blur(3px);
                            z-index: 10;
                            width: 150px;
                            margin-left: 2vw;
                            border-right: 3px solid
                                var(--primary-darkblue-color);
                            border-bottom: 3px solid
                                var(--primary-darkblue-color);
                            color: var(--primary-text-color);
                            li {
                                width: 150px;
                                font-size: 13px;
                                img {
                                    width: 95px;
                                    height: 95px;
                                }
                                &:nth-child(2) {
                                    margin-top: -16px;
                                    padding-bottom: 2vh;
                                    width: 140px;
                                    margin-left: 6px;
                                }
                            }
                        }
                        .ImagesListNoteSecond {
                            background-color: #ffffff96;
                            border-top-right-radius: 30px;
                            backdrop-filter: blur(3px);
                            width: 150px;
                            border-bottom: 3px solid
                                var(--primary-darkblue-color);
                            color: var(--primary-text-color);

                            li {
                                width: 150px;
                                font-size: 13px;
                                img {
                                    width: 95px;
                                    height: 95px;
                                    margin-right: 2.5vw;
                                }
                                &:nth-child(2) {
                                    margin-top: -16px;
                                    padding-bottom: 2vh;
                                    width: 130px;
                                    margin-left: 0vw;
                                }
                            }
                        }
                        .ImagesListNoteThird {
                            background-color: #ffffff96;
                            border-bottom-left-radius: 30px;
                            backdrop-filter: blur(3px);
                            width: 150px;
                            border-right: 3px solid
                                var(--primary-darkblue-color);
                            margin-left: 2vw;
                            color: var(--primary-text-color);
                            li {
                                width: 140px;
                                font-size: 13px;
                                img {
                                    margin-top: -0.4vh;
                                    width: 95px;
                                    height: 95px;
                                    margin-left: 1.5vw;
                                }
                                &:nth-child(2) {
                                    padding-bottom: 2vh;
                                    margin-left: 0vw;
                                }
                            }
                        }
                        .ImagesListNoteClock {
                            background-color: #ffffff96;
                            border-bottom-right-radius: 30px;
                            backdrop-filter: blur(3px);
                            width: 150px;
                            color: var(--primary-text-color);
                            li {
                                width: 140px;
                                margin-left: 2.5vw;
                                font-size: 13px;
                                .ClockImg {
                                    margin-top: 15px;
                                    width: 65px;
                                    height: 65px;
                                    margin-left: -5vw;
                                }
                                &:nth-child(2) {
                                    padding-bottom: 2vh;
                                    margin-left: 0vw;
                                    margin-top: 10px;
                                }
                            }
                        }
                    }
                }
            }
            .MainPicture {
                margin-top: -40px;
                position: absolute;
                width: 90vw;
                img {
                    z-index: 1;
                    width: 90vw;
                    height: 350px;
                    filter: blur(3px);
                    opacity: 0.5;
                }
            }
        }
        ul {
            list-style: none;
            li {
                .HeadArr {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    list-style: none;
                    .BlueText {
                        color: var(--primary-darkblue-color);
                        font-size: 17px;
                    }
                    .GreenText {
                        margin-left: 0.5vw;
                        color: var(--primary-green-color);
                        font-size: 17px;
                    }
                }
                p {
                    color: var(--primary-text-color);
                    margin-top: 5px;
                    font-size: 10px;
                    text-align: center;
                }
            }
        }
    }
    @media screen and (min-width: 377px) and (max-width: 767px) {
        margin: 40px 4vw 0 4vw;
        .ImagesList {
            display: flex;
            width: 100%;
            margin-top: 5vh;
            position: relative;
            .PictureList {
                z-index: 10;
            }
            li {
                .ImagesSubList {
                    margin-left: 20vw;
                    margin-top: 0vh;
                    width: 50vw;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .ImagesSubListText {
                        display: flex;
                        li {
                            text-align: center;
                            img {
                                width: 175px;
                                height: 175px;
                            }
                        }
                        .ImagesListNoteFirst {
                            background-color: #ffffff96;
                            border-top-left-radius: 30px;
                            backdrop-filter: blur(3px);
                            z-index: 10;
                            width: 150px;
                            margin-left: 2vw;
                            border-right: 3px solid
                                var(--primary-darkblue-color);
                            border-bottom: 3px solid
                                var(--primary-darkblue-color);
                            color: var(--primary-text-color);
                            li {
                                width: 150px;
                                font-size: 13px;
                                img {
                                    width: 95px;
                                    height: 95px;
                                }
                                &:nth-child(2) {
                                    margin-top: -16px;
                                    padding-bottom: 2vh;
                                    width: 140px;
                                    margin-left: 6px;
                                }
                            }
                        }
                        .ImagesListNoteSecond {
                            background-color: #ffffff96;
                            border-top-right-radius: 30px;
                            backdrop-filter: blur(3px);
                            width: 150px;
                            border-bottom: 3px solid
                                var(--primary-darkblue-color);
                            color: var(--primary-text-color);

                            li {
                                width: 150px;
                                font-size: 13px;
                                img {
                                    width: 95px;
                                    height: 95px;
                                    margin-left: 0.5vw;
                                }
                                &:nth-child(2) {
                                    margin-top: -16px;
                                    padding-bottom: 2vh;
                                    width: 130px;
                                    margin-left: 1vw;
                                }
                            }
                        }
                        .ImagesListNoteThird {
                            background-color: #ffffff96;
                            border-bottom-left-radius: 30px;
                            backdrop-filter: blur(3px);
                            width: 150px;
                            border-right: 3px solid
                                var(--primary-darkblue-color);
                            margin-left: 2vw;
                            color: var(--primary-text-color);
                            li {
                                width: 150px;
                                font-size: 13px;
                                img {
                                    margin-top: -0.3vh;
                                    width: 95px;
                                    height: 95px;
                                    margin-left: 1.5vw;
                                }
                                &:nth-child(2) {
                                    margin-top: -6px;
                                    padding-bottom: 2vh;
                                    margin-left: 0vw;
                                }
                            }
                        }
                        .ImagesListNoteClock {
                            background-color: #ffffff96;
                            border-bottom-right-radius: 30px;
                            backdrop-filter: blur(3px);
                            width: 150px;
                            color: var(--primary-text-color);
                            li {
                                width: 140px;
                                margin-left: 2.5vw;
                                font-size: 13px;
                                .ClockImg {
                                    margin-top: 19px;
                                    width: 65px;
                                    height: 65px;
                                    margin-left: -5vw;
                                }
                                &:nth-child(2) {
                                    margin-top: 2px;
                                    padding-bottom: 1.95vh;
                                    margin-left: 0vw;
                                }
                            }
                        }
                    }
                }
            }
            .MainPicture {
                margin-top: -40px;
                position: absolute;
                width: 90vw;
                img {
                    z-index: 1;
                    width: 90vw;
                    height: 350px;
                    filter: blur(3px);
                    opacity: 0.5;
                }
            }
        }
        ul {
            list-style: none;
            li {
                .HeadArr {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    list-style: none;
                    .BlueText {
                        color: var(--primary-darkblue-color);
                        font-size: 20px;
                    }
                    .GreenText {
                        margin-left: 0.5vw;
                        color: var(--primary-green-color);
                        font-size: 20px;
                    }
                }
                p {
                    color: var(--primary-text-color);
                    margin-top: 5px;
                    font-size: 15px;
                    text-align: center;
                }
            }
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        margin: 40px 6vw 0 6vw;
        .ImagesList {
            display: flex;
            width: 100%;
            margin-top: 6vh;
            position: relative;
            .PictureList {
                z-index: 10;
            }
            li {
                .ImagesSubList {
                    margin-left: 18vw;
                    margin-top: 5vh;
                    width: 50vw;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .ImagesSubListText {
                        display: flex;
                        li {
                            text-align: center;
                            img {
                                width: 175px;
                                height: 175px;
                            }
                        }
                        .ImagesListNoteFirst {
                            background-color: #ffffff96;
                            border-top-left-radius: 30px;
                            backdrop-filter: blur(3px);
                            z-index: 10;
                            width: 200px;
                            margin-left: 2vw;
                            border-right: 3px solid
                                var(--primary-darkblue-color);
                            border-bottom: 3px solid
                                var(--primary-darkblue-color);
                            color: var(--primary-text-color);
                            li {
                                margin-left: 1vw;
                                width: 184px;
                                font-size: 15px;
                                img {
                                    width: 115px;
                                    height: 115px;
                                }
                                &:nth-child(2) {
                                    margin-top: -20px;
                                    padding-bottom: 2vh;
                                    width: 160px;
                                    margin-left: 25px;
                                }
                            }
                        }
                        .ImagesListNoteSecond {
                            background-color: #ffffff96;
                            border-top-right-radius: 30px;
                            backdrop-filter: blur(3px);
                            width: 200px;
                            border-bottom: 3px solid
                                var(--primary-darkblue-color);
                            color: var(--primary-text-color);

                            li {
                                width: 180px;
                                font-size: 15px;
                                img {
                                    width: 115px;
                                    height: 115px;
                                    margin-left: 1.5vw;
                                }
                                &:nth-child(2) {
                                    margin-top: -20px;
                                    padding-bottom: 2vh;
                                    width: 155px;
                                    margin-left: 2.5vw;
                                }
                            }
                        }
                        .ImagesListNoteThird {
                            background-color: #ffffff96;
                            border-bottom-left-radius: 30px;
                            backdrop-filter: blur(3px);
                            width: 200px;
                            border-right: 3px solid
                                var(--primary-darkblue-color);
                            margin-left: 2vw;
                            color: var(--primary-text-color);
                            li {
                                width: 184px;
                                font-size: 15px;
                                img {
                                    margin-top: -0.4vh;
                                    width: 115px;
                                    height: 115px;
                                    margin-left: 1.5vw;
                                }
                                &:nth-child(2) {
                                    margin-top: -10px;
                                    padding-bottom: 2vh;
                                    margin-left: 0.9vw;
                                    width: 170px;
                                }
                            }
                        }
                        .ImagesListNoteClock {
                            background-color: #ffffff96;
                            border-bottom-right-radius: 30px;
                            backdrop-filter: blur(3px);
                            width: 200px;
                            color: var(--primary-text-color);
                            li {
                                width: 180px;
                                margin-left: 2.5vw;
                                font-size: 15px;
                                .ClockImg {
                                    margin-top: 25px;
                                    width: 75px;
                                    height: 75px;
                                    margin-left: -3vw;
                                }
                                &:nth-child(2) {
                                    padding-bottom: 2vh;
                                    margin-left: 1.5vw;
                                }
                            }
                        }
                    }
                }
            }
            .MainPicture {
                margin-top: -50px;
                position: absolute;
                width: 90vw;
                img {
                    width: 90vw;
                    height: 600px;
                    filter: blur(3px);
                    opacity: 0.5;
                }
            }
        }
        ul {
            list-style: none;
            li {
                .HeadArr {
                    display: flex;
                    list-style: none;
                    .BlueText {
                        color: var(--primary-darkblue-color);
                        font-size: 35px;
                    }
                    .GreenText {
                        margin-left: 0.5vw;
                        color: var(--primary-green-color);
                        font-size: 35px;
                    }
                }
                p {
                    color: var(--primary-text-color);
                    margin-top: 10px;
                }
            }
        }
    }

    @media screen and (min-width: 1024px) and (max-width: 1279px) {
        margin: 200px 6vw 0 6vw;
        .ImagesList {
            display: flex;
            width: 100%;
            margin-left: -2vw;
            margin-top: 50px;
            li {
                .ImagesSubList {
                    width: 25vw;
                    .ImagesSubListText {
                        display: flex;
                        li {
                            text-align: center;
                            img {
                                width: 175px;
                                height: 175px;
                            }
                        }
                        .ImagesListNoteFirst {
                            width: 200px;
                            margin-left: 2vw;
                            border-right: 3px solid
                                var(--primary-darkblue-color);
                            border-bottom: 3px solid
                                var(--primary-darkblue-color);
                            color: var(--primary-text-color);
                            li {
                                width: 184px;
                                font-size: 15px;
                                img {
                                    width: 115px;
                                    height: 115px;
                                }
                                &:nth-child(2) {
                                    margin-top: -20px;
                                    padding-bottom: 2vh;
                                    width: 160px;
                                    margin-left: 15px;
                                }
                            }
                        }
                        .ImagesListNoteSecond {
                            width: 200px;
                            border-bottom: 3px solid
                                var(--primary-darkblue-color);
                            color: var(--primary-text-color);
                            li {
                                width: 180px;
                                margin-left: 2.5vw;
                                font-size: 15px;
                                img {
                                    width: 115px;
                                    height: 115px;
                                }
                                &:nth-child(2) {
                                    margin-top: -20px;
                                    padding-bottom: 2vh;
                                    width: 155px;
                                    margin-left: 40px;
                                }
                            }
                        }
                        .ImagesListNoteThird {
                            width: 200px;
                            border-right: 3px solid
                                var(--primary-darkblue-color);
                            margin-left: 2vw;
                            color: var(--primary-text-color);
                            li {
                                width: 184px;
                                margin-top: -0.4vh;
                                font-size: 15px;
                                img {
                                    width: 115px;
                                    height: 115px;
                                }
                                &:nth-child(2) {
                                    margin-top: -10px;
                                    padding-bottom: 2vh;
                                }
                            }
                        }
                        .ImagesListNoteClock {
                            width: 200px;
                            margin-top: 25px;
                            color: var(--primary-text-color);
                            li {
                                width: 180px;
                                margin-left: 2.5vw;
                                font-size: 15px;
                                .ClockImg {
                                    width: 75px;
                                    height: 75px;
                                }
                                &:nth-child(2) {
                                    padding-bottom: 2vh;
                                }
                            }
                        }
                    }
                }
            }
            .MainPicture {
                margin-top: -200px;
                margin-left: 17vw;
                width: 65vw;
                img {
                    width: 50vw;
                    height: 650px;
                }
            }
        }
        ul {
            list-style: none;
            li {
                .HeadArr {
                    display: flex;
                    list-style: none;
                    .BlueText {
                        color: var(--primary-darkblue-color);
                        font-size: 40px;
                    }
                    .GreenText {
                        margin-left: 0.5vw;
                        color: var(--primary-green-color);
                        font-size: 40px;
                    }
                }
                p {
                    color: var(--primary-text-color);
                    margin-top: 20px;
                }
            }
        }
    }
    @media screen and (min-width: 1280px) and (max-width: 1799px) {
        margin: 150px 6vw 0 6vw;
        .ImagesList {
            display: flex;
            width: 100%;
            margin-left: -2vw;
            margin-top: 5vh;
            li {
                .ImagesSubList {
                    width: 25vw;
                    .ImagesSubListText {
                        display: flex;
                        li {
                            text-align: center;
                            img {
                                width: 175px;
                                height: 175px;
                            }
                        }
                        .ImagesListNoteFirst {
                            width: 250px;
                            margin-left: 2vw;
                            border-right: 3px solid
                                var(--primary-darkblue-color);
                            border-bottom: 3px solid
                                var(--primary-darkblue-color);
                            color: var(--primary-text-color);
                            li {
                                width: 184px;
                                margin-left: 2.5vw;
                                letter-spacing: 0.5px;
                                &:nth-child(2) {
                                    margin-top: -20px;
                                    padding-bottom: 2vh;
                                }
                            }
                        }
                        .ImagesListNoteSecond {
                            width: 250px;
                            border-bottom: 3px solid
                                var(--primary-darkblue-color);
                            color: var(--primary-text-color);
                            li {
                                width: 180px;
                                margin-left: 2.5vw;
                                letter-spacing: 0.5px;
                                &:nth-child(2) {
                                    margin-top: -20px;
                                    padding-bottom: 2vh;
                                }
                            }
                        }
                        .ImagesListNoteThird {
                            width: 250px;
                            border-right: 3px solid
                                var(--primary-darkblue-color);
                            margin-left: 2vw;
                            color: var(--primary-text-color);
                            li {
                                width: 184px;
                                margin-left: 2.5vw;
                                margin-top: -1vh;
                                letter-spacing: 0.5px;
                                &:nth-child(2) {
                                    margin-top: -10px;
                                    padding-bottom: 2vh;
                                }
                            }
                        }
                        .ImagesListNoteClock {
                            width: 250px;
                            margin-top: 30px;
                            color: var(--primary-text-color);
                            li {
                                width: 180px;
                                margin-left: 2.5vw;
                                letter-spacing: 0.5px;
                                .ClockImg {
                                    width: 125px;
                                    height: 125px;
                                }
                                &:nth-child(2) {
                                    padding-bottom: 2vh;
                                }
                            }
                        }
                    }
                }
            }
            .MainPicture {
                margin-top: -150px;
                margin-left: 18vw;
                width: 55vw;
                img {
                    width: 50vw;
                    height: 750px;
                }
            }
        }
        ul {
            list-style: none;
            li {
                .HeadArr {
                    display: flex;
                    list-style: none;
                    .BlueText {
                        color: var(--primary-darkblue-color);
                        font-size: 40px;
                    }
                    .GreenText {
                        margin-left: 0.5vw;
                        color: var(--primary-green-color);
                        font-size: 40px;
                    }
                }
                p {
                    color: var(--primary-text-color);
                    margin-top: 20px;
                }
            }
        }
    }
    @media screen and (min-width: 1800px) {
        margin: 200px 6vw 0 7.5vw;
        .ImagesList {
            display: flex;
            width: 100%;
            margin-left: -2vw;
            margin-top: 5vh;
            li {
                .ImagesSubList {
                    width: 25vw;
                    .ImagesSubListText {
                        display: flex;
                        li {
                            text-align: center;
                            img {
                                width: 175px;
                                height: 175px;
                            }
                        }
                        .ImagesListNoteFirst {
                            width: 304px;
                            margin-left: 2vw;
                            border-right: 3px solid
                                var(--primary-darkblue-color);
                            border-bottom: 3px solid
                                var(--primary-darkblue-color);
                            color: var(--primary-text-color);
                            li {
                                width: 184px;
                                margin-left: 2.5vw;
                                letter-spacing: 0.5px;
                                &:nth-child(2) {
                                    margin-top: -20px;
                                    padding-bottom: 2vh;
                                }
                            }
                        }
                        .ImagesListNoteSecond {
                            width: 304px;
                            border-bottom: 3px solid
                                var(--primary-darkblue-color);
                            color: var(--primary-text-color);
                            li {
                                width: 180px;
                                margin-left: 2.5vw;
                                letter-spacing: 0.5px;
                                &:nth-child(2) {
                                    margin-top: -20px;
                                    padding-bottom: 2vh;
                                }
                            }
                        }
                        .ImagesListNoteThird {
                            width: 304px;
                            border-right: 3px solid
                                var(--primary-darkblue-color);
                            margin-left: 2vw;
                            color: var(--primary-text-color);
                            li {
                                width: 184px;
                                margin-left: 2.5vw;
                                margin-top: -1vh;
                                letter-spacing: 0.5px;
                                &:nth-child(2) {
                                    margin-top: -10px;
                                    padding-bottom: 2vh;
                                }
                            }
                        }
                        .ImagesListNoteClock {
                            width: 304px;
                            margin-top: 30px;
                            color: var(--primary-text-color);
                            li {
                                width: 180px;
                                margin-left: 2.5vw;
                                letter-spacing: 0.5px;
                                .ClockImg {
                                    width: 125px;
                                    height: 125px;
                                }
                                &:nth-child(2) {
                                    padding-bottom: 2vh;
                                }
                            }
                        }
                    }
                }
            }
            .MainPicture {
                margin-top: -12vh;
                margin-left: 12vw;
                width: 60vw;
                img {
                    width: 50vw;
                    height: 750px;
                }
            }
        }
        ul {
            list-style: none;
            li {
                .HeadArr {
                    display: flex;
                    list-style: none;
                    .BlueText {
                        color: var(--primary-darkblue-color);
                        font-size: 40px;
                    }
                    .GreenText {
                        margin-left: 0.5vw;
                        color: var(--primary-green-color);
                        font-size: 40px;
                    }
                }
                p {
                    color: var(--primary-text-color);
                    margin-top: 20px;
                }
            }
        }
    }
`;
