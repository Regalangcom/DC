/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { Eatiewinitials } from "../../assets";
import { imageUiUx } from "../../assets";
const ComponentChildrenImproveCard = () => {
  // Update posisi cursor saat bergerak
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, suseStatetiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-10 w-full min-h-screen overflow-hidden">
      <div className="relative  w-full flex flex-col items-center ">
        <div
          ref={imgRef}
          className=" md:w-screen md:h-[60vh] lg:h-screen overflow-hidden relative z-10"
        >
          <img
            src={imageUiUx}
            alt="Hero Image"
            className="w-full h-full object-cover "
            style={{ scale }}
          />
        </div>
      </div>
      <motion.div
        // className=" bg-greeDC h-6 w-6 rounded-full fixed pointer-events-none z-50"
        className="fixed left-0 top-0 w-8 h-8 rounded-full bg-white mix-blend-difference z-[999] pointer-events-none"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        // transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
      ></motion.div>
    </section>
  );
};

export default ComponentChildrenImproveCard;
