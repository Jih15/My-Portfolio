import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Google, Instagram, Facebook } from "react-bootstrap-icons";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <section className="flex-col items-center w-full h-[50vh] bg-black">
      <div>
        <p className="text-white monumentExtended text-6xl">JIH</p>
      </div>
      <div className="flex  w-80 justify-between p-4">
        <Facebook size={40} color={"white"}/>
        <Github size={40} color={"white"} />
        <Instagram size={40} color={"white"} />
        <Google size={40} color={"white"} />
      </div>
    </section>
  );
};

export default Footer;
