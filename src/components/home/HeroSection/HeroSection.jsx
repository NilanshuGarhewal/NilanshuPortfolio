import "./HeroSection.css";

import { useState } from "react";

import HeroLower from "../HeroLower/HeroLower";

// main code
export default function HeroSection() {
  const [showBio, setShowBio] = useState(false);

  const handleShowBio = () => {
    setShowBio(!showBio);
  };

  // desktop
  return (
    <div
      className="hero-section"
      id="hero"
      style={{ overflow: showBio == true ? "hidden" : "visible" }}
    >
      <div className="hero-upper"></div>

      <HeroLower
        showBio={showBio}
        handleShowBio={handleShowBio}
      />
    </div>
  );
}
