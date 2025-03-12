import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring } from "framer-motion";
function OurService() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, suseStatetiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[4%] relative px-6 sm:px-[72px]">
        <div className="flex justify-start w-full mb-24  mx-auto ">
          <div className="    font-fontDC leading-snug md:leading-tight">
            <div className="mb-10">
              <p className=" font-fontDC md:text-[32px] text-[14px]">
                Our service
              </p>
            </div>
            <p className="font-fontDC md:text-[64px] text-[18px]">
              {" "}
              Merging insight with creativity, we partner with clients of all
              scales to craft enchanting, enduring, and meaningful brands that
              linger in the minds of their audience.
            </p>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-row justify-start w-full md:mb-24 md:mt-24 mx-auto gap-6  overflow-x-auto">
          <div className="flex flex-1 flex-col items-start min-w-[150px]">
            {/* Kolom 1 */}
            <p className="font-fontDC md:text-[32px] text-[16px]">
              Creative Services
            </p>
          </div>

          <div className="flex flex-1 flex-col  min-w-[150px] ">
            {/* Kolom 2 */}
            <ul className="flex flex-col gap-2 ">
              <li>
                <p className="md:text-[32px] text-[16px] font-fontDC">
                  Brand Identity
                </p>
              </li>
              <li>
                <p className="md:text-[32px] text-[16px] font-fontDC">
                  Graphic Design
                </p>
              </li>
              <li>
                <p className="md:text-[32px] text-[16px] font-fontDC">
                  Web Design
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/*  */}

        {/*  */}

        <div className="flex flex-row justify-start w-full mb-24 mt-24 mx-auto gap-6 overflow-x-auto">
          {/* Kolom 1 */}
          <div className="flex flex-1 flex-col items-start min-w-[150px]">
            <p className="font-fontDC text-[16px] md:text-[32px]">Production</p>
          </div>

          {/* Kolom 2 */}
          <div className="flex flex-1 flex-col min-w-[150px]">
            <ul className="flex flex-col gap-2">
              <li>
                <p className="font-fontDC text-[16px] md:text-[32px]">
                  Animation
                </p>
              </li>
              <li>
                <p className="font-fontDC text-[16px] md:text-[32px]">
                  Photography
                </p>
              </li>
              <li>
                <p className="font-fontDC text-[16px] md:text-[32px]">
                  Social Strategy
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/*  */}

        {/* Elemen kursor custom (lingkaran hijau) */}
        <motion.div
          // className=" bg-greeDC h-6 w-6 rounded-full fixed pointer-events-none z-50"
          className="fixed left-0 top-0 w-8 h-8 rounded-full bg-white mix-blend-difference z-[999] pointer-events-none"
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

export default OurService;
