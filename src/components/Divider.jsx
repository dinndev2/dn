import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'


export default function Divider() {
  const [isVisible, setIsVisible] = useState(false)
  const dividerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (dividerRef.current) {
      observer.observe(dividerRef.current)
    }

    return () => {
      if (dividerRef.current) {
        observer.unobserve(dividerRef.current)
      }
    }
  }, [])

  return (
    <div ref={dividerRef} className="flex flex-col items-center justify-center gap-10 my-10">
      <h2 className={`text-black text-xl md:text-5xl font-bold flex items-center justify-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={isVisible ? {animationDelay: '0.1s'} : {}}>
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
      <p className={`text-gray-600 font-bold text-center w-96 text-xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={isVisible ? {animationDelay: '0.2s'} : {}}>
        Projects in the wild. Collaborating with talented people who inspired my growth.
      </p>
    </div>
  )
}