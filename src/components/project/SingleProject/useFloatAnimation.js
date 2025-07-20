import { useEffect } from "react";

const useFloatAnimation = (floatAnimation) => {
  useEffect(() => {
    const float = async () => {
      while (true) {
        const randomX = (Math.random() - 0.5) * 6;
        const randomY = (Math.random() - 0.5) * 6;

        await floatAnimation.start({
          x: randomX,
          y: randomY,
          transition: {
            duration: 1.6,
            ease: "easeInOut",
          },
        });
      }
    };
    float();
  }, [floatAnimation]);
};

export default useFloatAnimation;
