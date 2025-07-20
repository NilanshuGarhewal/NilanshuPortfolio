import "./App.css";

import Home from "./pages/home/home";
import Project from "./pages/Projects/Projects";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import useLenis from "./Logic/Lenis";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader";

function App() {
  useLenis();

  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Project />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
