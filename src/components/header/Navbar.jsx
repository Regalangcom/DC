import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isBlurActive, setIsBlurActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (!navbar) return;

      const navbarRect = navbar.getBoundingClientRect();
      const elementsBelow = document.elementsFromPoint(
        navbarRect.left + navbarRect.width / 2,
        navbarRect.bottom + 1
      );

      const isTouching = elementsBelow.some(
        (el) =>
          el.id !== "navbar" && el.tagName !== "BODY" && el.tagName !== "HTML"
      );

      setIsBlurActive(isTouching);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed font-fontDC ${
        isMobile ? "w-[400px] bottom-6 px-4 py-5" : "w-[23%] bottom-9 px-7 py-7"
      } left-1/2 transform -translate-x-1/2 z-20 flex ${
        isMobile ? "gap-6" : "gap-12"
      } justify-center rounded-full font-fontDC transition-all duration-300 ${
        isBlurActive
          ? "backdrop-blur-[60px] bg-blackDC/40 shadow-blackDC"
          : "backdrop-blur-md bg-blackDC/20 shadow-md"
      }`}
    >
      {["Home", "Works", "About"].map((item, index) => (
        <motion.div
          key={index}
          href="#"
          className={`text-whiteDC ${
            isMobile ? "text-[18px]" : "text-[20px]"
          } font-bold`}
          animate={{ rotate: activeIndex === index ? 15 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setActiveIndex(index)}
        >
          <Link to={item === "Home" ? "/" : `/${item.toLocaleLowerCase()}`}>
            {item}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
};

export default Navbar;
