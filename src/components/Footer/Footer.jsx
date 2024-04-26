import "./Footer.module.scss";

const Footer = () => {
    const setActiveLink = ({ isActive }) => (isActive ? " active" : "");
  return (
    <nav>
          <ul>
            <div className={footerStyle.link}>
              <li>
                <NavLink to="/" className={setActiveLink}>
                  LINKEDIN
                </NavLink>
              </li>
              <li>
                <NavLink to="/" setActiveLink className={setActiveLink}>
                  TELEGRAM
                </NavLink>
              </li>
              <li>
                <NavLink to="/" setActiveLink className={setActiveLink}>
                  FACEBOOK
                </NavLink>
              </li>
            </div>
          </ul>
        </nav>
  );
};

export default Footer;
