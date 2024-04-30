import React from "react";
import { useLocation } from "react-router-dom";
import footerStyle from '../Footer/Footer.module.scss';

const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav>
          <ul>
            <div className={footerStyle.links}>
              <li>
              <a href="https://www.linkedin.com/in/anna-katsur-a2084480" className={footerStyle.linkedin}>
                  LINKEDIN
                  </a>
              </li>
              <li>
                <a href="https://t.me/Kacur" className={footerStyle.telegram}>
                  TELEGRAM
                  </a>
              </li>
              <li>
                <a href="https://www.facebook.com/aava.katsur" className={footerStyle.facebook}>
                  FACEBOOK
                  </a>
              </li>
            </div>
          </ul>
        </nav>
  );
};

export default Footer;
