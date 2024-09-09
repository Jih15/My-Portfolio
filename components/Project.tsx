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
        // Menghitung lebar total konten
        const containerWidth = container.scrollWidth;
        const viewportWidth = window.innerWidth;

        // Set lebar section sesuai dengan lebar total konten
        gsap.set(section, { width: containerWidth });

        gsap.to(container, {
          x: () => -(containerWidth - viewportWidth), // Geser konten horizontal dari kiri ke kanan
          ease: "linear",
          scrollTrigger: {
            trigger: section,
            start: "top top", // Mulai animasi saat bagian atas section berada di bagian atas viewport
            end: () => "+=" + (containerWidth - viewportWidth + 1000), // Durasi scroll horizontal
            scrub: 1, // Sinkronisasi animasi dengan scroll
            pin: true, // Menjepit section selama animasi
            anticipatePin: 1 // Mengantisipasi pinning untuk kelancaran animasi
          }
        });

        // Hapus whitespace di kanan jika ada
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
