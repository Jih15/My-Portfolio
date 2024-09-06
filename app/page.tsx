"use client";

import React, { useEffect, useState } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";
import NewHeader from "@/components/Header";
import Home from "@/components/Home";
import Navbar from "@/components/navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

const Page: React.FC = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.getElementById("id-footer");
      if (footerElement) {
        const rect = footerElement.getBoundingClientRect();
        const isFooterVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsNavbarVisible(!isFooterVisible); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-x-hidden">
      {/* Header */}
      <NewHeader />

      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full transition-opacity duration-500 z-50 ${
          isNavbarVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
      </div>

      {/* Sections */}
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
