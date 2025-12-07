export default function Dinndev({ setIsHome }) {
  return (
    <img onClick={() => setIsHome(true)} src="/dinndev.svg" alt="dinndev" className="h-8 sm:h-10 md:h-12 w-auto cursor-pointer" />
  )
}