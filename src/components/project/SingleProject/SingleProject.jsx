import "./SingleProject.css";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";

import useFloatingTilt from "./useFloatingTilt";
import useFloatAnimation from "./useFloatAnimation";
import Text from "../../Layout/Text/Text";

const SingleProject = ({ project }) => {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const floatAnimation = useAnimation();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const [scaleUp, setScaleUp] = useState(false);
  const [scrollDir, setScrollDir] = useState("down");

  useFloatingTilt(rotateX, rotateY);
  useFloatAnimation(floatAnimation);

  // Scroll Direction
  useEffect(() => {
    let lastY = window.scrollY;

    const updateScrollDir = () => {
      const currentY = window.scrollY;
      setScrollDir(currentY > lastY ? "down" : "up");
      lastY = currentY;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  // Viewport Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        const belowViewport =
          ref.current.getBoundingClientRect().top > window.innerHeight;

        if (isVisible) setScaleUp(true);
        else if (scrollDir === "down" && belowViewport) setScaleUp(false);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [scrollDir]);

  return (
    <motion.div
      className="project-wrapper"
      ref={ref}
      initial={{ scale: 0.6, x: -200, y: 100, opacity: 0.6 }}
      animate={{
        scale: scaleUp ? 1 : 0.7,
        x: scaleUp ? 0 : -200,
        y: scaleUp ? 0 : 100,
        opacity: scaleUp ? 1 : 0.6,
      }}
      transition={{ delay: 0.1, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="project-image">
        <motion.img
          src={project.img}
          alt=""
          animate={floatAnimation}
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1000,
            display: "inline-block",
          }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        />
      </div>

      <div className="project-info">
        <span className="project-info-name">
          <Text text={project.name} coin={1} />
        </span>
        <p className="project-info-des">{project.des}</p>
        <div className="project-view">
          view {project.name}
          <motion.div
            className="view-dot"
            variants={{
              initial: {
                width: 0,
                height: 0,
              },
              hover: {
                width: "10px",
                height: "10px",
              },
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProject;
