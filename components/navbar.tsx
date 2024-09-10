"use client";

import React, { useState, useEffect } from "react";
import {
  HomeIcon,
  UserIcon,
  LightningBoltIcon,
  BriefcaseIcon,
  MailIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [activePosition, setActivePosition] = useState(0);
  const [activeWidth, setActiveWidth] = useState(0);
  const [isBottomOfPage, setIsBottomOfPage] = useState(false); // State to track bottom of the page

  const navItems = [
    { name: "Home", href: "#id-home", icon: <HomeIcon className="h-6 w-6" /> },
    { name: "About", href: "#id-about", icon: <UserIcon className="h-6 w-6" /> },
    { name: "Skills", href: "#id-skill", icon: <LightningBoltIcon className="h-6 w-6" /> },
    { name: "Project", href: "#id-project", icon: <BriefcaseIcon className="h-6 w-6" /> },
    { name: "Contact", href: "#id-contact", icon: <MailIcon className="h-6 w-6" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "Home";
      const sections = [
        { name: "Home", id: "id-home" },
        { name: "About", id: "id-about" },
        { name: "Skills", id: "id-skill" },
        { name: "Project", id: "id-project" },
        { name: "Contact", id: "id-contact" },
      ];

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = sections[i].name;
            break;
          }
        }
      }

      setActiveItem(currentSection);

      // Check if the user has reached the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setIsBottomOfPage(true);
      } else {
        setIsBottomOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const index = navItems.findIndex((item) => item.name === activeItem);
    if (index !== -1) {
      const navElement = document.querySelectorAll("nav ul li")[index] as HTMLElement;
      setActivePosition(navElement?.offsetLeft || 0);
      setActiveWidth(navElement?.offsetWidth || 0);
    }
  }, [activeItem]);

  const handleNavClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <nav
      className={`fixed flex w-[24rem] h-[4rem] lg:w-[30rem] lg:h-[4.5rem] justify-center bg-[#103134] rounded-full lg:top-[88vh] top-[91vh] left-1/2 transform -translate-x-1/2 z-[9999] overflow-hidden shadow-[0_8px_18px_rgba(0,0,0,0.3)] transition-all duration-500 ${
        isBottomOfPage ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="absolute top-1/2 transform -translate-y-1/2 bg-[#1d6167] h-[45px] rounded-full transition-all duration-300"
        style={{ left: `${activePosition}px`, width: `${activeWidth}px` }}
      />
      <ul className="flex justify-around items-center w-full px-[3%] relative text-white">
        {navItems.map((item) => (
          <li key={item.name} className="relative flex-1 text-center z-[1]">
            <a
              href={item.href}
              className={`flex items-center justify-center text-white font-[300] text-[0.8rem] lg:text-[16px]  px-4 py-2 rounded-full transition-all duration-300 ${
                activeItem === item.name ? "font-semibold" : ""
              }`}
              onClick={() => handleNavClick(item.name)}
            >
              {activeItem === item.name ? item.name : item.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
