import React from "react";

import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown/ScrollDown";
import css from "./SectionHero.module.css";
const SectionHero = () => {
  return (
    <section className={css.hero} id="hero">
      <div className={`container grid ${css.heroContainer}`}>
        <div className={`grid ${css.heroContent}`}>
          <Social />
          <div className={css.heroImg}></div>
          <div className={css.dataWrapper}>
            <Data />
          </div>
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default SectionHero;
