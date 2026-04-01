import TechLogo from './image.png';

export default function CanvasTools() {
  return (
    <img 
      src={TechLogo} 
      alt="Description" 
      className="w-96 h-auto object-contain" 
      // This tells the browser to prioritize high-quality rendering
      loading="eager" 
    />
  );
}