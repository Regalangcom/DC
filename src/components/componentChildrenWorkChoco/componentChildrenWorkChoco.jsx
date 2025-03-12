import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring } from "framer-motion";
import { imageLogoDCWork } from "../../assets";
const ComponentChildrenWorkChoco = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    document.body.style.cursor = "none";
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      <div className="flex flex-col max-w-[1640px] justify-center  items-center md:mt-[7%] relative px-6 sm:px-[72px]">
        <div className=" md:items-start md:relative mb-10 left-[200px]  w-full">
          <img
            src={imageLogoDCWork}
            alt="Logo DC Work"
            className="md:w-[150px] md:h-[60px] w-[25px]  md:inline-block  align-top"
          />
        </div>
        <div className="flex flex-col relative w-full  left-[200px] mb-24 mx-auto">
          <div className=" md:text-[64px] text-[18px] text-textDC font-fontDC leading-snug md:leading-tight">
            <p className=" md:text-[32px]">Venchi Indonesia</p>
            <p>140 Years Of Expertise In Chocolate Making</p>
          </div>
        </div>

        {/* Elemen kursor custom (lingkaran hijau) */}
        <motion.div
          // className=" bg-greeDC h-6 w-6 rounded-full fixed pointer-events-none z-50"
          className="fixed bg-greeDC left-0 top-0 w-5 h-5 rounded-full  z-[999] pointer-events-none"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
          }}
          // transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
        ></motion.div>
      </div>
    </>
  );
};

export default ComponentChildrenWorkChoco;
