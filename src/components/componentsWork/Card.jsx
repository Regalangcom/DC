/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { CardWorks } from "../../constant";
import { Link } from "react-router-dom";

const Card = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredImage, setHoveredImage] = useState(false);

  // Update posisi cursor saat bergerak
  useEffect(() => {
    document.body.style.cursor = "none";

    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <section
      c
      className="relative  flex flex-col items-center justify-center px-4 py-10 w-full min-h-screen overflow-hidden z-10"
    >
      {CardWorks.map((data) => {
        const imgRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: imgRef,
          offset: ["start end", "end start"],
        });

        const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

        return (
          <motion.div
            key={data.id}
            className="relative w-full flex flex-col items-center mb-20"
          >
            <Link to={data.url}>
              {hoveredImage && (
                <motion.div
                  className="fixed top-0 left-0 pointer-events-none flex items-center justify-center z-[999]"
                  style={{
                    x: cursorPos.x - 60,
                    y: cursorPos.y + 20, // Membuatnya berada sedikit di bawah cursor
                    width: 120,
                    height: 40,
                    backgroundColor: "black",
                    borderRadius: "20px",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    transition:
                      "width 0.2s, height 0.2s, background-color 0.2s",
                    mixBlendMode: "normal",
                  }}
                >
                  View Case
                </motion.div>
              )}
              {/* Wrapper Gambar dengan Animasi Transform */}
              <div
                ref={imgRef}
                className="w-full max-w-[1770px] md:h-[60vh] lg:h-screen rounded-3xl overflow-hidden relative z-10"
                style={{ cursor: "none" }}
                onMouseEnter={() => setHoveredImage(true)}
                onMouseLeave={() => setHoveredImage(false)}
              >
                <motion.img
                  src={data.image}
                  alt="Hero Image"
                  className="w-full h-full object-cover rounded-3xl"
                  style={{ scale }}
                />
              </div>

              {/* Bagian Teks */}
              <div className="justify-start items-start relative w-full md:left-8 md:mb-20 mt-10">
                <h1 className="text-[12px] md:text-[24px] font-fontDC text-gray-900 mb-10 leading-tight">
                  {data.textHead}
                </h1>
                <p className="mt-4 md:mt-5 text-[44px] md:text-[64px] font-fontDC">
                  {data.TextHeadText}
                </p>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Card;
