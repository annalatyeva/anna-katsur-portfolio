import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import "./App.scss";
import Project2 from "./components/ProjectItem/Project2";

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
            <Route path="/contact" element={<div>Контакты</div>} />
            <Route path="/projecttest" element={<ProjectPage />} />
            <Route path="/project02" element={<Project2 />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;
