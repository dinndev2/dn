import Gem from './icons/Gem'
import Line from './icons/Line'
export default function Hero () {
  return (
    <div id="hero" className="h-screen flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full max-w-md sm:max-w-lg md:max-w-xl px-4">
      <h3 className="text-base sm:text-lg md:text-xl text-gray-900 font-semibold text-center">Hello, I'm Aladin <br/> Penagunda </h3>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold text-center">A - software engineer</h1>
      <Line />
      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">  
        <Gem />
        <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
          I love games and learning new stuff.
        </p>
        <Gem />
      </div>
      <a href="mailto:dinndev@gmail.com" className="bg-primary-color text-white px-4 py-2 rounded-full">Contact me</a>
    </div>
  )
}