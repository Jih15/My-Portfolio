import React, { useState, useEffect } from "react";
import { Github, Linkedin } from "react-bootstrap-icons";
import { motion } from "framer-motion";

const NewHeader: React.FC = () => {
  const [headerColor, setHeaderColor] = useState("text-white");
  const [showIcons, setShowIcons] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let found = false;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const bgColor = getComputedStyle(section).backgroundColor;
        const isDark = isDarkColor(bgColor);

        if (index === 0) {
          if (rect.bottom <= window.innerHeight / 2) {
            setShowIcons(false); 
          } else {
            setShowIcons(true); 
          }
        }

        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          setHeaderColor(isDark ? "text-white" : "text-black");
          found = true;
        }
      });

      if (!found) {
        setHeaderColor("text-white"); 
        setShowIcons(true); 
      }
    };

    const isDarkColor = (color: string) => {
      const [r, g, b] = color.match(/\d+/g)!.map(Number);
      const brightness = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
      return brightness < 0.5;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Cek awal

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed flex p-9 w-full justify-between items-center z-20 transition-all duration-300 ease-in-out ${headerColor}`}
    >
      <h1 className={`transition-all duration-300 ease-in-out ${headerColor}`}>
        <a href="#id-home" className="no-underline monumentExtended text-3xl">
          JIH
        </a>
      </h1>
      <div className="flex transition-transform duration-500 ease-in-out">
        <motion.div
          className="flex items-center justify-center w-8 h-8 mx-4 z-10"
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: showIcons ? 1 : 0, x: showIcons ? 0 : -30 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <a
            href="https://www.linkedin.com/in/zaqaul-fikri-aziz-4b0a81270/"
            target="_blank"
            rel="noopener noreferrer"
            className={headerColor}
          >
            <Linkedin size={30} />
          </a>
        </motion.div>
        <motion.div
          className="flex items-center justify-center w-8 h-8 mx-4 z-10"
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: showIcons ? 1 : 0, x: showIcons ? 0 : -30 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <a
            href="https://github.com/Jih15"
            target="_blank"
            rel="noopener noreferrer"
            className={headerColor}
          >
            <Github size={30} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NewHeader;
