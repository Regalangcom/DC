import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ImageForSlider } from "../../constant";

const ImageSlider = () => {
  const constraintRef = useRef(null);

  return (
    <section
      ref={constraintRef}
      className="relative flex flex-col items-center justify-center px-4 py-10 w-full max-h-screen overflow-hidden"
    >
      <motion.div
        className=" gap-4 md:gap-[40px] w-[500%] flex md:w-[360%] md:h-[960%] "
        drag="x"
        dragConstraints={constraintRef}
      >
        {ImageForSlider.map((item) => (
          <>
            <img
              src={item.image}
              alt={item.id}
              className="w-full h-full object-cover rounded-[45px] pointer-events-none"
            />
          </>
        ))}
      </motion.div>
    </section>
  );
};

export default ImageSlider;
