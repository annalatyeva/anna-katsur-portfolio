import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import classNames from "classnames";

import CVpdf from "../../assets/files/CV_Anna_Katsur_Creative_Director.pdf";
import headerStyle from "../Header/Header.module.scss";

const Header = () => {
	// add styles for active link
	const setActiveLink = ({isActive}) => (isActive ? headerStyle.active : "");

	// define scroll direction
	function useScrollDirection() {
		const [scrollDirection, setScrollDirection] = useState(null);

		useEffect(() => {
			let lastScrollY = window.scrollY;

			const updateScrollDirection = () => {
				const scrollY = window.scrollY;
				const direction = scrollY > lastScrollY ? headerStyle.hide : headerStyle.show;
				if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
					setScrollDirection(direction);
				}
				lastScrollY = scrollY > 0 ? scrollY : 0;
			};
			window.addEventListener("scroll", updateScrollDirection);
			return () => {
				window.removeEventListener("scroll", updateScrollDirection);
			};
		}, [scrollDirection]);

		return scrollDirection;
	}

	let headerClass = classNames(headerStyle.header, useScrollDirection());

	return (
		<header className={headerClass}>
			<div className={headerStyle.container}>
				<a className={headerStyle.download} href={CVpdf} download="CV_Anna_Katsur_Creative_Director.pdf">
					Download CV
				</a>
				<nav>
					<ul>
						<li>
							<Link to="/" className={headerStyle.logo}>
								Anna Katsur
							</Link>
						</li>
						<div className={headerStyle.links}>
							<li>
								<NavLink to="/portfolio" className={setActiveLink}>
									Portfolio
								</NavLink>
							</li>
							<li>
								<NavLink to="/about" setActiveLink className={setActiveLink}>
									About me
								</NavLink>
							</li>
							<li>
								<NavLink to="/contact" setActiveLink className={setActiveLink}>
									Contact
								</NavLink>
							</li>
						</div>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
