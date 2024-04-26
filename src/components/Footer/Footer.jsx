import footerStyle from '../Footer/Footer.module.scss';

const Footer = () => {
  return (
    <nav>
          <ul>
            <div className={footerStyle.link}>
              <li>
                <button>
                  LINKEDIN
                </button>
              </li>
              <li>
                <button>
                  TELEGRAM
                </button>
              </li>
              <li>
                <button>
                  FACEBOOK
                </button>
              </li>
            </div>
          </ul>
        </nav>
  );
};

export default Footer;
