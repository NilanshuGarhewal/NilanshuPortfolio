import "./MyBio.css";

import { motion } from "motion/react";

const MyBio = ({ showBio }) => {
  return (
    <motion.div
      className="bio"
      animate={{
        x: 100,
        y: showBio == true ? -40 : 0,
        opacity: showBio == true ? 1 : 0,
        transition: {
          delay: showBio == true ? 0.8 : 0.6,
          duration: 1,
          ease: [0.215, 0.61, 0.355, 1],
        },
      }}
    >
      <h1>NILANSHU BUILDS WEB EXPERIENCES THAT FEELS ALIVE.</h1>

      <p>
        With a sharp eye for design and a passion for smooth user interactions,
        Nilanshu is a full-stack developer who crafts digital products that are
        clean, responsive, and a joy to use. He believes great code should not
        only work — it should flow. <br />
        <br />
        From React and Next.js to Flask and API design, he’s learned by doing —
        building real projects from the ground up. His standout project, VOX, is
        a full-stack music streaming app designed with dynamic playlists,
        polished UI, and seamless animations using tools like Framer Motion and
        GSAP. <br />
        <br />
        Beyond code, Nilanshu is also a music producer — a creative skill that
        sharpens his sense of rhythm, detail, and storytelling. This crossover
        gives his work a unique energy — where logic meets vibe. <br />
        <br />
        Currently, he's diving deeper into advanced frontend animation, backend
        architecture, and system design, with a goal to become a top-tier
        creative developer. Whether he’s writing JavaScript or composing beats,
        the mission stays the same: "build things people feel".
      </p>
    </motion.div>
  );
};

export default MyBio;
