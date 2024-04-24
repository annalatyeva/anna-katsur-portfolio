import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Contacts from "./pages/Сontacts/Contacts";

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
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;
