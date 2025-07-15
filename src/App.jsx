import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import AboutPage from "./components/About/AboutPage";
import PropertyPage from "./components/Property/PropertyPage";
import NavContactPage from "./components/NavContact/NavContactPage";

// ✅ Inline ScrollToTop function inside App file
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/properties" element={<PropertyPage />} />
        <Route path="/contact" element={<NavContactPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
