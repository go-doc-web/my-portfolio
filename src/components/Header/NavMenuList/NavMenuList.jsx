import { elementsNavMenu } from "../../../db/nav-menu-db";
import { iconsNavMenu } from "../../../config/nav-menu-db.jsx";
const itemsMenu = elementsNavMenu.filter((element) => element.isVisible);

import css from "../Header.module.css";

const NavMenuList = () => {
  return (
    <ul className={`${css.navList} grid`}>
      {itemsMenu.map((element) => (
        <li key={element.id} className={css.navItem}>
          <a href={element.path} className={css.navLink}>
            {iconsNavMenu[element.icon](css.navIcon)}
            {element.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavMenuList;
