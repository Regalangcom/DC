import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring } from "framer-motion";
import { svgCamera, svgHandphone, svgImage } from "../assets";
function PageFirst() {
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
      <div className="flex flex-col justify-center items-center h-screen relative px-6 sm:px-[72px]">
        <div className="flex justify-start w-full  mx-auto">
          {/* <div className="text-[60px]    text-textDC font-fontDC font-normal "> */}
          <div className="text-4xl sm:text-[60px] text-textDC font-fontDC font-normal leading-snug sm:leading-tight">
            We give solutions in form of{" "}
            <span className="font-bold">graphics</span>{" "}
            <img
              src={svgImage}
              alt="Graphics Icon"
              // className="w-[80px] h-[70px] inline-block align-top "
              className="w-10 h-9 sm:w-[80px] sm:h-[70px] inline-block align-top"
            />
            <br />
            <span className="font-bold ">content</span> creations
            <img
              src={svgCamera}
              alt="Graphics Icon"
              // className="w-[80px] h-[70px] inline-block align-top"
              className="w-10 h-9 sm:w-[80px] sm:h-[70px] inline-block align-top"
            />{" "}
            <span></span>
            and make <span className="font-bold">app</span> better
            <img
              src={svgHandphone}
              alt="Graphics Icon"
              // className="w-[80px] h-[70px] inline-block align-top "
              className="w-10 h-9 sm:w-[80px] sm:h-[70px] inline-block align-top"
            />
          </div>
        </div>

        {/* Elemen kursor custom (lingkaran hijau) */}
        <motion.div
          // className=" bg-greeDC h-6 w-6 rounded-full fixed pointer-events-none z-50"
          className="fixed bg-greeDC left-0 top-0 w-5 h-5 rounded-full  z-[10] pointer-events-none"
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

export default PageFirst;
