import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { imageLogoDCHead } from "../../assets";

const PageTransactions = ({ children }) => {
  const [showScreen, setShowScreen] = useState(true);

  useEffect(() => {
    // Setelah beberapa detik, sembunyikan layar
    const timer = setTimeout(() => {
      setShowScreen(false);
    }, 4500); // Total durasi 4.5 detik

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showScreen && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100vh" }} // Semua naik ke atas setelah menyatu
          transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
          className="fixed inset-0 bg-bgDC z-50 flex justify-center items-center overflow-hidden"
        >
          {/* Lapisan bawah naik hanya sampai tengah */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "50%" }} // Berhenti di tengah layar
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="absolute bottom-0 left-0 w-full h-1/2 bg-black"
          />

          {/* Lapisan atas turun dan menyatu di tengah */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }} // Menyatu di tengah
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            className="absolute top-0 left-0 w-full h-1/2 bg-black"
          />

          {/* Icon muncul setelah lapisan bawah naik */}
          <motion.img
            src={imageLogoDCHead}
            alt="Logo"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            className="w-24 h-24 z-10"
          />
        </motion.div>
      )}
      {!showScreen && children}
    </>
  );
};

export default PageTransactions;
