import "./MyImage.css";
import { useEffect } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";

const MyImage = ({ showBio, img }) => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const controls = useAnimation();

  // ⛅ Float animation
  useEffect(() => {
    let isCancelled = false;
    const float = async () => {
      while (!isCancelled) {
        const floatX = (Math.random() - 0.5) * 10;
        const floatY = (Math.random() - 0.5) * 10;

        await controls.start({
          x: floatX,
          y: floatY,
          transition: {
            duration: 3,
            ease: "easeInOut",
          },
        });
      }
    };

    float();
    return () => {
      isCancelled = true;
    };
  }, [controls]);

  // 🖱️ Mouse-based tilt
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xPos = e.clientX;
      const yPos = e.clientY;

      const rotateAmountX = ((yPos - innerHeight / 2) / innerHeight) * -20;
      const rotateAmountY = ((xPos - innerWidth / 2) / innerWidth) * 20;

      rotateX.set(rotateAmountX);
      rotateY.set(rotateAmountY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rotateX, rotateY]);

  return (
    <motion.div
      className="img"
      animate={controls}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      initial={{
        x: 0,
        y: -400,
        rotate: 10,
      }}
      transition={{
        delay: 0.1,
        duration: 1.5,
        ease: [0.76, 0, 0.24, 1],
      }}
      whileInView={{
        scale: showBio ? 0.6 : 1,
        rotate: showBio ? 0 : -10,
        y: -100,
        right: showBio ? -80 : 500,
      }}
    >
      <img src={img} alt="" />
    </motion.div>
  );
};

export default MyImage;
