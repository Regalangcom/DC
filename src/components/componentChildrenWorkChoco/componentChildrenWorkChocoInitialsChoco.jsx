/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useSpring, useMotionValue } from "framer-motion";

import { InitiaLDesignChoco } from "../../constant";

const ComponentChildrenWorkChocoInitialsChoco = () => {
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

  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-10 w-full min-h-screen overflow-hidden">
      <div className="flex flex-col gap-10 w-full items-center">
        {InitiaLDesignChoco.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-full max-w-[1770px]"
          >
            {/* Gambar */}
            <div className="relative max-w-[1880px]  md:h-[90vh] min-h-[500px] rounded-3xl overflow-hidden z-10">
              <img
                src={item.img}
                alt="Hero Image"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* Teks di bawah gambar */}
            <div className="w-full text-center mt-6">
              <h1 className="text-[12px] md:text-[32px] font-bold font-fontDC leading-tight">
                {item.texts}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <motion.div
        // className=" bg-greeDC h-6 w-6 rounded-full fixed pointer-events-none z-50"
        className="fixed left-0 top-0 w-8 h-8 rounded-full bg-greeDC mix-blend-difference z-[999] pointer-events-none"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        // transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
      ></motion.div>
    </section>
  );
};

export default ComponentChildrenWorkChocoInitialsChoco;
