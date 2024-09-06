"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import icons from "@/public/icons";
import framework from "@/public/framework";

const skillsData = [
  {
    name: "Dart",
    fname: "Flutter",
    image: icons.dart,
    framework: framework.flutter,
    description: "Deskripsi Dart...",
    rate: "88%",
    color: "bg-blue-400",
    notHoverColor : "bg-dart"
  },
  {
    name: "PHP",
    fname: "Laravel",
    image: icons.php,
    framework: framework.laravel,
    description: "Deskripsi PHP...",
    rate: "75%",
    color: "bg-red-500",
    notHoverColor : "bg-php"
  },
  {
    name: "TypeScript",
    fname: "Next Js",
    image: icons.ts,
    framework: framework.next,
    description: "Deskripsi TypeScript...",
    rate: "75%",
    color: "bg-gray-700",
    notHoverColor : "bg-ts"
  },
  {
    name: "Java",
    fname: "Apache Netbeans",
    image: icons.java,
    framework: framework.netbeans,
    description: "Deskripsi Java...",
    rate: "65%",
    color: "bg-blue-300",
    notHoverColor : "bg-java"
  },
  {
    name: "Figma",
    fname: "Figma",
    image: icons.figma,
    framework: framework.ffigma,
    description: "Deskripsi Figma...",
    rate: "90%",
    color: "bg-black",
    notHoverColor : "bg-figma"
  },
];

const getHeight = (index: number) => {
  const heights = ["h-5/6", "h-2/3", "h-3/4", "h-5/6", "h-full"];
  return heights[index % heights.length];
};

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ x: -5, rotate: "-90deg" });
    } else {
      controls.start({ x: -5, rotate: "-90deg" });
    }
  }, [isInView, controls]);

  return (
    <section
      id="id-skill"
      className="flex w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/img/skillbanner.jpg)",
      }}
    >
      <div className="relative flex-[0.3] h-full overflow-hidden z-0 flex items-center justify-center">
        <motion.p
          className="text-[15em] text-white kenyan-coffe absolute whitespace-nowrap"
          initial={{ x: "-100vw", rotate: "-90deg" }}
          animate={controls}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          SKILLS
        </motion.p>
      </div>

      <div className="flex flex-[0.7] h-full justify-around items-start mr-12">
        {skillsData.map((skill, index) => {
          return (
            <motion.div
              key={index}
              className={`relative ${skill.notHoverColor} shadow-lg flex items-center justify-start cursor-pointer mr-2 overflow-hidden ${getHeight(
                index
              )} ${activeSkill === skill.name ? "flex-[2]" : "flex-1"}`}
              onHoverStart={() => setActiveSkill(skill.name)}
              onHoverEnd={() => setActiveSkill(null)}
              animate={{
                flex: activeSkill === skill.name ? 2 : 1,
                opacity: 1,
                y: 0,
              }}
              initial={{
                opacity: 0,
                y: -500,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  className={`w-20 h-20 transition-all duration-150 ${
                    activeSkill === skill.name ? "scale-125" : "scale-100"
                  }`}
                />
              </div>
              {activeSkill === skill.name && (
                <motion.div
                  className={`absolute bg-white inset-0 flex flex-col items-center justify-center text-center p-0`}
                  initial={{ opacity: 0,}}
                  animate={{ opacity: 1,}}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    staggerChildren: 0.2,
                  }}
                >
                  <div className="flex flex-col items-center w-full">
                    {/* Kolom 1: Framework */}
                    <motion.div
                      className="mb-4 px-8"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image src={skill.framework} alt="" />
                    </motion.div>

                    {/* Kolom 2: Progress Bar */}
                    <motion.div
                      className="w-full mt-4"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative pt-1">
                        <div
                          className="relative flex-1 flex-grow bg-gray-200 h-3.5"
                          style={{ width: "100%" }}
                        >
                          <div
                            className={`absolute top-0 left-0 h-3.5 flex items-center pl-2 text-white text-xs ${skill.color}`}
                            style={{ width: skill.rate }}
                          >
                            <span className="text-xs eudoxus-md-5 pl-3">
                              {skill.rate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Kolom 3: Name dan Deskripsi */}
                    <motion.div
                      className="mt-4 px-9"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-xl font-bold">{skill.fname}</h3>
                      <div className=" w-72 h-auto p-5 rounded-xl">
                        <p className="text-left text-xs generalSans-regular">Proin feugiat varius condimentum. Nullam convallis augue nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut faucibus diam sed porttitor dignissim. In sed diam est. Donec cursus posuere sapien, vulputate blandit sapien. Pellentesque ultricies, nibh in tristique pharetra, nibh enim ultricies lacus, ac vehicula elit magna vitae metus. Aliquam scelerisque consectetur molestie.</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
