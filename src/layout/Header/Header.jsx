import React from "react";

import NavMenuList from "./NavMenuList/NavMenuList";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={`${css.nav} container`}>
        <a href="index.html" className={css.navLogo}>
          Hubskiy
        </a>
        <div className={css.navMenu}>
          <NavMenuList />
          <div className={css.navClose}>
            <i className="uil uil-times"></i>
          </div>
        </div>
        <div className={css.navToggle}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
