import "./CircleLink.css";

import { motion } from "framer-motion";

const CircleLink = ({ link, image, a = "no" }) => {
  return (
    <motion.div
      className="footer-social-links"
      initial="initial"
      whileHover="hover"
      exit="exit"
    >
      {a == "no" ? (
        <motion.a
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hover: {
              scale: 0.8,
            },
          }}
          transition={{
            delay: 0.1,
            duration: 0.3,
            ease: [0.76, 0, 0.24, 1],
          }}
          href={link}
        >
          <img src={image} alt="" />
        </motion.a>
      ) : (
        <img className="single" src={image} alt="" />
      )}

      <motion.div
        className="footer-red-circle"
        variants={{
          initial: {
            top: "100%",
          },
          hover: {
            top: 0,
          },
          exit: {
            bottom: "-100%",
          },
        }}
        transition={{
          delay: 0.1,
          duration: 0.3,
          ease: [0.76, 0, 0.24, 1],
        }}
      ></motion.div>
    </motion.div>
  );
};

export default CircleLink;
