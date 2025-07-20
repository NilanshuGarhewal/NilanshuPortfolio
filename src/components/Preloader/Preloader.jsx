import "./Preloader.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Preloader = () => {
  const counterElementRef = useRef(null);

  useEffect(() => {
    let obj = { count: 0 };

    gsap.to(obj, {
      count: 100,
      duration: 3,
      ease: "power1.out",
      onUpdate: () => {
        if (counterElementRef.current) {
          counterElementRef.current.textContent = Math.floor(obj.count);
        }
      },
    });
  }, []);

  return (
    <div className="preloader">
      <div className="counter" ref={counterElementRef}>0</div>
    </div>
  );
};

export default Preloader;
