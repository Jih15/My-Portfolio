"use client";

import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const controls = useAnimation();
  const controlsColumn1 = useAnimation();
  const controlsColumn2 = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
      controlsColumn1.start({ x: 50, rotate: "-90deg" });
      controlsColumn2.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: -100 });
      controlsColumn1.start({ x: "-100vw", rotate: "-90deg" });
      controlsColumn2.start({ opacity: 0, y: 50 });
    }
  }, [isInView, controls, controlsColumn1, controlsColumn2]);

  return (
    <section
      id="id-about"
      ref={ref}
      className="flex flex-col-reverse lg:flex-row w-full h-screen bg-white bg-cover bg-center bg-no-repeat"
    >
      {/* Bagian Teks Kiri */}
      <div className="relative lg:flex-[0.5] flex-[1] h-full overflow-hidden z-0 flex items-center justify-center">
        <motion.p
          className="text-[5rem] sm:text-[7rem] lg:text-[15rem] kenyan-coffe absolute whitespace-nowrap"
          initial={{ x: "-100vw", rotate: "-90deg " }}
          animate={controlsColumn1}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          ZAQAUL
        </motion.p>
      </div>

      {/* Bagian Konten Tengah */}
      <div className="lg:flex-[0.7] flex-[1] h-full bg-white flex items-center justify-center p-4 lg:p-8">
        <motion.div
          className="w-full lg:w-[21rem]"
          initial={{ opacity: 0, y: 50 }}
          animate={controlsColumn2}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-3xl lg:text-5xl eudoxus-xbold mb-1">About Me.</h2>
          <h3 className="text-xl lg:text-2xl eudoxus-md-5 mb-7">
            Zaqaul Fikri Aziz
          </h3>
          <p className="text-sm lg:text-base generalSans">
            I am a student at the Politeknik Negeri Padang campus, 7th semester,
            Department of Informatics Engineering, D4-TRPL (Software Engineering
            Technology) study program with <br />
            <span className="text-teal-500 generalSansBold">
              GPA of 3.35/4.00.
            </span>
            <br />I have work experience such as studio and freelance. Having a
            high work spirit, being able to work together in a team, creative
            and initiative, besides that I currently have a desire to further
            develop and explore the field of Mobile Development in order to
            adapt in a professional scope.
          </p>
        </motion.div>
      </div>

      {/* Bagian Gambar Kanan */}
      <motion.div
        className="lg:flex-1 flex-[1] h-[20rem] lg:h-[40rem] relative"
        initial={{ opacity: 0, y: -100 }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full"
          style={{ backgroundImage: "url(/img/photobanner.png)" }}
        ></div>

        <div className="relative flex items-center justify-center h-full">
          <img
            src="/img/ajih.png"
            alt="Zaqaul Fikri Aziz"
            className="h-full object-contain z-10"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
