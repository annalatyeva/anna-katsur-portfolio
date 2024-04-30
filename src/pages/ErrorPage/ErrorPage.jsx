import {Link} from "react-router-dom";

import errorStyle from "./ErrorPage.module.scss";

const ErrorPage = () => {
	return (
		<div className={errorStyle.container}>
			<div>
				<div className={errorStyle.big}>404</div>
				<div className={errorStyle.big}>PAGE NOT FOUND</div>
			</div>
			<div className={errorStyle.smallContainer}>
				<div className={errorStyle.small}>We’re sorry. The page you requested could no be found.</div>
				<div className={errorStyle.small}>Please go back to the home page</div>
			</div>
			<Link to="/portfolio" reloadDocument className={errorStyle.link}>
				Go Home
			</Link>
		</div>
	);
};
export default ErrorPage;
