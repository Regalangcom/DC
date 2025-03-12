/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { useScroll, useTransform } from "framer-motion";

import { InitiaLDesignHarvest } from "../../constant";

const ComponentChildrenEatiewInitials = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });

  // eslint-disable-next-line no-unused-vars
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  // Update posisi cursor saat bergerak
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-center justify-center px-4 py-10 w-full min-h-screen overflow-hidden"
    >
      <div className="flex flex-col gap-10 w-full items-center">
        {InitiaLDesignHarvest.map((item) => (
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
    </section>
  );
};

export default ComponentChildrenEatiewInitials;
