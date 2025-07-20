import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

const useFloatingTilt = (rotateX, rotateY) => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX;
      const y = e.clientY;

      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;

      rotateX.set(((y - centerY) / centerY) * -10);
      rotateY.set(((x - centerX) / centerX) * 10);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rotateX, rotateY]);
};

export default useFloatingTilt;
