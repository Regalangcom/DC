// import React, { useRef, useState, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { imageCMB } from "../../assets";
// import { CardWorks } from "../../constant";

// const Card = () => {
//   const ref = useRef(null);
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
//   const [isHovered, setIsHovered] = useState(false);

//   // Ambil progress scroll untuk animasi zoom
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   // Animasi zoom berdasarkan scroll progress
//   const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

//   // Update posisi cursor saat bergerak
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <section
//       className="relative flex flex-col items-center justify-center px-4 py-10 w-full min-h-screen overflow-hidden"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Cursor Follow "View Case" */}
//       <motion.div
//         className="fixed top-0 left-0 pointer-events-none flex items-center justify-center z-[100]"
//         style={{
//           x: cursorPos.x - 60,
//           y: cursorPos.y - 20,
//           width: isHovered ? 120 : 20,
//           height: isHovered ? 40 : 20,
//           backgroundColor: isHovered ? "black" : "transparent",
//           borderRadius: "20px",
//           color: "white",
//           fontSize: "14px",
//           fontWeight: "bold",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           transition: "width 0.2s, height 0.2s, background-color 0.2s",
//           mixBlendMode: isHovered ? "normal" : "difference",
//         }}
//       >
//         {isHovered && "View Case"}
//       </motion.div>

//       {CardWorks.map((data) => (
//         <div
//           key={data.id}
//           ref={ref}
//           className="w-full max-w-[1770px] h-auto rounded-3xl overflow-hidden relative z-10"
//         >
//           <div className="p-16 max-w-[1770px] h-auto overflow-hidden relative">
//             <motion.img
//               src={data.image}
//               alt="Hero Image"
//               className="w-full h-full object-cover rounded-3xl"
//               style={{ scale }} // Apply scale transformation here
//             />
//           </div>

//           {/* Bagian Teks */}
//           <div className="justify-start items-start relative w-full left-8 mb-20">
//             <h1 className="text-2xl left-10 font-fontDC text-gray-900 leading-tight">
//               {data.textHead}
//             </h1>
//             <p className="mt-6 mb-2 text-heading-2-dekstop font-fontDC">
//               {data.TextHeadText}
//             </p>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Card;


import React, { useRef, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { CardWorks } from "../../constant";

const Card = () => {
  const ref = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Ambil progress scroll untuk animasi zoom
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animasi zoom berdasarkan scroll progress
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  // Update posisi cursor saat bergerak
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      // className="relative flex flex-col items-center justify-center  px-4 py-10 w-full min-h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-center justify-center px-4 py-10 w-full   overflow-hidden"
    >
      {/* Cursor Follow "View Case" */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none flex items-center justify-center z-[100]"
        style={{
          x: cursorPos.x - 60,
          y: cursorPos.y - 20,
          width: isHovered ? 120 : 20,
          height: isHovered ? 40 : 20,
          backgroundColor: isHovered ? "black" : "transparent",
          borderRadius: "20px",
          color: "white",
          fontSize: "14px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          transition: "width 0.2s, height 0.2s, background-color 0.2s",
          mixBlendMode: isHovered ? "normal" : "difference",
        }}
      >
        {isHovered && "View Case"}
      </motion.div>
      {CardWorks.map((data) => (
        <>
          <div
            key={data.id}
            // style={{ borderRadius: "30px 20px 30px 20px" }}
            className="w-full max-w-[1770px] h-screen  rounded-3xl overflow-hidden relative z-10"
          >
            <div className="p-28 max-w-[1770px]  h-auto overflow-hidden relative ">
              <motion.img
                ref={ref}
                src={data.image}
                alt="Hero Image"
                className="w-full h-full object-cover rounded-3xl "
                style={{ scale }}
              />
            </div>
          </div>

          {/* Bagian Teks */}
          <div className="justify-start items-start relative w-full left-8 mb-20 ">
            <h1 className="text-2xl  left-10 font-fontDC text-gray-900 leading-tight">
              {data.textHead}
            </h1>
            <p className="mt-6 mb-2 text-heading-2-dekstop font-fontDC">
              {data.TextHeadText}
            </p>
          </div>
        </>
      ))}
      {/* Wrapper Gambar */}
      {/* <div className=""> */}
      {/* </div> */}
    </section>
  );
};

export default Card;
