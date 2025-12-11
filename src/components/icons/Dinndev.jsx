export default function Dinndev({ setIsHome }) {
  return (
    <span onClick={() => setIsHome(true)} className="h-8 sm:h-10 md:h-12 w-auto cursor-pointer font-black text-3xl text-black" >
      Din!
    </span>
  )
}