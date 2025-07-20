import "./MyLastName.css";

import UpArrow from "../../../assets/images/up_arrow.png";

import { motion } from "motion/react";
import { Link } from "react-router-dom";

const MyLastName = ({ showBio, isMobile }) => {
  return (
    <div className="hero-last-name">
      {/* <Link to="/projects" className="link"> */}
      <a
        href="#"
        className="link"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("project");
          if (el && window.lenis) {
            window.lenis.scrollTo(el, {
              offset: 0,
              duration: 2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
        }}
      >
        <motion.div
          className="hero-button"
          whileHover="hover"
          animate={{
            x: showBio == true ? -250 : 0,
            transition: {
              delay: 0.1,
              duration: 1.5,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          <motion.div
            className="hero-btn-circle"
            variants={{
              hover: {
                scale: 7,
                transition: {
                  delay: 0.05,
                  duration: 0.3,
                  ease: "circInOut",
                },
              },
            }}
          >
            <motion.img
              variants={{
                hover: {
                  scale: 0.3,
                  transition: {
                    delay: 0.02,
                    duration: 0.3,
                    ease: "circInOut",
                  },
                },
              }}
              src={UpArrow}
              alt=""
            />
          </motion.div>

          <div className="hero-btn-title">projects</div>
        </motion.div>
      </a>
      {/* </Link> */}

      <motion.div
        className="hero-garhewal"
        animate={{
          scale: showBio == true ? 0.4 : 1,
          x: showBio == true ? -625 : 0,
          y: showBio == true ? -70 : 130,
          transition: {
            delay: 0.1,
            duration: 1.5,
            ease: [0.76, 0, 0.24, 1],
          },
        }}
      >
        garhewal
      </motion.div>
    </div>
  );
};

export default MyLastName;
