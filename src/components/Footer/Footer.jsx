import footerStyle from '../Footer/Footer.module.scss';

const Footer = () => {
  return (
    <nav>
          <ul>
            <div className={footerStyle.link}>
              <li>
                <a>
                  LINKEDIN
                </a>
              </li>
              <li>
                <a>
                  TELEGRAM
                </a>
              </li>
              <li>
                <a>
                  FACEBOOK
                </a>
              </li>
            </div>
          </ul>
        </nav>
  );
};

export default Footer;
