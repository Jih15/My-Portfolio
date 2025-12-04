import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Download } from "react-bootstrap-icons";

const Home: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const scrollToContact = () => {
    const element = document.getElementById("id-contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/doc/CV_Zaqaul Fikri Aziz (2024) - EN.pdf'; 
    link.download = 'CV_Zaqaul Fikri Aziz (2024) - EN.pdf'; 
    link.click();
  };

  return (
    <section
      id="id-home"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/img/banner.jpg)" }}
    >
      <div className="h-[5vh]"></div>
      <div className="relative w-full h-auto z-10 px-5 pt-[50%] sm:p-[8%_4%_4%] md:p-[10%_5%_5%]" ref={ref}>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[1.3rem] sm:text-[2rem] tracking-[1rem] generalSans-light text-white"
        >
          WELCOME TO
        </motion.h2>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[5rem] break-words sm:text-[4rem] md:text-[6rem] lg:text-[9.25rem] tracking-[-0.1rem] leading-none monumentExtended text-white"
        >
          PORTFOLIO
        </motion.h1>

        {/* Kontainer Marquee */}
        <div className="marquee-wrapper overflow-hidden whitespace-nowrap mt-4">
          <motion.div
            className="inline-block text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] font-light tracking-[0.3125rem] whitespace-nowrap text-white"
            animate="animate"
          >
            Mobile Developer
          </motion.div>
        </div>

        <div className="flex w-auto h-auto space-x-3 mt-40 sm:mt-8">
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            type="button"
            onClick={scrollToContact}
            className="relative flex items-center justify-center p-2 w-[12em] sm:w-[10em] h-[3em] sm:h-[3em] border border-white bg-transparent text-white overflow-hidden z-10 transition-colors duration-300 group home-button"
          >
            Let&rsquo;s Connect! <ChevronRight size={20} />
          </motion.button>
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            type="button"
            onClick={downloadCV}
            className="relative flex items-center justify-center p-0 w-[6em] sm:w-[4em] h-[3em] sm:h-[3em] border border-white bg-transparent text-white overflow-hidden z-10 transition-colors duration-300 group cv-button"
          >
            CV <Download size={20} className="ml-2"/>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Home;
