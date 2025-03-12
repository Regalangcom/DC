import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const ComponentChildrenEatiewExplain = () => {
  const [mouseMotion, setMouseMotion] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Menghilangkan kursor default di body
    document.body.style.cursor = "none";

    const handleMouseMove = (e) => {
      setMouseMotion({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto"; // Kembalikan kursor normal saat komponen unmount
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
                Photo and Video Production
              </p>
              <p className="font-fontDC md:text-[32px] text-[16px] ">
                Content Planning
              </p>
              <p className="font-fontDC md:text-[32px] text-[16px]">
                Copywriting
              </p>
              <p className="font-fontDC md:text-[32px] text-[16px]">
                Performance Report
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
                  By utilizing social media, especially Instagram, as a product
                  marketing medium, the audience can clearly see the details of
                  the products being offered. Apart from that, Eattiew also has
                  a Statement of Work (SOW) which has quite detailed
                  restrictions, such as no talent is allowed to display their
                  entire body in any content.
                </p>
              </li>
              <li>
                <p className="md:text-[16px] text-[16px] font-fontDC md:mt-12">
                  SOLUTION
                </p>
              </li>
              <li>
                <p className="md:text-[32px] text-[16px] font-fontDC">
                  Create a monthly content plan that is adjusted to the
                  specified SOW. Organize, create and post agreed content every
                  month according to pillar content that is in synergy with the
                  desired achievement targets. Create good and attractive
                  product photos and videos needed for marketing content
                  tailored to sales targets.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* Elemen kursor custom (lingkaran hijau) */}
        <motion.div
          className=" bg-greeDC h-6 w-6 rounded-full fixed pointer-events-none z-50"
          style={{
            left: mouseMotion.x,
            top: mouseMotion.y,
            transform: "translate(-50%, -50%)",
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
        ></motion.div>
      </div>
    </>
  );
};

export default ComponentChildrenEatiewExplain;
