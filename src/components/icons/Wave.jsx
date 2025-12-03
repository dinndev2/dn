import { AnimatePresence, motion } from 'motion/react'


export default function Wave({ show }) {
  return (
    <AnimatePresence>
      {show && (
      <motion.div 
        initial={{ y: 100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        exit={{ y: 100, opacity: 0 }} 
        transition={{ duration: 0.1, ease: "easeOut" }} 
        className='absolute bottom-0 right-0 w-full sm:w-auto'
      >
        <svg 
          className="text-black w-full sm:w-[340px] h-auto" 
          viewBox="0 0 340 244" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none"
          preserveAspectRatio="xMaxYMax meet"
        >
          <path fill="#000" stroke="#000" d="M199.84 19.59C218.202-76.703-22.632 221.496 2.314 243.5H339.5V105.441S181.479 115.882 199.84 19.59Z"/>
        </svg>
        <div className='absolute bottom-0 right-0 flex flex-col gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 items-end justify-center'>  
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold z-10">Try the demo</h2>
          <p className="text-gray-300 sm:text-gray-400 text-xs sm:text-sm text-right z-10 max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">Prototype demo created to illustrate key workflow steps. Shows connected pages from worker role to company role.</p>
        </div>
      </motion.div> 
    )}
    </AnimatePresence>
  )
}

