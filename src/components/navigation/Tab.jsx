import Dinndev from '../icons/Dinndev'

export default function Tab({ setIsHome }) {
  return (
    <div style={{animationDelay: '0.1s'}} className="fixed top-0 bg-white/80 backdrop-blur-md w-screen left-1/2 -translate-x-1/2 flex gap-4 sm:gap-6 md:gap-10 items-center justify-center px-4 py-2 sm:py-4 z-50">
      <a onClick={() => setIsHome(true)} href="#Inventory" className="text-gray-600 font-bold hover:text-gray-950 transition-colors animate-fade-in-up"> Projects </a>
      <Dinndev setIsHome={setIsHome} />
      <a href="mailto:dinndev@gmail.com" className="text-gray-600 font-bold hover:text-gray-950 transition-colors animate-fade-in-up"> Contact</a>
    </div>
  );
}