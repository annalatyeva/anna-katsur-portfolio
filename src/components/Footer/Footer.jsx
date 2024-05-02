import React from "react";
import footerStyle from "../Footer/Footer.module.scss";

const Footer = () => {
	return (
		<footer className={footerStyle.wrapper}>
			<nav className={footerStyle.links} role="navigation">
				<ul className={footerStyle.links_list}>
					<li>
						<a href="https://www.linkedin.com/in/anna-katsur-a2084480" className={footerStyle.linkedin}>
							LINKEDIN
						</a>
					</li>
					<li className={footerStyle.rightLinks}>
						<a href="https://t.me/Kacur" className={footerStyle.telegram}>
							TELEGRAM
						</a>
					</li>
					<li className={footerStyle.rightLinks}>
						<a href="https://www.facebook.com/aava.katsur" className={footerStyle.facebook}>
							FACEBOOK
						</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
