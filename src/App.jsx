import "./App.css";

import Home from "./pages/home/home";
import Project from "./pages/Projects/Projects";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import useLenis from "./Logic/Lenis";
import { useEffect, useState } from "react";

function App() {
  useLenis();

  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <h1>Loading...</h1>{" "}
      </div>
    );
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
