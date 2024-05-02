import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";

import "./App.scss";

import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Portfolio from "./pages/Portfolio/Portfolio";
import AboutMe from "./components/AboutMe/AboutMe";
import Contacts from "./pages/Сontacts/Contacts";
import Project1 from "./pages/ProjectPages/Project1";
import Project2 from "./pages/ProjectPages/Project2";
import Project3 from "./pages/ProjectPages/Project3";
import Project4 from "./pages/ProjectPages/Project4";
import Project5 from "./pages/ProjectPages/Project5";
import Project6 from "./pages/ProjectPages/Project6";
import Project7 from "./pages/ProjectPages/Project7";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
	const pathList = ["/", "/portfolio", "/about", "/contact", "/project01", "/project02", "/project03", "/project04", "/project05", "/project06", "/project07"];
	return (
		<Router>
			<InnerApp pathList={pathList} />
		</Router>
	);
}

function InnerApp({pathList}) {
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<div className="App">
			<div className="app-container">
				{pathList.includes(pathname) ? <Header /> : null}
				<main>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/about" element={<AboutMe />} />
						<Route path="/contact" element={<Contacts />} />
						<Route path="/project01" element={<Project1 />} />
						<Route path="/project02" element={<Project2 />} />
						<Route path="/project03" element={<Project3 />} />
						<Route path="/project04" element={<Project4 />} />
						<Route path="/project05" element={<Project5 />} />
						<Route path="/project06" element={<Project6 />} />
						<Route path="/project07" element={<Project7 />} />
						<Route path="/*" element={<ErrorPage />} />
					</Routes>
				</main>
			</div>
			{pathList.slice(1).includes(pathname) ? <Footer /> : null}
		</div>
	);
}

export default App;
