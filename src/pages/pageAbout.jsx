import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring } from "framer-motion";
import { imageLogoDCWork } from "../assets";
function PagesAbout() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Konfigurasi animasi agar lebih cepat
  const springConfig = { damping: 25, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    document.body.style.cursor = "none";

    const moveCursor = (e) => {
      requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center  items-center mt-[4%] relative px-6 sm:px-[72px]">
        <div className="md:justify-start md:items-start md:relative w-full right-10 mb-10 ">
          <img
            src={imageLogoDCWork}
            alt="Logo DC Work"
            className="md:w-[150px] md:h-[70px] w-[30px] md:inline-block  align-top"
          />
        </div>
        <div className="flex justify-start w-full mb-10 mx-auto">
          <div className=" md:text-[64px] text-[18px] text-textDC font-fontDC leading-snug md:leading-tight">
            <p>
              {" "}
              We are <span className="font-extrabold">Design Corner</span> , a
              design studio based in Jakarta. Our projects and company ethos are
              centered around fostering sustainable relationships and a strong
              sense of community.
            </p>
          </div>
        </div>

        {/* Elemen kursor custom (lingkaran hijau) */}
        <motion.div
          // className=" bg-greeDC h-6 w-6 rounded-full fixed pointer-events-none z-50"
          className="fixed left-0 top-0 w-5 h-5 rounded-full bg-greeDC  z-[999] pointer-events-none"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
          }}
          // transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
        ></motion.div>
      </div>
    </>
  );
}

export default PagesAbout;
