import { useEffect, useState } from "react";

export const useIsMobile = (breakpoint = 480) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < breakpoint;
      setIsMobile(mobile);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
};
