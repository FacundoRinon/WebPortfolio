import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyInfo from "./pages/MyInfo";
import Home from "./pages/Home";
import MySkills from "./pages/MySkills";
import MyProjects from "./pages/MyProjects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<MyInfo />} />
        <Route path="/skills" element={<MySkills />} />
        <Route path="/projects" element={<MyProjects />} />
      </Routes>
    </>
  );
}

export default App;
