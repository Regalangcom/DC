// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { imageLogoDC } from "../../assets";
const Footer = () => {
  return (
    <section
      className="relative flex flex-col items-start justify-start bg-[#222222] 
                        gap-12 h-[516px] overflow-hidden 
                        px-10 md:px-20 pt-20 md:pt-40 w-full z-0 text-whiteDC"
    >
      {/* Kolom Teks */}
      <div className="max-w-[250px] md:max-w-[1000px] text-left">
        <h2 className="text-[12px] md:text-[48px]  font-fontDC  leading-snug text-whiteDC">
          Crafting tomorrow's experiences, today. <br /> Let’s collaborate and
          create something extraordinary.
        </h2>

        {/* Kontak dengan animasi underline */}
        {/* Kontak dengan animasi underline */}
        <div className="flex flex-col md:flex-row gap-4 mt-5">
          {[
            { text: "+6289123456789", href: "tel:+6289123456789" },
            {
              text: "designcornerjkt@gmail.com",
              href: "mailto:designcornerjkt@gmail.com",
            },
          ].map(({ text, href }, index) => (
            <div key={index} className="relative group cursor-pointer">
              <a href={href} className="text-[12px] md:text-[24px] font-fontDC">
                {text}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-whiteDC transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Gambar (Dibawah kanan membelakangi teks) */}
      <div className="absolute bottom-0 right-0  opacity-5">
        <img
          src={imageLogoDC}
          alt="Logo"
          className="w-[200px] md:w-[500px]  h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Footer;
