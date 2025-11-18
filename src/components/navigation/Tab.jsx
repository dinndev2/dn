export default function Tab() {
  return (
    <div className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 flex gap-4 sm:gap-8 md:gap-10 items-center justify-center w-48 sm:w-56 md:w-64 max-w-2xl px-4 py-2 sm:py-4 z-50">
      <a className="text-xs sm:text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors duration-300" href="#projects">Projects</a>
      <img src="/public/dinndev.svg" alt="dinndev" className="h-8 sm:h-10 md:h-12 w-auto" />
      <a href="mailto:dinndev@gmail.com" className="text-xs sm:text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors duration-300">Contact</a>
    </div>
  );
}