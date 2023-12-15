import { styled } from "styled-components";

export const FormStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-radius: 50px;
        box-shadow: 0.5px 0.5px 5px var(--primary-darkblue-color);
        width: 50%;
        .CalcStyle {
            margin-top: 40px;
            display: flex;
            list-style: none;
            justify-content: space-between;
            margin-bottom: 40px;
            .CalcSubStyle {
                display: flex;
                list-style: none;
                justify-content: center;
                align-items: center;
                li {
                    &:first-child {
                        margin-right: 2vw;
                        color: var(--primary-darkblue-color);
                    }
                    &:last-child {
                        color: var(--primary-green-color);
                    }
                }
            }
        }
        .MainListUl {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            list-style: none;
            width: 100%;
            .TextError {
                position: absolute;
                margin-top: 50px;
                color: var(--primary-orange-color);
                font-size: 12px;
            }
            .LabelText {
                font-size: 18px;
                color: var(--primary-darkblue-color);
            }
            .LabelTextClean {
                font-size: 18px;
                color: var(--primary-darkblue-color);
                white-space: pre-line;
                width: 5vw;
            }
            .InputStyle {
                display: flex;
                flex-direction: column;
                align-items: center;
                .TextError {
                    position: absolute;
                    margin-top: 35px;
                    color: var(--primary-orange-color);
                    font-size: 12px;
                    text-align: center;
                }
            }
            margin-top: 40px;

            li {
                &:first-child {
                    margin-left: 2.6vw;
                }
                &:last-child {
                    text-align: start;
                    margin-left: 1vw;
                    margin-right: 5vw;
                    color: var(--primary-text-color);
                }
                label {
                    display: flex;
                    font-size: 18px;
                    color: var(--primary-darkblue-color);
                    justify-content: space-between;
                    align-items: center;
                    .TextError {
                        color: var(--primary-orange-color);
                    }
                    .TextErrorClean {
                        position: absolute;
                        color: var(--primary-orange-color);
                    }
                    .BlockSelector {
                        display: flex;
                        align-items: center;
                    }
                    .BuildingStyleInputAll {
                        position: absolute;
                        list-style: none;
                        border-radius: 10px;
                        border: 1px solid var(--primary-text-color);
                        background-color: #fff;
                        li {
                            &:first-child {
                                margin: 0;
                            }
                            &:last-child {
                                margin: 0;
                            }
                        }
                        .BuildingStyleInput {
                            list-style: none;
                            display: flex;
                            justify-content: space-between;
                            margin-right: 0.5vw;
                            margin-left: 0.5vw;
                            align-items: center;
                            li {
                                img {
                                    color: var(--primary-text-color);
                                    margin-top: 5px;
                                }
                                &:first-child {
                                    margin-left: 0;
                                }
                                &:last-child {
                                    margin: 0;
                                }
                                .BuildingStyle {
                                    text-align: center;
                                    color: var(--primary-text-color);
                                }
                            }
                        }
                        .SelectorList {
                            list-style: none;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            li {
                                text-align: center;
                                width: 100%;
                                &:hover {
                                    transform: translateX(-1px);
                                    text-decoration: underline;
                                    transition: 0.5s;
                                }
                            }
                        }
                    }
                }
                input {
                    border-radius: 10px;
                    border: 1px solid var(--primary-text-color);
                    text-align: center;
                    height: 30px;
                    &::placeholder {
                        color: var(--primary-text-color);
                    }
                }
            }
        }
        .MainServicesUL {
            display: flex;
            list-style: none;
            flex-direction: column;
            margin-top: 50px;
            li {
                width: 55vw;
            }
            .LabelText {
                color: var(--primary-darkblue-color);
                width: 50vw;
            }
            section {
                display: flex;
                flex-wrap: wrap;
                .Services {
                    margin-top: 20px;
                    display: flex;
                    color: var(--primary-text-color);
                    &:not(:first-child) {
                    }
                    input {
                        margin-right: 1vw;
                    }
                    p {
                        margin-right: 1vw;
                    }
                }
            }
        }
        .MainListCommentUl {
            display: flex;
            list-style: none;
            flex-direction: column;
            margin-top: 50px;
            width: 100%;
            li {
                &:first-child {
                    margin-left: 2.6vw;
                }
            }
            label {
                display: flex;
                justify-content: space-between;
                align-items: center;
                list-style: none;
                width: 100%;
                font-size: 18px;
                .LabelText {
                    color: var(--primary-darkblue-color);
                }
                .CommentsStyle {
                    border-radius: 10px;
                    border: 1px solid var(--primary-text-color);
                    text-align: center;
                    height: 30px;
                    &::placeholder {
                        color: var(--primary-text-color);
                    }
                }
                .InputStyle {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            }
        }
        .ButtonStyle {
            display: flex;
            width: 100%;
            justify-content: center;
            button {
                margin-bottom: 50px;
                background-color: #accae7;
                border: solid #accae7 1px;
                border-radius: 20px;
                height: 50px;
                width: 200px;
                color: white;
                font-weight: 600;
                cursor: pointer;
                &:hover {
                    transform: scale(1.05);
                    transition: 0.7s;
                }
                &:active {
                    transform: scale(0.95);
                    background-color: #8eb4d8;
                    box-shadow: 5px 5px 5px #8eb4d8;
                    transition: 0.05s;
                    border: solid #8eb4d8 2px;
                }
                &:disabled {
                    display: none;
                }
            }
        }
    }
    @media screen and (min-width: 320px) and (max-width: 459px) {
        form {
            width: 80%;
            .CalcStyle {
                width: 60vw;
                margin-left: 8vw;
                margin-right: 2.6vw;
                font-size: 17px;
            }
            .MainListUl {
                margin-left: 6vw;
                .TextHelp {
                    display: none;
                }
                label {
                    width: 60vw;
                    .TextErrorClean {
                        margin-top: 55px;
                        font-size: 8px;
                    }
                    .TextError {
                        font-size: 8px;
                        margin-top: 45px;
                        width: 25vw;
                    }
                    .LabelText {
                        font-size: 12px;
                        width: 25vw;
                    }
                    .LabelTextClean {
                        font-size: 12px;
                    }
                    .InputStyle {
                        width: 26vw;
                        input {
                            font-size: 10px;
                            width: 26vw;
                            margin-right: 0.8vw;
                            &::placeholder {
                                font-size: 8px;
                            }
                        }
                        .TextError {
                            width: 35vw;
                            font-size: 8px;
                        }
                    }
                    .BlockSelector {
                        .BuildingStyleInputAll {
                            width: 26vw;
                            margin-left: -26.5vw;
                            .BuildingStyle {
                                font-size: 10px;
                            }
                            .SelectorList {
                                font-size: 10px;
                            }
                        }
                    }
                }
            }
            .MainServicesUL {
                margin-left: 9vw;
                .LabelText {
                    font-size: 12px;
                }
                section {
                    font-size: 10px;
                    width: 110%;
                }
            }
            .MainListCommentUl {
                margin-top: 2vh;
                margin-left: 6vw;
                .LabelText {
                    font-size: 12px;
                }
                label {
                    .CommentsStyle {
                        width: 26.5vw;
                        margin-right: 17vw;
                        &::placeholder {
                            font-size: 10px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 460px) and (max-width: 559px) {
        form {
            width: 80%;
            .CalcStyle {
                width: 60vw;
                margin-left: 8vw;
                margin-right: 2.6vw;
                font-size: 20px;
            }
            .MainListUl {
                margin-left: 6vw;
                .TextHelp {
                    display: none;
                }
                label {
                    width: 60vw;
                    .TextErrorClean {
                        margin-top: 70px;
                        font-size: 7px;
                    }
                    .TextError {
                        font-size: 7px;
                        margin-top: 45px;
                        width: 25vw;
                    }
                    .LabelText {
                        font-size: 16px;
                        width: 25vw;
                    }
                    .LabelTextClean {
                        font-size: 16px;
                    }
                    .InputStyle {
                        width: 26vw;
                        input {
                            width: 26vw;
                            margin-right: 0.8vw;
                            font-size: 9px;
                            &::placeholder {
                                font-size: 9px;
                            }
                        }
                        .TextError {
                            width: 35vw;
                            font-size: 7px;
                        }
                    }
                    .BlockSelector {
                        .BuildingStyleInputAll {
                            width: 26vw;
                            margin-left: -26.5vw;
                            .BuildingStyle {
                                font-size: 10px;
                            }
                            .SelectorList {
                                font-size: 10px;
                            }
                        }
                    }
                }
            }
            .MainServicesUL {
                margin-left: 9vw;
                .LabelText {
                    font-size: 16px;
                }
                section {
                    font-size: 12px;
                    width: 110%;
                }
            }
            .MainListCommentUl {
                margin-top: 2vh;
                margin-left: 6vw;
                .LabelText {
                    font-size: 16px;
                }
                label {
                    .CommentsStyle {
                        width: 26.5vw;
                        margin-right: 17vw;
                        &::placeholder {
                            font-size: 10px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 560px) and (max-width: 699px) {
        form {
            width: 80%;
            .CalcStyle {
                width: 70vw;
                margin-left: 6vw;
                margin-right: 2.6vw;
                font-size: 20px;
            }
            .MainListUl {
                margin-left: 3vw;
                .TextHelp {
                    font-size: 12px;
                }
                label {
                    width: 44.6vw;
                    .TextErrorClean {
                        margin-top: 60px;
                        font-size: 8px;
                        width: 17vw;
                    }
                    .TextError {
                        font-size: 8px;
                        margin-top: 30px;
                        width: 17vw;
                    }
                    .LabelText {
                        font-size: 12px;
                        width: 18vw;
                    }
                    .LabelTextClean {
                        font-size: 12px;
                    }
                    .InputStyle {
                        width: 23vw;
                        input {
                            width: 23vw;
                            margin-right: 0.8vw;
                            font-size: 9px;
                            &::placeholder {
                                font-size: 12px;
                            }
                        }
                        .TextError {
                            width: 20vw;
                            font-size: 8px;
                        }
                    }
                    .BlockSelector {
                        .BuildingStyleInputAll {
                            width: 23vw;
                            margin-left: -23.5vw;
                            .BuildingStyle {
                                font-size: 10px;
                            }
                            .SelectorList {
                                font-size: 10px;
                            }
                        }
                    }
                }
            }
            .MainServicesUL {
                margin-left: 5vw;
                .LabelText {
                    font-size: 12px;
                }
                section {
                    font-size: 12px;
                    width: 110%;
                }
            }
            .MainListCommentUl {
                margin-left: 3vw;
                .LabelText {
                    font-size: 12px;
                }
                label {
                    .CommentsStyle {
                        width: 49vw;
                        margin-right: 7vw;
                        &::placeholder {
                            font-size: 11px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 700px) and (max-width: 999px) {
        form {
            width: 80%;
            .CalcStyle {
                width: 71vw;
                margin-left: 6vw;
                margin-right: 2.6vw;
                font-size: 25px;
            }
            .MainListUl {
                margin-left: 3vw;
                margin-right: 3vw;
                .TextHelp {
                    font-size: 14px;
                }
                label {
                    width: 44.6vw;
                    .TextErrorClean {
                        margin-top: 70px;
                        font-size: 10px;
                    }
                    .TextError {
                        font-size: 10px;
                        margin-top: 40px;
                    }
                    .LabelText {
                        font-size: 16px;
                    }
                    .LabelTextClean {
                        font-size: 16px;
                    }
                    .InputStyle {
                        width: 15vw;
                        input {
                            width: 20vw;
                            margin-right: 5vw;
                            font-size: 10px;
                            &::placeholder {
                                font-size: 12px;
                            }
                        }
                        .TextError {
                            width: 15vw;
                            margin-right: 5vw;
                            font-size: 10px;
                            margin-top: 35px;
                        }
                    }
                    .BlockSelector {
                        .BuildingStyleInputAll {
                            width: 20vw;
                            margin-left: -20.1vw;
                            .BuildingStyle {
                                font-size: 12px;
                            }
                            .SelectorList {
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
            .MainServicesUL {
                margin-left: 6vw;
                .LabelText {
                    font-size: 16px;
                }
                section {
                    width: 110%;
                    font-size: 15px;
                }
            }
            .MainListCommentUl {
                margin-left: 3vw;
                .LabelText {
                    font-size: 16px;
                }
                label {
                    .CommentsStyle {
                        width: 48vw;
                        margin-right: 5vw;
                        &::placeholder {
                            font-size: 11px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1000px) and (max-width: 1199px) {
        form {
            width: 80%;
            .CalcStyle {
                width: 72.5vw;
                margin-left: 3.5vw;
                margin-right: 2.6vw;
                font-size: 25px;
            }
            .MainListUl {
                margin-left: 1vw;
                .TextHelp {
                    font-size: 14px;
                }
                label {
                    width: 44.6vw;
                    .TextErrorClean {
                        margin-top: 75px;
                        font-size: 11px;
                    }
                    .TextError {
                        width: 12vw;
                        font-size: 11px;
                        margin-top: 50px;
                    }
                    .InputStyle {
                        width: 20vw;
                        input {
                            width: 20vw;
                        }
                        .TextError {
                            font-size: 11px;
                        }
                    }
                    .BlockSelector {
                        .BuildingStyleInputAll {
                            width: 20vw;
                            margin-left: -20.1vw;
                            .BuildingStyle {
                                font-size: 13px;
                            }
                            .SelectorList {
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
            .MainServicesUL {
                margin-left: 3.5vw;
                .LabelText {
                    font-size: 18px;
                }
                section {
                    width: 110%;
                }
            }
            .MainListCommentUl {
                margin-left: 1vw;

                .LabelText {
                    font-size: 18px;
                }
                label {
                    .CommentsStyle {
                        width: 47.7vw;
                        margin-right: 5vw;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1200px) and (max-width: 1449px) {
        .CalcStyle {
            width: 42.5vw;
            margin-left: 3.5vw;
            margin-right: 2.6vw;
            font-size: 30px;
        }
        .MainListUl {
            margin-left: 1vw;
            li {
                &:last-child {
                    font-size: 13px;
                }
            }
            label {
                width: 30vw;
                .TextErrorClean {
                    margin-top: 75px;
                    font-size: 12px;
                }
                .TextError {
                    font-size: 12px;
                    margin-top: 40px;
                }
                .InputStyle {
                    width: 15vw;
                    input {
                        width: 15vw;
                        font-size: 12px;
                    }
                }
                .BlockSelector {
                    .BuildingStyleInputAll {
                        width: 15vw;
                        margin-left: -15.1vw;
                        .BuildingStyle {
                            font-size: 15px;
                        }
                        .SelectorList {
                            font-size: 14px;
                        }
                    }
                }
            }
        }
        .MainServicesUL {
            margin-left: 3.5vw;
            .LabelText {
                font-size: 18px;
            }
            section {
                width: 40vw;
            }
        }
        .MainListCommentUl {
            margin-left: 1vw;
            .LabelText {
                font-size: 18px;
            }
            label {
                .CommentsStyle {
                    width: 27.4vw;
                    margin-right: 5vw;
                }
            }
        }
    }
    @media screen and (min-width: 1450px) and (max-width: 1749px) {
        form {
            .CalcStyle {
                width: 42.5vw;
                margin-left: 3.6vw;
                margin-right: 2.6vw;
                font-size: 30px;
            }
            .MainListUl {
                margin-left: 1vw;
                label {
                    width: 25vw;
                    .TextErrorClean {
                        margin-top: 75px;
                        font-size: 12px;
                    }
                    .TextError {
                        font-size: 12px;
                        margin-top: 40px;
                    }
                    .BlockSelector {
                        .BuildingStyleInputAll {
                            width: 12vw;
                            margin-left: -12vw;
                            .BuildingStyle {
                                font-size: 15px;
                            }
                            .SelectorList {
                                font-size: 15px;
                            }
                        }
                    }
                    .InputStyle {
                        width: 12vw;
                        input {
                            width: 100%;
                            font-size: 12px;
                        }
                        .TextError {
                            width: 10vw;
                        }
                    }
                }
            }
            .MainServicesUL {
                margin-left: 3.5vw;
                .LabelText {
                    font-size: 18px;
                }
                section {
                    width: 40vw;
                }
            }
            .MainListCommentUl {
                margin-left: 1vw;

                .LabelText {
                    font-size: 18px;
                }
                label {
                    .CommentsStyle {
                        width: 29.3vw;
                        margin-right: 5vw;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1750px) and (max-width: 2099px) {
        .CalcStyle {
            width: 42.5vw;
            margin-left: 2.6vw;
            margin-right: 2.6vw;
            font-size: 30px;
        }
        .MainListUl {
            label {
                width: 20vw;
                .TextErrorClean {
                    margin-top: 75px;
                    font-size: 12px;
                }
                .TextError {
                    font-size: 12px;
                    margin-top: 40px;
                }
                .BlockSelector {
                    .BuildingStyleInputAll {
                        width: 10vw;
                        margin-left: -10.1vw;
                        .BuildingStyle {
                            font-size: 15px;
                        }
                        .SelectorList {
                            font-size: 15px;
                        }
                    }
                }
                .InputStyle {
                    width: 10vw;
                    input {
                        width: 100%;
                        font-size: 12px;
                    }
                    .TextError {
                        width: 10vw;
                    }
                }
            }
        }
        .MainServicesUL {
            margin-left: 2.6vw;
            .LabelText {
                font-size: 18px;
            }
            section {
                width: 40vw;
            }
        }
        .MainListCommentUl {
            .LabelText {
                font-size: 18px;
            }
            label {
                .CommentsStyle {
                    width: 32.5vw;
                    margin-right: 5vw;
                }
            }
        }
    }
    @media screen and (min-width: 2100px) {
        .CalcStyle {
            width: 42.5vw;
            margin-left: 2.6vw;
            margin-right: 2.6vw;
            font-size: 30px;
        }
        .MainListUl {
            label {
                width: 18vw;
                .TextErrorClean {
                    margin-top: 75px;
                    font-size: 12px;
                }
                .TextError {
                    margin-top: 40px;
                }
                .BlockSelector {
                    .BuildingStyleInputAll {
                        width: 10vw;
                        margin-left: -10.1vw;
                        .BuildingStyle {
                            font-size: 15px;
                        }
                        .SelectorList {
                            font-size: 15px;
                        }
                    }
                }
                .InputStyle {
                    width: 10vw;
                    input {
                        width: 100%;
                    }
                    .TextError {
                        width: 10vw;
                    }
                }
            }
        }
        .MainServicesUL {
            margin-left: 2.6vw;
            .LabelText {
                font-size: 18px;
            }
            section {
                width: 40vw;
            }
        }
        .MainListCommentUl {
            .LabelText {
                font-size: 18px;
            }
            label {
                .CommentsStyle {
                    width: 34.5vw;
                    margin-right: 5vw;
                }
            }
        }
    }
`;
