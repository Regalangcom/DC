// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";

// const RoundedSlideButton = () => {
//   return (
//     <div className="w-full flex justify-center pt-20 pb-10">
//       <motion.button
//         className="relative px-6 py-5 rounded-full w-60 bg-black text-white text-lg shadow-md overflow-hidden"
//         whileHover={{ y: -5 }} // Tombol naik sedikit saat hover
//       >
//         {/* Efek air naik dari bawah */}
//         <motion.div
//           className="absolute inset-0 bg-green-500"
//           initial={{ y: "100%" }} // Mulai dari bawah (tidak terlihat)
//           whileHover={{ y: "0%" }} // Naik ke atas saat hover
//           transition={{ duration: 0.5, ease: "easeInOut" }} // Transisi smooth
//         />

//         {/* Teks tetap terlihat di atas */}
//         <span className="relative z-10">See all works</span>
//       </motion.button>
//     </div>
//   );
// };

// export default RoundedSlideButton;
