import React from "react";
import ZodiacSideBar from "../components/main/zodiac/ZodiacSidebar";
import Aries from "~/components/main/zodiac/Aries";
import {useParams} from "react-router-dom";
import Taurus from "~/components/main/zodiac/Taurus";
import Gemini from "~/components/main/zodiac/Gemini";
import Cancer from "~/components/main/zodiac/Cancer";
import Leo from "~/components/main/zodiac/Leo";
import Virgo from "~/components/main/zodiac/Virgo";
import Libra from "~/components/main/zodiac/Libra";
import Scorpio from "~/components/main/zodiac/Scorpio";
import Sagittarius from "~/components/main/zodiac/Sagittarius";
import Capricorn from "~/components/main/zodiac/Capricorn";
import Aquarius from "~/components/main/zodiac/Aquarius";
import {ZODIACS} from "~/app/constants";
import Pisces from "~/components/main/zodiac/Pisces";

const Zodiac = () => {
    const param = useParams();
    const children = [Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces]
    const filteredZodiac = ZODIACS.filter(zodiac => zodiac.name === param.name)
    const index = ZODIACS.indexOf(filteredZodiac[0])
    const Child = children[index];

    return (
        <section className="ds s-py-90 s-py-xl-80 c-gutter-60 pt-5">
            <div className="container">
                <div className="row">
                    <ZodiacSideBar currentZodiac={param.name}/>
                    <Child/>
                </div>
            </div>
        </section>
    );
};

export default Zodiac;
