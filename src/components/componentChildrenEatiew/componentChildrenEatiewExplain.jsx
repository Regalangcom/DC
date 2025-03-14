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

        <div className="flex flex-row w-full max-w-[1440px] md:mb-24 mx-auto gap-6 ">
          <div className="flex  items-center  flex-col max-h-[200px] min-w-[40%] ">
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

          <div className="flex flex-1 flex-col  min-w-[60%] ">
            {/* Kolom 2 */}
            <ul className="flex flex-col gap-2">
              <li>
                <p className="md:text-[16px] text-[16px] font-fontDC">
                  BACKGROUND
                </p>
              </li>
              <li>
                <p className="md:text-[32px] text-[16px] font-fontDC">
                  As a dental clinic, Harvest Dental Care uses social media as a
                  channel to promote its products, which has its own challenges.
                  <br />
                  The choice of content presented must be able to eliminate
                  negative impressions on society, both children and adults,
                  such as scary, painful and dirty. <br /> Because teeth are a
                  person's private area, being able to explore content such as
                  testimonials or actual activities in the process of treatment
                  or tooth extraction cannot be used just anywhere because it is
                  the patient's privacy.
                </p>
              </li>
              <li>
                <p className="md:text-[16px] text-[16px] font-fontDC md:mt-12">
                  SOLUTION
                </p>
              </li>
              <li>
                <p className="md:text-[32px] text-[16px] font-fontDC">
                  Determine pillar content that is in line with achievement
                  targets in social media marketing such as: Education,
                  Promotion, Speech, Games and Testimonials. <br /> Using
                  designs that are attractive to children and adults by
                  utilizing animated and illustrative content in the form of
                  videos or image designs. <br /> Utilizing the existence of Key
                  Opinion Leaders (KOL) and Public Figures to build public trust
                  in the products offered and expand the reach of the content
                  presented.
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
