import { delay, motion, scale } from "framer-motion";

import "./inner.sass";
import Navbar from "../../../pages/Navbar/Navbar";
import Footer from "../../../pages/Footer/Footer";

export default function Index({ children }) {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: {
      opacity: 0,
      y: -100,
      scale: 0.9,
    },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const slide = {
    initial: {
      top: "100vh",
    },
    enter: {
      top: "100vh",
    },
    exit: {
      top: "0",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const slide2 = {
    initial: {
      top: "100vh",
    },
    enter: {
      top: "100vh",
    },
    exit: {
      top: "0",
      transition: {
        duration: 1,
        delay: 0.1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const prespective = {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    enter: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    exit: {
      y: -200,
      scale: 0.9,
      opacity: 0.5,

      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div className="inner">
      <motion.div {...anim(slide)} className="slide"></motion.div>
      <motion.div {...anim(slide2)} className="slide2"></motion.div>
      <motion.div {...anim(prespective)} className="page">
        <motion.div {...anim(opacity)}>
          <div>
            <Navbar></Navbar>
          </div>
          {children}
          <div>
            <Footer />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
