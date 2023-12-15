import { FooterStyled } from "./components/FooterStyled";
import { ImagesFooter } from "./components/images";
import PropTypes from "prop-types";

export const Footer = ({ langValue, selectedLang }) => {
    const userLanguage =
        JSON.parse(localStorage.getItem("Language")) || selectedLang;

    const Value = langValue.FooterText[userLanguage];
    const ValueContacts = langValue.HeaderAll[userLanguage];

    return (
        <FooterStyled>
            <ul className="FooterMainList">
                <li>
                    <h5 id="section4">
                        {Value.map(({ FooterElement }) => FooterElement)}
                    </h5>
                </li>
                <li>
                    <ul className="FooterContacts">
                        <li>
                            {ValueContacts.map(({ headerEl4 }) => headerEl4)}
                        </li>
                        <li>
                            <a
                                href="https://www.google.com/maps/place/Chot%C4%9B%C5%A1ovsk%C3%A1+680%2F1,+190+00+Let%C5%88any/@50.1279891,14.5022561,17z/data=!4m6!3m5!1s0x470bec96ae125c9d:0xcf4908f0787ecf02!8m2!3d50.1279891!4d14.5022561!16s%2Fg%2F11csdbq8mm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Chotěšovská 680/1 190 00 Praha - Letňany
                            </a>
                        </li>
                        <li>
                            <ul className="FooterContactsImages">
                                <li>
                                    <a href="mailto:cleanbureau@gmail.com">
                                        <img
                                            src={ImagesFooter.email}
                                            alt="email"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/clean_bureau_prague/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={ImagesFooter.instagram}
                                            alt="instagram"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.facebook.com/cleanbureauprague"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={ImagesFooter.fb}
                                            alt="facebook"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </FooterStyled>
    );
};

Footer.propTypes = {
    langValue: PropTypes.shape({
        FooterText: PropTypes.object.isRequired,
        HeaderAll: PropTypes.object.isRequired,
    }),
    selectedLang: PropTypes.string.isRequired,
};
