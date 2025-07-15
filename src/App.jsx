import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import AboutPage from "./components/About/AboutPage";
import PropertyPage from "./components/Property/PropertyPage";
import NavContactPage from "./components/NavContact/NavContactPage";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/PropertyPage" element={<PropertyPage />} />
        <Route path="/NavContactPage" element={<NavContactPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
