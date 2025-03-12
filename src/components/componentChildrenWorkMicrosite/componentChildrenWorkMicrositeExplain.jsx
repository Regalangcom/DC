import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring } from "framer-motion";
const ComponentChildrenWorkMicrositeExplain = () => {
  // Update posisi cursor saat bergerak
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
      <div className="flex flex-col justify-center  items-center relative px-6 sm:px-[72px]">
        <div className="flex justify-start w-full  mx-auto ">
          <div className="font-fontDC leading-snug md:leading-tight"></div>
        </div>

        <div className="flex flex-row w-full md:mb-24 mx-auto gap-6 ">
          <div className="flex  items-center  flex-col max-h-[200px] min-w-[750px] ">
            <div className=" ">
              <p className="font-fontDC md:text-[16px] text-[14px]">SERVICES</p>
              <p className="font-fontDC md:text-[32px] text-[16px] ">
                Redesign
              </p>
              <p className="font-fontDC md:text-[32px] text-[16px] ">
                UI/UX Design
              </p>
              <p className="font-fontDC md:text-[32px] text-[16px]">
                Prototype
              </p>
              <p className="font-fontDC md:text-[32px] text-[16px]">
                Desktop & Responsive Web
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col  min-w-[150px] ">
            {/* Kolom 2 */}
            <ul className="flex flex-col gap-2">
              <li>
                <p className="md:text-[16px] text-[16px] font-fontDC">
                  BACKGROUND
                </p>
              </li>
              <li>
                <p className="md:text-[32px] text-[16px] font-fontDC">
                  The website is used by customers to access marketing
                  campaigns, banking products, billings etc. The website has a
                  cluttered layout and confusing navigation, making it difficult
                  for customers to find what they are looking for.
                </p>
              </li>
              <li>
                <p className="md:text-[16px] text-[16px] font-fontDC md:mt-12">
                  SOLUTION
                </p>
              </li>
              <li>
                <p className="md:text-[32px] text-[16px] font-fontDC">
                  Redesigning the layout, streamlining the navigation structure,
                  create modern & minimal design, align all visual elements, add
                  more whitespace to make users digest all information easily.
                </p>
              </li>
            </ul>
          </div>
        </div>
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
};

export default ComponentChildrenWorkMicrositeExplain;
