import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Contacts from "./pages/Сontacts/Contacts";

import Project from "./components/ProjectItem/Project";
import Project2 from "./components/ProjectItem/Project2";
import Project3 from "./components/ProjectItem/Project3";
import Project4 from "./components/ProjectItem/Project4";
import Project5 from "./components/ProjectItem/Project5";
import Project6 from "./components/ProjectItem/Project6";
import Project7 from "./components/ProjectItem/Project7";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <main>
          <Routes>
            <Route path="/" element={<div>Главная</div>} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<div>Обо мне</div>} />
            <Route path="/contact" element={<div><Contacts /></div>} />
            <Route path="/projecttest" element={<ProjectPage />} />
            <Route path="/project01" element={<Project />} />
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
