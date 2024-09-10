import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Github,
  Google,
  Instagram,
  Facebook,
  Linkedin,
} from "react-bootstrap-icons";
import Image from "next/image";
import Signature from "@/public/signature";

const Footer: React.FC = () => {
  return (
    <section id="id-footer">
      <hr className="border-t border-gray-500 w-full my-0" />
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full h-[50vh] bg-black text-center p- ">
        <div className="flex flex-col lg:items-center items-end justify-center lg:pl-0 pl-[17rem] flex-[0.3] h-full">
          <p className="text-white monumentExtended text-4xl lg:text-6xl">
            <a href="#id-home">JIH</a>
          </p>
        </div>
        <div className="flex flex-col flex-[0.6] w-80 items-center justify-center h-full">
          <div>
            <h1 className="text-white text-sm lg:text-lg text-center eudoxus-regular mb-4">
              Find Me At :
            </h1>
          </div>
          <div className="flex w-96 justify-between mt-4 space-x-4 px-5">
            <motion.a
              href="https://web.facebook.com/zaqaulfikri.aziz/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#1877F2" }}
              className="text-white transition-colors duration-[5ms]"
            >
              <Facebook size={35} />
            </motion.a>
            <motion.a
              href="https://github.com/Jih15"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#fff" }}
              className="text-white transition-colors duration-[5ms]"
            >
              <Github size={35} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/zaqaul_f/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#C13584" }}
              className="text-white transition-colors duration-[5ms]"
            >
              <Instagram size={35} />
            </motion.a>
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=zaqazaqaul@gmail.com.com&su=Hello&body=I%20would%20like%20to%20get%20in%20touch"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#DB4437" }}
              className="text-white transition-colors duration-[5ms]"
            >
              <Google size={35} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/zaqaul-fikri-aziz-4b0a81270/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#0077B5" }}
              className="text-white transition-colors duration-[5ms]"
            >
              <Linkedin size={35} />
            </motion.a>
          </div>
        </div>
        <div className="relative flex-[0.3]">
          <Image
            alt=""
            src={Signature.zaqSignature}
            width={200}
            className="w-60 h-auto mt-5 lg:mt-0 lg:w-full lg:h-full object-cover no-drag"
            onContextMenu={(e) => e.preventDefault()}
          />
          <div className="absolute inset-0 bg-black opacity-0 pointer-events-none"></div>{" "}
        </div>
      </div>
      <hr className="border-t border-gray-500 w-full my-0" />
      <div className="flex bg-black py-5 pl-5 lg:px-32 w-full">
        <motion.a
        href="#" 
        whileHover={{color: "#35C6D2"}}
        className="text-slate-300 text-xs underline"
        >
          2024 Zaqaul. All Right reserved
        </motion.a>
      </div>
    </section>
  );
};

export default Footer;
