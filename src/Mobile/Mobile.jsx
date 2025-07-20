import "./Mobie.css";

import { useState } from "react";

import img from "../assets/images/error.gif";

import { motion } from "framer-motion";

const Mobile = () => {
  const [showAbout, setShowAbout] = useState(false);

  const handleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div className="m-hero-section" id="hero">
      {/* hero section */}
      <motion.div
        className="m-hero-wrapper"
        animate={{
          x: showAbout ? "-100%" : "0",
        }}
        transition={{
          delay: 0.1,
          duration: 1.5,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div className="m-first-name">nilanshu</div>
        <div className="m-hero-img">
          <img src={img} alt="" />
        </div>
        <div className="m-last-name">garhewal</div>
        <motion.div className="m-show-bio" onClick={handleAbout}>
          show about
        </motion.div>
      </motion.div>

      {/* bio */}
      <motion.div
        className="m-about-wrapper"
        initial={{
          opacity: 0,
        }}
        animate={{
          x: showAbout ? "0" : "100%",
          opacity: showAbout ? 1 : 0,
        }}
        transition={{
          delay: 0.1,
          duration: 1.5,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div className="m-about">
          <h1>NILANSHU BUILDS WEB EXPERIENCES THAT FEELS ALIVE.</h1>

          <p>
            With a sharp eye for design and a passion for smooth user
            interactions, Nilanshu is a full-stack developer who crafts digital
            products that are clean, responsive, and a joy to use. He believes
            great code should not only work — it should flow. <br />
            <br />
            From React and Next.js to Flask and API design, he’s learned by
            doing — building real projects from the ground up. His standout
            project, VOX, is a full-stack music streaming app designed with
            dynamic playlists, polished UI, and seamless animations using tools
            like Framer Motion and GSAP. <br />
            <br />
            Beyond code, Nilanshu is also a music producer — a creative skill
            that sharpens his sense of rhythm, detail, and storytelling. This
            crossover gives his work a unique energy — where logic meets vibe.{" "}
            <br />
            <br />
            Currently, he's diving deeper into advanced frontend animation,
            backend architecture, and system design, with a goal to become a
            top-tier creative developer. Whether he’s writing JavaScript or
            composing beats, the mission stays the same: "build things people
            feel".
          </p>
          <div className="m-close-bio" onClick={handleAbout}>
            close about
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Mobile;
