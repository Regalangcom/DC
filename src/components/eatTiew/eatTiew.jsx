import React, { useRef, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { imageEatiw } from "../../assets";
import { Link } from "react-router-dom";

const EatTiew = () => {
  const ref = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Ambil progress scroll untuk animasi zoom
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animasi zoom berdasarkan scroll progress
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [100, 0]); // Dari 50px ke 0px

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
      className="relative flex flex-col mb-[10%] md:flex-row items-center justify-between px-6 md:px-16 py-10 w-full  overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to="/harvest-dental">
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

        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Wrapper Gambar */}
          <div
            className="w-full max-w-[400px] md:max-w-[52vw] md:h-[95vh] overflow-hidden rounded-3xl  relative z-10 mb-4" // Menambahkan mb-4 untuk jarak antar card
            ref={ref}
          >
            {/* Gambar yang mengalami zoom */}
            <motion.img
              src={imageEatiw}
              alt="Hero Image"
              className="w-full h-full object-cover"
              style={{ scale }}
            />
          </div>

          {/* Bagian Teks */}
          <motion.div
            style={{ y: textY }}
            className="w-full md:w-[40%] text-left mt-4 md:mt-0 relative z-10 flex flex-col justify-center"
          >
            <h1 className="text-3xl md:text-2xl font-fontDC text-gray-900 leading-tight">
              Eattiew
            </h1>
            <p className="lg:leading-[1.2] mt-2 mb-4 text-[44px] lg:text-heading-2-dekstop  w-full font-fontDC">
              Eattiew From the Oven to Your Screen, Taste the Sweetness!
            </p>
            <p className="font-fontDC md:text-[24px] mt-2 mb-4">
              We worked with Eattiew to increase sales of products offered
              through social media marketing, by providing creative and
              attention-grabbing content.
            </p>
            <div className="flex gap-3">
              <button className="mt-4 px-6 py-1 border-grayDC border text-grayDC font-fontDC text-[14px] rounded-full  transition-all">
                <p>Sosial Media Management</p>
              </button>
              <button className="mt-4 px-6 py-1 border-grayDC border text-grayDC font-fontDC text-[14px] rounded-full  transition-all">
                <p>Content Management</p>
              </button>
            </div>
          </motion.div>
        </div>
      </Link>
    </section>
  );
};

export default EatTiew;
