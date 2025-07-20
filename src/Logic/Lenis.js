import { useEffect } from "react";
import Lenis from "lenis";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      // duration: 0.9, // faster and cleaner
      easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic, Denis-style
      smooth: true,
      smoothTouch: false, // optional: better native scroll on mobile
      direction: "vertical",
      gestureDirection: "vertical",
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
