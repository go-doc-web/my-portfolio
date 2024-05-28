import { useState } from "react";

import NavMenuList from "./NavMenuList/NavMenuList";
import css from "./Header.module.css";

const Header = () => {
  const [showMenu, isShowMenu] = useState(false);
  const handleClickShowMenu = () => {
    isShowMenu(true);
  };
  const handleClickCloseMenu = () => {
    isShowMenu(false);
  };

  const classNames = showMenu
    ? `${css.navMenu} ${css.showMenu}`
    : `${css.navMenu}`;
  return (
    <header className={css.header}>
      <nav className={`${css.nav} container`}>
        <a href="/" className={css.navLogo}>
          Oleg Hubskiy
        </a>
        <div className={classNames}>
          <NavMenuList />
          <div onClick={handleClickCloseMenu} className={css.navClose}>
            <i className="uil uil-times"></i>
          </div>
        </div>
        <div onClick={handleClickShowMenu} className={css.navToggle}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
