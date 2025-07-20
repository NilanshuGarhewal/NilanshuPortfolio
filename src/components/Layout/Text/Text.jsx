import "./Text.css";

import { color, hover, motion, scale } from "motion/react";

const Text = ({ text, height = 120, size = 10, coin = 0 }) => {
  const TextStyle = {
    height: `${height}px`,
    fontSize: `${size}rem`,
    lineHeight: `${size}rem`,
  };
  
  return (
    <motion.div
      className="text"
      style={TextStyle}
      whileHover="hover"
      initial="initial"
      transition="transition"
    >
      <motion.div
        className="first-text para"
        style={coin == 1 || { color: "var(--bg-secondary)" }}
        variants={{
          hover: {
            scaleY: 0.1,
            y: -17,
          },
        }}
        transition={{
          delay: 0.05,
          duration: 0.3,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {text}
      </motion.div>
      <motion.div
        className="last-text para"
        style={coin == 1 || { color: "var(--fg-primary)" }}
        variants={{
          initial: {
            scaleY: 0.1,
            y: 0,
          },
          hover: {
            scaleY: 1,
            y: 0,
          },
        }}
        transition={{
          delay: 0.05,
          duration: 0.3,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
};

export default Text;
