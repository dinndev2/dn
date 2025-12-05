import { AnimatePresence, motion } from 'motion/react'


export default function Divider() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 my-10">
      <h2 className="text-black text-center text-xl sm:2xl md:text-5xl font-bold flex items-center justify-center ">
        Spec of my art_ 
        <motion.div
          animate={{height: [20, 5, 5, 5, 5, 20, 20, 20]}}
          transition={{ 
            duration: 1,
            repeat: Infinity,
          }}
          className="text-sm w-5 bg-black">
        </motion.div>
      </h2>
      <p className="text-gray-500 font-bold text-center w-96 text-xl">
        Projects in the wild. Collaborating with talented people who inspired my growth.
      </p>
    </div>
  )
}