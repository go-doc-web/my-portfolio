import React from "react";
import { TypeAnimation } from "react-type-animation";
import IconHand from "./IconHand";
import IconSend from "./IconSend";

import { heroData } from "../../../config/hero";
import css from "./Data.module.css";

const Data = () => {
  return (
    <>
      <div className={css.titleWrapper}>
        <h1 className={css.heroTiltle}>{heroData.title}</h1>
        <IconHand className={css.iconHeroTitle} />
      </div>
      <h3 className={css.heroSubTitle}>{heroData.subTitle}</h3>
      {/* // TODO For Prfoduction */}
      {/* <h3 className={css.heroSubTitle}>
        <TypeAnimation
          sequence={[
            "Hello, World!",
            1000, // Показать текст и задержка в миллисекундах
            `${heroData.subTitle}`,
            1000,
            "I love coding!",
            1000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
        />
      </h3> */}
      <p className={css.heroDescription}>{heroData.heroDescription}</p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <IconSend className={`${css.iconSend} button__icon`} />
      </a>
    </>
  );
};

export default Data;
