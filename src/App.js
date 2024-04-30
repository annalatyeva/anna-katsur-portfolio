import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

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
	let pathname = window.location.pathname;
	const pathList = ["/", "/portfolio", "/about", "/contact", "/project01", "/project02", "/project03", "/project04", "/project05", "/project06", "/project07"];
	const pathList2 = pathList.slice(1);
	return (
		<Router>
			<div className="App">
				{pathList.includes(pathname) ? <Header></Header> : <></>}
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
				{pathList2.includes(pathname) ? <Footer></Footer> : <></>}
			</div>
		</Router>
	);
}

export default App;
