import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Antswer from "./pages/Antswer";
import CineLog from "./pages/CineLog";
import Sisigak from "./pages/Sisigak";
import Sosangomin from "./pages/Sosangomin";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/antswer" element={<Antswer />} />
        <Route path="/project/cinelog" element={<CineLog />} />
        <Route path="/project/sisigak" element={<Sisigak />} />
        <Route path="/project/sosangomin" element={<Sosangomin />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
