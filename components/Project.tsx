import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      const container = section.querySelector(".flex");
      if (container) {
        const containerWidth = container.scrollWidth;
        const viewportWidth = window.innerWidth;

        gsap.set(section, { width: containerWidth });

        gsap.to(container, {
          x: () => -(containerWidth - viewportWidth), 
          ease: "linear",
          scrollTrigger: {
            trigger: section,
            start: "top top", 
            end: () => "+=" + (containerWidth - viewportWidth + 1000), 
            scrub: 1, 
            pin: true, 
            anticipatePin: 1 
          }
        });
        gsap.set(container, { overflowX: 'hidden' });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      id="id-project"
      ref={sectionRef}
      className="relative h-screen bg-cover bg-white p-[4.5rem]"
    >
      <div className="flex w-auto h-[100%] space-x-16">
        <div className="item bg-yellow-100 w-[60rem] h-[100%] flex-shrink-0"></div>
        <div className="item bg-blue-200 w-[60rem] h-[100%] flex-shrink-0"></div>
        <div className="item bg-slate-400 w-[60rem] h-[100%] flex-shrink-0"></div>
        <div className="item bg-red-300 w-[60rem] h-[100%] flex-shrink-0"></div>
        <div className="item bg-green-200 w-[60rem] h-[100%] flex-shrink-0"></div>
      </div>
    </section>
  );
};

export default Project;
