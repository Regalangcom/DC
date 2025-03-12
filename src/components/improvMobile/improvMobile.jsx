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
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <section
        className="relative flex flex-col  md:flex-row items-center justify-between px-6 md:px-16 py-10 w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to="/octo-merchant">
          {/* Custom Cursor */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[100]"
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
              transition: "all 0.2s ease-in-out",
              mixBlendMode: isHovered ? "normal" : "difference",
            }}
          >
            {isHovered && "View Case"}
          </motion.div>

          {/* Wrapper Gambar */}
          <div
            className="flex flex-col md:flex-row items-center justify-between w-full"
            ref={ref}
          >
            <div className="w-full max-w-[400px] md:max-w-[52vw] md:h-[95vh] overflow-hidden rounded-3xl  relative z-10 mb-4">
              {/* Gambar yang mengalami zoom */}
              <motion.img
                src={imageUiUx}
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
                CIMB Niaga
              </h1>
              <p className="lg:leading-[1.2] mt-2 mb-4 text-[44px] lg:text-heading-2-dekstop  w-full font-fontDC">
                Improving Mobile App Experience for Merchants
              </p>
              <p className="font-fontDC md:text-[24px] mt-4">
                We worked with CIMB Niaga to create a better experience,
                intuitive for merchants to transact, monitor and manage
                payments.
              </p>
              <div>
                <button className="mt-4 px-6 py-1 border-grayDC border text-grayDC font-fontDC text-[14px] rounded-full  transition-all">
                  <p>UX-UI Design</p>
                </button>
              </div>
            </motion.div>
          </div>
        </Link>
      </section>
      <div className="w-full flex justify-center pt-20 pb-10">
        <motion.button
          className="relative px-6 py-5 rounded-full w-60 bg-blackDC text-whiteDC font-fontDC text-lg  border-2 border-green-500 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Efek Gelombang 1 */}
          <motion.div
            className="absolute inset-5 bg-greeDC rounded-full"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }} // Tersembunyi di bawah
            whileHover={{ clipPath: "inset(0% 0% 0% 0%)" }} // Muncul penuh saat hover
            transition={{ duration: 0.1, ease: "easeInOut" }}
          />

          {/* Efek Gelombang 2 (Delay untuk efek berlapis) */}
          <motion.div
            className="absolute inset-5  bg-greeDC  rounded-full"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }} // Mulai dari bawah
            whileHover={{ clipPath: "inset(10% 0% 0% 0%)" }} // Muncul sebagian untuk efek gelombang
            transition={{ duration: 0.1, ease: "easeInOut", delay: 0.1 }}
          />

          {/* Teks tetap terlihat di atas */}
          <span className="relative z-10">See all works</span>
        </motion.button>
      </div>

      {/* Tombol "See All Works" */}
    </div>
  );
};

export default ImprovMobile;
