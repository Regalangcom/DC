import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
function ChildrenExplain() {
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
          <div className="flex  items-center flex-col max-h-[200px] min-w-[40%]">
            <div className=" ">
              <p className="font-fontDC md:text-[16px] text-[14px]">SERVICES</p>
              <p className="font-fontDC md:text-[32px] text-[16px] ">
                Research
              </p>
              <p className="font-fontDC md:text-[32px] text-[16px] ">
                Moodboard
              </p>
              <p className="font-fontDC md:text-[32px] text-[16px]">
                Final Design
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
                  Moodboard Final Design BACKGROUND CIMB Niaga feature such as
                  Mobile banking, rely on Creative design to deliver what most
                  costumer demand. In 2023, CIMB Niaga use lifestyle method for
                  OCTO Mobile Campaign which will be distributed via OOH ( Out
                  of home) media channels. Such ATM, Street LED, Banner etc.{" "}
                  <br /> Key features that needed are: <br /> Scan QRIS -
                  Portrayed by Matthew (BA) Bayar tagihan - Portrayed by Maudy
                  (BA) Reksa dana - Portrayed by Sandra (BA) Tabungan syariah -
                  Portrayed by Cut Mini (BA) We use a design approach with a gel
                  photography theme.
                </p>
              </li>
              <li>
                <p className="md:text-[16px] text-[16px] font-fontDC md:mt-12">
                  SOLUTION
                </p>
              </li>
              <li>
                <p className="md:text-[32px] text-[16px] font-fontDC">
                  Create a concept that best resonates with the target audience
                  and effectively communicates the app’s key benefits. <br />{" "}
                  Ensure the visual is versatile and adaptable for use across
                  various media channels, including digital ads, social media,
                  print materials, and in-branch displays.
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
}

export default ChildrenExplain;
