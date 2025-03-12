import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const clients = [
  { id: 1, name: "CIMB NIAGA", logo: "cimb.png" },
  { id: 2, name: "QNB", logo: "qnb.png" },
  { id: 3, name: "TROPICAL", logo: "tropical.png" },
  { id: 4, name: "MORPHOSA", logo: "morphosa.png" },
  { id: 5, name: "Maybank", logo: "maybank.png" },
  { id: 6, name: "bank brp", logo: "bankbrp.png" },
  { id: 7, name: "forVITA", logo: "forvita.png" },
];
const TextCollaborate = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 w-full h-screen min-h-screen">
      {/* Bagian Gambar */}
      <div className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          We collaborate with a diverse array of clients, transforming <br />
          promising concepts into exceptional experiences and shaping a <br />
          brighter future.
        </h2>

        {/* Marquee Animation */}
        <div className="relative overflow-hidden mt-10">
          <motion.div
            className="flex space-x-8 w-max"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center w-40 h-24"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TextCollaborate;
