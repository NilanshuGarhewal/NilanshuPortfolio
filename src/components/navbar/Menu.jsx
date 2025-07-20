import "./Menu.css";

import Text from "../Layout/Text/Text";

import svgPlus from "../../assets/images/svg-plus.webp";
import MenuIcon from "../../assets/images/menu_icon.png";

import { motion, AnimatePresence, transform } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Menu = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleLinkHover = () => {
    setRotation((prev) => prev + 90);
  };

  useEffect(() => {
    console.log(isHovered);
  }, [isHovered]);

  return (
    <div
      className="menu-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="menu"
        whileHover="hover"
        variants={{
          initial: {
            width: "7rem",
            height: "5rem",
            x: 0,
            y: 0,
          },
          hover: {
            width: "40vw",
            height: "100vh",
            x: "2rem",
            y: "-2rem",
            borderRadius: "0",
            transition: {
              delay: 0.1,
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          },
        }}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        exit="exit"
      >
        <img className="menu-icon" src={MenuIcon} alt="" />
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="menu-card"
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              y: 20,
              transition: {
                delay: 0,
              },
            }}
            transition={{
              duration: 0.4,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div className="menu-svg">
              <motion.img
                src={svgPlus}
                alt=""
                animate={{ rotate: rotation }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              />
            </div>

            <div className="menu-tools">
              <Link to={"/"} className="link" onMouseEnter={handleLinkHover}>
                <Text text={"home"} coin={1} />
              </Link>
              <Link
                to={"/projects"}
                className="link"
                onMouseEnter={handleLinkHover}
              >
                <Text text={"about"} coin={1} />
              </Link>
              <Link
                to={"/projects"}
                className="link"
                onMouseEnter={handleLinkHover}
              >
                <Text text={"projects"} coin={1} />
              </Link>
              <Link to={"/"} className="link" onMouseEnter={handleLinkHover}>
                <Text text={"contact"} coin={1} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
