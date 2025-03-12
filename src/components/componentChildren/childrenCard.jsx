/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { imageCMB } from "../../assets";
const ChildrenCard = () => {
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

  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-center justify-center px-4 py-10 w-full min-h-screen overflow-hidden"
    >
      <div className="relative  w-full flex flex-col items-center ">
        {/* <Link> */}
        {/* Wrapper Gambar dengan Animasi Transform */}
        <div
          ref={imgRef}
          className=" md:w-screen md:h-[60vh] lg:h-screen overflow-hidden relative z-10"
        >
          <img
            src={imageCMB}
            alt="Hero Image"
            className="w-full h-full object-cover "
            style={{ scale }}
          />
        </div>

        {/* Bagian Teks (Tetap Statis & Responsif) */}
        {/* </Link> */}
      </div>
    </section>
  );
};

export default ChildrenCard;
