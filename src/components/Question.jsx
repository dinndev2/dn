import { nanoid } from 'nanoid'
import {useState, useEffect, useRef} from 'react' 
import axios from 'axios'
import { AnimatePresence, motion } from 'motion/react'
import Plane from './icons/Plane'

export default function Question ({ isQuestionOpen, setIsQuestionOpen }) {
  const [question, setQuestion] = useState("")
  const [isWakingUp, setIsWakingUp] = useState(false)
  const url = import.meta.env.VITE_API_URL
  const [answer, setAnswer] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const questionRef = useRef(null)

  // Handle click outside to close
  useEffect(() => {
    if (!isWakingUp) {
      wakeRender()
    }
    const handleClickOutside = (event) => {
      if (isQuestionOpen && questionRef.current && !questionRef.current.contains(event.target)) {
        // Check if click is not on the button that opens the question (in the dock)
        const dockButton = event.target.closest('.dock-wrapper button')
        if (!dockButton) {
          setIsQuestionOpen(false)
        }
      }
    }

    if (isQuestionOpen) {
      // Use setTimeout to avoid immediate closure when opening
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside)
      }, 100)

      return () => {
        clearTimeout(timeoutId)
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isQuestionOpen, setIsQuestionOpen])

  const wakeRender = () => {
    axios.get(`${url}`).then(res => {
      console.log('din is now waking up....')
      setIsWakingUp(true)
    }).catch(err => {
      console.log(err)
      setIsWakingUp(false)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!question.trim() || isLoading) return
    
    setIsLoading(true)
    setAnswer("")
    
    axios.post(`${url}/questions/ask`, {question})
    .then(res => {
      console.log(res.data)
      setAnswer(res.data.answer)
      setQuestion("")
    })
    .catch(err => {
      setAnswer(err.response?.data?.message || "Sorry, something went wrong. Please try again.")
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  const clickQuickQuestion = (q) => {
    setQuestion(q)
    setIsLoading(true)
    setAnswer("")
    
    axios.post(`${url}/questions/ask`, {question: q})
    .then(res => {
      console.log(res.data)
      setAnswer(res.data.answer)
      setQuestion("")
    })
    .catch(err => {
      setAnswer(err.response?.data?.message || "Sorry, something went wrong. Please try again.")
    })
    .finally(() => {
      setIsLoading(false)
    })
  }
  
  const defaultQuestions = ["Where did Din study computer programming", "What's the skills of din", "give me a brief summary of din's resume"]
  
  return (
      <>
        <motion.div 
          ref={questionRef}
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: 10 }} 
          transition={{ duration: 0.3, ease: "easeOut" }} 
          className="bottom-24 sm:bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 fixed gap-3 w-full md:max-w-2xl bg-white rounded-xl p-4 sm:p-6 shadow-2xl z-50"
        >
          <h3 className="text-lg sm:text-xl text-black flex items-center gap-3"> Ask <span className="text-black font-black">Din!</span>  <span className="text-blue-500 font-semibold text-xs sm:text-sm"> (First question might take a while to respond )</span> </h3>
          <span className="text-gray-500 text-xs sm:text-sm"> I'm created by din to answer your questions about him. I was created with the help of AI and the data from his resume. </span>
          <p className="font-semibold text-xs text-black mt-4 sm:mt-5"> Frequently Asked Questions</p>
          <div className="flex flex-wrap gap-2 mt-2"> 
            {defaultQuestions.map(q => {
              return (
                <div 
                  onClick={() => !isLoading && clickQuickQuestion(q)} 
                  key={nanoid()} 
                  className={`rounded-full transition-all px-3 sm:px-4 text-xs sm:text-sm text-black cursor-pointer py-1 border ${
                    isLoading 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-black hover:text-white hover:border-white'
                  }`}
                > 
                  {q} 
                </div>
              )
            })}
          </div>
          
          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-5 overflow-hidden"
              >
                <div className="border bg-white border-gray-300 rounded-xl p-4 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-black text-sm">Thinking...</p>
                  </div>
                </div>
              </motion.div>
            )}
            
            {answer && !isLoading && (
              <motion.div
                key="answer"
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mt-5 overflow-hidden"
              >
                <div className="border bg-white border-gray-300 rounded-xl p-4">
                  <p className="text-black text-sm sm:text-base">{answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <form className="flex relative items-center justify-center mt-5 gap-2" onSubmit={handleSubmit}>
            <input 
              className="border border-gray-300 rounded-full text-sm sm:text-base px-3 py-2 pr-12 sm:pr-14 text-black w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
              onChange={(e) => setQuestion(e.target.value)} 
              name="question" 
              placeholder="Ask me anything!" 
              type="text"
              value={question}
              disabled={isLoading}
            />
            <button 
              className={`text-white border transition-all duration-300 absolute right-2 cursor-pointer font-bold bg-black rounded-full p-2 h-8 w-8 flex items-center justify-center ${
                isLoading 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-white hover:text-black hover:border-black'
              }`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-4 h-4 p-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Plane />
              )}
            </button>
          </form>
        </motion.div>
    </>
  )
}