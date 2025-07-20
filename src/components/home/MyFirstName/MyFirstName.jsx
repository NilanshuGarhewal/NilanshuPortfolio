import "./MyFirstName.css";

import { motion } from "motion/react";

const MyFirstName = ({ showBio, handleShowBio }) => {
  return (
    <div className="hero-first-name">
      <motion.div
        className="hero-nilanshu"
        animate={{
          scale: showBio == true ? 0.3 : 1,
          x: showBio == true ? -300 : 0,
          y: showBio == true ? 0 : 40,
          transition: {
            delay: 0.1,
            duration: 1.5,
            ease: [0.76, 0, 0.24, 1],
          },
        }}
      >
        nilanshu
      </motion.div>

      <motion.div
        className="hero-bio"
        onClick={handleShowBio}
        animate={{
          x: showBio == true ? -20 : 0,
          y: showBio == true ? 80 : 0,
          transition: {
            delay: 0.1,
            duration: 1.5,
            ease: [0.76, 0, 0.24, 1],
          },
        }}
      >
        {showBio ? <p>close about</p> : <p>read about</p>}
      </motion.div>
    </div>
  );
};

export default MyFirstName;
