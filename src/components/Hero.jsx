export default function Hero () {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full max-w-md sm:max-w-lg md:max-w-xl px-4">
      <h3 className="text-base sm:text-lg md:text-xl text-gray-900 font-semibold text-center">Hello, I'm Aladin <br/> Penagunda </h3>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold text-center">A - software engineer</h1>
      <img src="/public/line.svg" alt="hero" className="w-full max-w-xs sm:max-w-sm md:max-w-md" />
      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">  
        <img src="/public/gem.svg" alt="gem" className="w-6 h-6 sm:w-12 sm:h-12 md:w-20 md:h-20" />
        <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
          I love games and learning new stuff.
        </p>
        <img src="/public/gem.svg" alt="gem" className="w-6 h-6 sm:w-12 sm:h-12 md:w-20 md:h-20" />
      </div>
    </div>
  )
}