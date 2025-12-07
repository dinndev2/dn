import * as motion from 'motion/react-client'

export default function LoadingSpinner() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-md"
    >
      <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-black rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  )
}

