import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring } from "framer-motion";
import { imageLogoDCWork } from "../assets";

function PagesWork() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Konfigurasi animasi agar lebih smooth
  const springConfig = { damping: 25, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorX && cursorY) {
        requestAnimationFrame(() => {
          cursorX.set(e.clientX);
          cursorY.set(e.clientY);
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <div className="flex flex-col justify-center items-center mt-[4%] relative px-6 sm:px-[72px]">
      <div className="justify-start items-start relative w-full right-10 mb-10 ">
        <img
          src={imageLogoDCWork}
          alt="Logo DC Work"
          className="w-[150px] h-[70px] inline-block align-top"
        />
      </div>
      <div className="flex justify-start w-full mb-24 mx-auto">
        <div className="md:text-[80px] text-[50px] text-textDC font-fontDC font-normal leading-snug md:leading-tight">
          <h2>A Selection of Our Recent Work</h2>
          <p className="md:text-[24px] text-[16px] text-testDC">
            We help people, brands and organizations to design the communication
            with their environment
          </p>
        </div>
      </div>

      {/* Elemen kursor custom (lingkaran hijau) */}
      <motion.div
        className="fixed left-0 top-0 w-5 h-5 rounded-full bg-greeDC z-[999] pointer-events-none"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

export default PagesWork;
