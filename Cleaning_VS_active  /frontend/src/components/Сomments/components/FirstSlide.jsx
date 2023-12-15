export const FirstSlide = ({ quotes, ValueText }) => {
    return (
        <section className="slider">
            <ul>
                <li>
                    <ul className="ImagesHeaderComment">
                        <li>
                            <img src={quotes} alt="" />
                        </li>
                        <li>
                            <svg
                                width="100"
                                height="100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="grey"
                                    fill="grey"
                                />
                            </svg>
                        </li>
                        <li></li>
                    </ul>
                </li>
                <li>
                    <ul className="TextList">
                        <li>{ValueText.map(({ CommentF }) => CommentF)}</li>
                        <li>Anna M.</li>
                    </ul>
                </li>
            </ul>
        </section>
    );
};
