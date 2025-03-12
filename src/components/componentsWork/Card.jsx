/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { CardWorks } from "../../constant";
import { Link } from "react-router-dom";

const Card = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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
      {/* Cursor Follow "View Case" */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none flex items-center justify-center z-[100]"
        style={{
          x: cursorPos.x - 60,
          y: cursorPos.y - 20,
          width: isHovered ? 120 : 20,
          height: isHovered ? 40 : 20,
          backgroundColor: isHovered ? "black" : "transparent",
          borderRadius: "20px",
          color: "white",
          fontSize: "14px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          transition: "width 0.2s, height 0.2s, background-color 0.2s",
          mixBlendMode: isHovered ? "normal" : "difference",
        }}
      >
        {isHovered && "View Case"}
      </motion.div>

      {CardWorks.map((data) => {
        const imgRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: imgRef,
          offset: ["start end", "end start"],
        });

        const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

        return (
          <div
            key={data.id}
            className="relative w-full flex flex-col items-center mb-20"
          >
            <Link to={data.url}>
              {/* Wrapper Gambar dengan Animasi Transform */}
              <div
                ref={imgRef}
                className="w-full max-w-[1770px] md:h-[60vh]   lg:h-screen rounded-3xl overflow-hidden relative z-10"
              >
                <motion.img
                  src={data.image}
                  alt="Hero Image"
                  className="w-full h-full object-cover rounded-3xl"
                  style={{ scale }}
                />
              </div>

              {/* Bagian Teks (Tetap Statis & Responsif) */}
              <div className="justify-start items-start relative w-full md:left-8 md:mb-20 mt-10">
                <h1 className="text-[12px] md:text-[24px] font-fontDC text-gray-900  mb-10 leading-tight">
                  {data.textHead}
                </h1>
                <p className="mt-4 md:mt-5 text-[44px] md:text-[64px] font-fontDC ">
                  {data.TextHeadText}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Card;
