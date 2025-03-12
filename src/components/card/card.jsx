// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Image } from "../../constant";

const MarqueeSection = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <section className="relative flex  flex-col  justify-start  items-start px-10 w-full md:mt-50 bg-gray-100 py-10 overflow-hidden">
      {/* Gradient Blur Effect */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>

      {/* Title */}
      <div className="text-start w-full mx-auto px-6">
        <h2 className="text-[12px]  md:text-[64px] lg:text-[64px] text-textDC font-fontDC ">
          We work with a wide range of clients, shaping better futures by
          turning good ideas into great experiences
        </h2>
      </div>

      {/* Marquee Carousel */}
      <div className="container mx-auto">
        <div className="flex MyGradients md:mb-20 md:mt-20">
          <motion.div ref={carouselRef} className="mt-8 overflow-hidden">
            <motion.div
              className="flex flex-shrink-0 gap-8"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              // drag="x"

              // dragConstraints={{ right: 0, left: -width }}
              // animate="animate"
              transition={{
                repeat: Infinity,
                // repeatType: "loop",
                ease: "linear",
                duration: 15,
              }}
            >
              {[...Image, ...Image].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white rounded-lg  p-4 w-48 h-28 flex items-center justify-center"
                >
                  <img
                    src={client.img}
                    // alt={client.name}
                    className="md:max-w-full md:max-h-full"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
