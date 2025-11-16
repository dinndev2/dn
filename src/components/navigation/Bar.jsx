import { useEffect } from 'react';
import Projects from "../icons/Projects";
import CodeWars from "../icons/CodeWars";
import Github from "../icons/Github";
import LinkedIn from "../icons/LinkedIn";
import X from "../icons/X";

export default function Bar() {
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
      dockWrapper.style.scale = `1`;
    };

    dock.addEventListener('mousemove', handleMouseMove);
    dock.addEventListener("mouseleave", handleMouseLeave);
    dockWrapper.addEventListener("mouseenter", handleMouseEnter);

    // Cleanup: remove event listeners when component unmounts
    return () => {
      dock.removeEventListener('mousemove', handleMouseMove);
      dock.removeEventListener("mouseleave", handleMouseLeave);
      dockWrapper.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);
  return (
    <div className="dock-wrapper">
      <div id="dock" className="flex gap-10 relative items-center justify-center" style={{ overflow: 'visible' }}>
        <a className="icon glass-background px-2 rounded-lg py-1 secondary-color fill-current h-10 w-10 relative group flex items-center justify-center" href="#">
          <span className="tooltip-bubble absolute bottom-full mb-2 px-3 py-1.5 rounded-lg text-xs pointer-events-none whitespace-nowrap">
            Projects
          </span>
          <Projects/>
        </a>
        <a className="icon secondary-color fill-current h-8 w-8 relative group flex items-center justify-center" target="_blank" href="https://www.codewars.com/users/dinndev2">
          <span className="tooltip-bubble absolute bottom-full mb-2 px-3 py-1.5 rounded-lg text-xs pointer-events-none whitespace-nowrap">
            CodeWars
          </span>
          <CodeWars/>
        </a>
        <div className="w-1 rounded-full bg-gray-50 opacity-10 self-stretch"></div>
        <a className="icon secondary-color fill-current h-8 w-8 relative group flex items-center justify-center" target="_blank" href="https://github.com/dinndev2">
          <span className="tooltip-bubble absolute bottom-full mb-2 px-3 py-1.5 rounded-lg text-xs pointer-events-none whitespace-nowrap">
            Github
          </span>
          <Github/>
        </a>
        <a className="icon secondary-color fill-current h-8 w-8 relative group flex items-center justify-center" target="_blank" href="https://www.linkedin.com/in/aladin-penagunda-17020a198/">
          <span className="tooltip-bubble absolute bottom-full mb-2 px-3 py-1.5 rounded-lg text-xs pointer-events-none whitespace-nowrap">
            LinkedIn
          </span>
          <LinkedIn/>
        </a>
        <a className="icon h-8 w-8 secondary-color fill-current relative group flex items-center justify-center" target="_blank" href="https://x.com/dinndev2">
          <span className="tooltip-bubble absolute bottom-full mb-2 px-3 py-1.5 rounded-lg text-xs pointer-events-none whitespace-nowrap">
            X
          </span>
          <X/>
        </a>
      </div>
    </div>
  );
}