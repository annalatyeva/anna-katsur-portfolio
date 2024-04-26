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

function App() {
	return (
		<Router>
			<div className="App">
				<Header></Header>
				<main>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/about" element={<AboutMe />} />
						<Route path="/contact" element={<Contacts />} />
						<Route path="/projecttest" element={<Project1 />} />
						<Route path="/project01" element={<Project1 />} />
						<Route path="/project02" element={<Project2 />} />
						<Route path="/project03" element={<Project3 />} />
						<Route path="/project04" element={<Project4 />} />
						<Route path="/project05" element={<Project5 />} />
						<Route path="/project06" element={<Project6 />} />
						<Route path="/project07" element={<Project7 />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;
