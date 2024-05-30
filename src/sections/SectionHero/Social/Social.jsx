import React from "react";
import { socialsDB } from "../../../db/socials-db";
import { socialsIcons } from "../../../config/social-icon";
import css from "./Social.module.css";

const Social = () => {
  return (
    <div className="Social">
      <ul className={css.socialList}>
        {socialsDB.map((social) => (
          <li key={social.id} className="socialItem">
            <a
              href={social.path}
              className="SocialIcon"
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialsIcons[social.icon](css.icon)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
