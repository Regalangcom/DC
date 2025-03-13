import React, { useRef, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { imageCMB } from "../../assets";
import { Link } from "react-router-dom";

const CimbNiaga = () => {
  const ref = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [100, 0]);

  useEffect(() => {
    const updateCursor = (e) => {
      requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  return (
    <section
      className="relative flex flex-col mb-[10%] md:flex-row items-center justify-between px-6 md:px-16 py-10 w-full overflow-hidden"
      ref={ref}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <div className="w-full max-w-[400px] md:max-w-[52vw] md:h-[95vh] overflow-hidden rounded-3xl relative z-10 mb-4">
          <Link to="/octo-mobile-campaign" style={{ cursor: "none" }}>
            {/* Cursor Custom */}
            {isHovered && (
              <motion.div
                className="fixed top-0 left-0 pointer-events-none flex items-center justify-center z-[100]"
                style={{
                  x: cursorPos.x - 60,
                  y: cursorPos.y - 20,
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
                  transition: "width 0.2s, height 0.2s, background-color 0.2s",
                  mixBlendMode: "normal",
                }}
              >
                view Case
              </motion.div>
            )}

            {/* Hover hanya di gambar */}
            <motion.img
              src={imageCMB}
              alt="Hero Image"
              className="w-full h-full object-cover"
              style={{ scale }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </Link>
        </div>

        {/* Hover hanya di teks */}
        <motion.div
          className="w-full md:w-[40%] text-left mt-4 md:mt-0 relative z-80 flex flex-col justify-center"
          style={{ y: textY }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1 className="text-3xl md:text-2xl font-fontDC text-blackDC leading-tight">
            CIMB Niaga
          </h1>
          <p className="lg:leading-[1.2] mt-2 mb-4 text-[44px] lg:text-heading-2-dekstop w-full font-fontDC">
            CIMB Niaga OCTO Mobile Campaign
          </p>
          <p className="font-fontDC md:text-[24px] mt-2 mb-4">
            We develop a key visual that captures attention and communicates the
            app's benefits effectively.
          </p>
          <div className="flex gap-3">
            <button className="mt-4 px-6 py-1 border-grayDC border text-grayDC font-fontDC text-[14px] rounded-full transition-all">
              <p>Graphic Design</p>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CimbNiaga;
