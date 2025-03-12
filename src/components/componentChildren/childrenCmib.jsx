import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { imageLogoDCWork } from "../../assets";
const ChildrenCmib = () => {
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
      <div className="flex flex-col max-w-[990px] justify-center  items-center md:mt-[7%] relative px-6 sm:px-[72px]">
        <div className=" md:items-start md:relative mb-10 left-[200px]  w-full">
          <img
            src={imageLogoDCWork}
            alt="Logo DC Work"
            className="md:w-[150px] md:h-[60px] w-[25px]  md:inline-block  align-top"
          />
        </div>
        <div className="flex flex-row relative w-full left-[200px] mb-24 mx-auto">
          <div className=" md:text-[64px]  max-w-[900px] text-[18px] text-textDC font-fontDC leading-snug md:leading-tight">
            <p className=" md:text-[32px]">CIMB Niaga </p>
            <p>Octo Mobile Campaign</p>
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

export default ChildrenCmib;
