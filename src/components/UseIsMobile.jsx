import { useState, useEffect } from "react";

export function UseIsMobile() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(windowWidth < 700);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsMobile(windowWidth < 700 ? true : false);
    }
  }, [windowWidth]);

  return { isMobile };
}
