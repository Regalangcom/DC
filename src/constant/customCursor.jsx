import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = ({ hovered }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    document.body.style.cursor = "none";

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <motion.div
      className={`fixed bg-greeDC rounded-full pointer-events-none transition-all duration-200 ease-out ${
        hovered ? "w-10 h-10 opacity-60" : "w-5 h-5 opacity-100"
      }`}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        zIndex: 5, // Lebih kecil dari View Case
        mixBlendMode: "difference", // Agar terlihat di atas background terang
      }}
    />
  );
};

export default CustomCursor;
