import "./HeroSection.css";

import { useState } from "react";

import HeroLower from "../HeroLower/HeroLower";

import { useIsMobile } from "../../../Logic/Mobile";

// main code
export default function HeroSection() {
  const [showBio, setShowBio] = useState(false);

  const isMobile = useIsMobile();

  const handleShowBio = () => {
    setShowBio(!showBio);
  };

  // if (isMobile == true) {
  //   return (
  //     <div className="hero-mobile">
  //       <div className="m-first-name">
  //         nilanshu
  //       </div>
  //       <img src="" alt="" />
  //     </div>
  //   );
  // }

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
        isMobile={isMobile}
      />
    </div>
  );
}
