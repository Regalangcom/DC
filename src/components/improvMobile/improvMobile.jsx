import React, { useRef, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { imageUiUx } from "../../assets";
import { Link } from "react-router-dom";

const ImprovMobile = () => {
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
      requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <section
        className="relative flex flex-col  md:flex-row items-center justify-between px-6 md:px-16 py-10 w-full overflow-hidden"
        ref={ref}
      >
        {/* Wrapper Gambar */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="w-full max-w-[400px] md:max-w-[52vw] md:h-[95vh] overflow-hidden rounded-3xl  relative z-10 mb-4">
            <Link to="/octo-merchant" style={{ cursor: "none" }}>
              {/* Custom Cursor */}
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
                    transition:
                      "width 0.2s, height 0.2s, background-color 0.2s",
                    mixBlendMode: "normal",
                  }}
                >
                  view Case
                </motion.div>
              )}
              {/* Gambar yang mengalami zoom */}
              <motion.img
                src={imageUiUx}
                alt="Hero Image"
                className="w-full h-full object-cover"
                style={{ scale }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </Link>
          </div>

          {/* Bagian Teks */}
          <motion.div
            style={{ y: textY }}
            className="w-full md:w-[40%] text-left mt-4 md:mt-0 relative z-80 flex flex-col justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h1 className="text-3xl md:text-2xl font-fontDC text-gray-900 leading-tight">
              CIMB Niaga
            </h1>
            <p className="lg:leading-[1.2] mt-2 mb-4 text-[44px] lg:text-heading-2-dekstop  w-full font-fontDC">
              Improving Mobile App Experience for Merchants
            </p>
            <p className="font-fontDC md:text-[24px] mt-4">
              We worked with CIMB Niaga to create a better experience, intuitive
              for merchants to transact, monitor and manage payments.
            </p>
            <div>
              <button className="mt-4 px-6 py-1 border-grayDC border text-grayDC font-fontDC text-[14px] rounded-full  transition-all">
                <p>UX-UI Design</p>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="w-full flex justify-center pt-20 pb-10">
        <div>
          <motion.button
            className="relative px-6 py-5 rounded-full w-60  bg-blackDC  text-whiteDC text-lg border-2 border-green-500 overflow-hidden"
            whileHover="hover"
            initial="initial"
          >
            {/* Layer hijau naik dengan curve di atas */}
            <motion.div
              className="absolute inset-0  bg-greeDC rounded-full"
              variants={{
                initial: { clipPath: "inset(100% 0% 0% 0%)" }, // Mulai dari bawah
                hover: {
                  clipPath: [
                    "inset(100% 0% 0% 0%)", // Start dari bawah
                    "inset(40% 0% 0% 0% round 50% 50% 0% 0%)", // Curve agak tinggi & tajam
                    "inset(15% 0% 0% 0% round 95% 95% 0% 0%)", // Curve SUPER lancip
                    "inset(0% 0% 0% 0%)", // Full naikll menutupi button
                  ],
                  transition: { duration: 0.3, ease: "easeInOut" },
                },
              }}
            />

            {/* Teks tetap di atas */}
            <span className="relative z-10 text-white">See all works</span>
          </motion.button>
        </div>
      </div>

      {/* Tombol "See All Works" */}
    </div>
  );
};

export default ImprovMobile;
