import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "react-bootstrap-icons";

const Home: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const scrollToContact = () => {
    const element = document.getElementById("id-contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="id-home"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/img/banner.jpg)" }}
    >
      <div className="h-[5vh]"></div>
      <div className="relative w-full h-auto z-10 p-[12%_5%_5%]" ref={ref}>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[32px] tracking-[28px] generalSans-light text-white"
        >
          WELCOME TO
        </motion.h2>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[148px] tracking-[-9px] leading-none monumentExtended text-white"
        >
          PORTFOLIO
        </motion.h1>

        {/* Kontainer Marquee */}
        <div className="marquee-wrapper overflow-hidden whitespace-nowrap">
          <motion.div
            className="inline-block text-[24px] font-light tracking-[5px] whitespace-nowrap text-white"
            animate="animate"
          >
            Mobile Developer
          </motion.div>
        </div>

        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          type="button"
          onClick={scrollToContact}
          className="relative flex items-center justify-center mt-24 p-4 w-[12em] h-[3em] border border-white bg-transparent text-white overflow-hidden z-10 transition-colors duration-300 group home-button"
        >
          Let&rsquo;s Connect! <ChevronRight size={20} />
        </motion.button>
      </div>
    </section>
  );
};

export default Home;
