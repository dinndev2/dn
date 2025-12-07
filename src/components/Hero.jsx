import Gem from './icons/Gem'
import Line from './icons/Line'
export default function Hero () {
  return (
    <div id="hero" className="h-screen flex flex-col items-center justify-center gap-4">
      <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-900 font-bold text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>Hello, I'm Aladin <br/> Penagunda </h3>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>A - software engineer</h1>
      <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
        <Line />
      </div>
      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap animate-fade-in-up" style={{animationDelay: '0.4s'}}>  
        <p className="text-sm w-96 sm:text-base md:text-lg text-gray-600 text-center">
          A developer who loves learning, building, and refining products into clean, thoughtful experiences while constantly improving my craft.
        </p>
      </div>
      <a href="mailto:dinndev@gmail.com" className="bg-black hover:bg-gray-800 trnasition-all text-white px-4 py-2 rounded-full animate-fade-in-up" style={{animationDelay: '0.5s'}}>Contact me</a>
    </div>
  )
}