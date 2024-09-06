"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";
import NewHeader from "@/components/Header";
import Home from "@/components/Home";
import Navbar from "@/components/navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import React from "react";



const Page: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-x-hidden">
      {/* Header */}
      <NewHeader/>

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Page;