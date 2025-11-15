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
    
    if (!dock) return; // Safety check
    
    const handleMouseMove = (event) => {
      icons.forEach(icon => {
        const rect = icon.getBoundingClientRect()
        const iconCenter = rect.left + rect.width / 2;
        const distance = Math.abs(event.clientX - iconCenter);
        const maxDistance = 120; // how far the effect reaches
        const scale = 1 + Math.max(0, (1 - distance / maxDistance)) * .5;
        icon.style.transform = `scale(${scale})`;
      });
    };

    const handleMouseLeave = () => {
      icons.forEach((icon) => (icon.style.transform = "scale(1)"));
    };

    dock.addEventListener('mousemove', handleMouseMove);
    dock.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup: remove event listeners when component unmounts
    return () => {
      dock.removeEventListener('mousemove', handleMouseMove);
      dock.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div className="dock-wrapper">
      <div id="dock" className="flex gap-10 relative items-center justify-center">
        <a className="icon secondary-color fill-current h-8 w-8" href="/">
          <Projects/>
        </a>
        <a className="icon secondary-color fill-current h-8 w-8" target="_blank" href="https://www.codewars.com/users/dinndev2">
          <CodeWars/>
        </a>
        <div className="w-1 rounded-full bg-gray-200 self-stretch"></div>
        <a className="icon secondary-color fill-current h-8 w-8" target="_blank" href="https://github.com/dinndev2">
          <Github/>
        </a>
        <a className="icon secondary-color fill-current h-8 w-8" target="_blank" href="https://www.linkedin.com/in/aladin-penagunda-17020a198/">
          <LinkedIn/>
        </a>
        <a className="icon h-8 w-8 secondary-color fill-current" target="_blank" href="https://x.com/dinndev2">
          <X/>
        </a>
      </div>
    </div>
  );
}