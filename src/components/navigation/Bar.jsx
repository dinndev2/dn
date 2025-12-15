import { useEffect } from 'react';
import Projects from "../icons/Projects";
import CodeWars from "../icons/CodeWars";
import Github from "../icons/Github";
import LinkedIn from "../icons/LinkedIn";
import { motion } from 'motion/react';
import Plane from "../icons/Plane";
import X from "../icons/X";

export default function Bar({ setIsQuestionOpen }) {
  useEffect(() => {
    const icons = document.querySelectorAll('.icon');
    const dock = document.getElementById('dock');
    const dockWrapper = document.querySelector('.dock-wrapper');
    
    if (!dock) return; // Safety check
    
    const handleMouseMove = (event) => {
      icons.forEach(icon => {
        const rect = icon.getBoundingClientRect()
        const iconCenter = rect.left + rect.width / 2;
        const distance = Math.abs(event.clientX - iconCenter);
        const maxDistance = 150; // how far the effect reaches
        const scale = 1 + Math.max(0, (1 - distance / maxDistance)) * .4;
        icon.style.transform = `scale(${scale})`;
        
      });
    };

    function handleMouseEnter() {
      dockWrapper.style.scale = `1.07`;
    }

    const handleMouseLeave = () => {
      icons.forEach((icon) => (icon.style.transform = "scale(1)"));
    };

    const handleMouseLeaveDock = () => {
      dockWrapper.style.scale = `1`;
    };

    dock.addEventListener('mousemove', handleMouseMove);
    dock.addEventListener("mouseleave", handleMouseLeave);
    dockWrapper.addEventListener("mouseenter", handleMouseEnter);
    dockWrapper.addEventListener("mouseleave", handleMouseLeaveDock);
    // Cleanup: remove event listeners when component unmounts
    return () => {
      dock.removeEventListener('mousemove', handleMouseMove);
      dock.removeEventListener("mouseleave", handleMouseLeave);
      dockWrapper.removeEventListener("mouseenter", handleMouseEnter);
      dockWrapper.removeEventListener("mouseleave", handleMouseLeaveDock);
    };
  }, []);
  return (
    <div className="dock-wrapper">
      <div id="dock" className="flex gap-4 lg:gap-6 relative items-center justify-center" style={{ overflow: 'visible' }}>
        <a className="icon glass-background px-1.5 sm:px-2 rounded-lg py-0.5 sm:py-1 secondary-color fill-current h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 relative group flex items-center justify-center" href="#Inventory">
          <span className="tooltip-bubble absolute bottom-full mb-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs pointer-events-none whitespace-nowrap">
            Projects
          </span>
          <Projects/>
        </a>
        <a className="icon secondary-color fill-current h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 relative group flex items-center justify-center" target="_blank" href="https://www.codewars.com/users/dinndev">
          <span className="tooltip-bubble absolute bottom-full mb-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs pointer-events-none whitespace-nowrap">
            CodeWars
          </span>
          <CodeWars/>
        </a>
        <div className="w-0.5 sm:w-1 rounded-full bg-gray-400 opacity-10 self-stretch"></div>
        <a className="icon secondary-color fill-current h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 relative group flex items-center justify-center" target="_blank" href="https://github.com/dinndev2">
          <span className="tooltip-bubble absolute bottom-full mb-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs pointer-events-none whitespace-nowrap">
            Github
          </span>
          <Github/>
        </a>
        <a className="icon secondary-color fill-current h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 relative group flex items-center justify-center" target="_blank" href="https://www.linkedin.com/in/aladin-penagunda-17020a198/">
          <span className="tooltip-bubble absolute bottom-full mb-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs pointer-events-none whitespace-nowrap">
            LinkedIn
          </span>
          <LinkedIn/>
        </a>
        <a className="icon h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 secondary-color fill-current relative group flex items-center justify-center" target="_blank" href="https://x.com/dinndev2">
          <span className="tooltip-bubble absolute bottom-full mb-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs pointer-events-none whitespace-nowrap">
            X
          </span>
          <X/>
        </a>
        <motion.button 
          onClick={() => setIsQuestionOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group cursor-pointer hover:bg-black/90 active:bg-black transition-all duration-300 flex items-center justify-center rounded-full px-2 py-1.5 bg-black gap-2 shadow-lg hover:shadow-xl z-40 border border-black/10"
        >
          <span className="text-sm sm:text-base font-medium text-white whitespace-nowrap">
            Ask <span className="font-black">Din!</span>
          </span>
          <div className="shrink-0">
            <Plane className="w-4 h-4 sm:w-4 sm:h-4 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
          </div>
        </motion.button>
      </div>
    </div>
  );
}