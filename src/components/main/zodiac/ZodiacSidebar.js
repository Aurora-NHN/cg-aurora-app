import React from "react";
import {ZODIACS} from "~/app/constants";
import {Link} from "react-router-dom";

const ZodiacSideBar = ({currentZodiac = ZODIACS[0].name}) => {
    const toTop = () => {
        window.scrollTo({behavior: "smooth", top: 200, left: 0});
    };
    return (
        <div className="col-lg-4 ">
            <ul className="list-menu">

                {
                    ZODIACS.map((zodiac, index) => (
                        <li key={index} className={zodiac.name === currentZodiac ? "current-menu-item" : ""}>
                            <Link to={`/zodiac/${zodiac.name}`} onClick={toTop}>
                                <div className="media vertical_box">
                                    <div className="icon-styled color-darkgrey fs-40 ">
                                        <i className={`color-darkgrey ico ico-icon_${zodiac.name}`}/>
                                    </div>
                                    <div className="media-body">
                                        <h6 className="mb-0 fs-20 color-main2"
                                            style={{textTransform: "capitalize"}}
                                        >
                                            {zodiac.name}
                                        </h6>
                                        <p>{zodiac.date}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </div>

    );
};

export default ZodiacSideBar;
