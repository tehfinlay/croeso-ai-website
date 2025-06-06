'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Play, MessageCircle, Pause, Send, Bot } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const conversations = [
  {
    id: 1,
    customer: { text: "Do you have availability for next weekend?", type: "customer" },
    ai: { text: "Yes! We have rooms available. Would you prefer Friday or Saturday night?", type: "ai", lang: "en" }
  },
  {
    id: 2,
    customer: { text: "Oes gennych chi le i deulu?", type: "customer" },
    ai: { text: "Oes! Mae gennym ystafelloedd teulu ar gael. Faint o bobl?", type: "ai", lang: "cy" }
  },
  {
    id: 3,
    customer: { text: "What activities are nearby?", type: "customer" },
    ai: { text: "Great question! We have hiking trails, Snowdonia National Park, and local castles within 20 minutes.", type: "ai", lang: "en" }
  },
  {
    id: 4,
    customer: { text: "Beth yw'r pris am noson?", type: "customer" },
    ai: { text: "Mae ein hystafelloedd yn costio £120-180 y noson. Hoffech chi weld ein pecynnau arbennig?", type: "ai", lang: "cy" }
  },
  {
    id: 5,
    customer: { text: "Can I book online?", type: "customer" },
    ai: { text: "Absolutely! I can help you book right now. Just let me know your preferred dates.", type: "ai", lang: "en" }
  },
  {
    id: 6,
    customer: { text: "Ydych chi'n derbyn cŵn?", type: "customer" },
    ai: { text: "Ydyn! Rydym yn groesawgar i gŵn. Mae tâl bach o £15 y noson.", type: "ai", lang: "cy" }
  }
]

export default function LiveDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentConversation, setCurrentConversation] = useState(0)
  const [showCustomer, setShowCustomer] = useState(false)
  const [showAI, setShowAI] = useState(false)
  const [messageHistory, setMessageHistory] = useState<Array<{text: string, type: string, lang?: string, id: number}>>([])
  const MAX_MESSAGES = 6 // Keep only last 6 messages (3 conversations)
  const messageListRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isPlaying) return

    const conversationCycle = async () => {
      // Reset states
      setShowCustomer(false)
      setShowAI(false)
      
      // Add customer message to history
      setTimeout(() => {
        setShowCustomer(true)
        setMessageHistory(prev => {
          const newMessage = {
            ...conversations[currentConversation].customer,
            id: Date.now()
          }
          const newHistory = [...prev, newMessage]
          return newHistory.slice(-MAX_MESSAGES)
        })
      }, 500)
      
      // Add AI response to history
      setTimeout(() => {
        setShowAI(true)
        setMessageHistory(prev => {
          const newMessage = {
            ...conversations[currentConversation].ai,
            id: Date.now()
          }
          const newHistory = [...prev, newMessage]
          return newHistory.slice(-MAX_MESSAGES)
        })
      }, 2000)
      
      // Move to next conversation
      setTimeout(() => {
        setCurrentConversation((prev) => (prev + 1) % conversations.length)
      }, 4000)
    }

    conversationCycle()
    const interval = setInterval(conversationCycle, 5000)

    return () => clearInterval(interval)
  }, [isPlaying, currentConversation])

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight
    }
  }, [messageHistory])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      setCurrentConversation(0)
      setShowCustomer(false)
      setShowAI(false)
      setMessageHistory([])
    }
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-spline font-bold text-gray-900 mb-6">
            See the <span className="gradient-text">AI Concierge</span> in action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our bilingual assistant handles real customer enquiries in both English and Welsh.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-[22px] p-8 shadow-xl">
            {/* Play Button - More Prominent */}
            <div className="flex justify-center mb-8">
              <div className="flex flex-col items-center">
                <button 
                  onClick={handlePlayPause}
                  className="group relative w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-white" />
                  ) : (
                    <Play className="w-5 h-5 text-white ml-1" />
                  )}
                </button>
                <span className="mt-4 text-sm font-medium text-gray-600 group-hover:text-primary transition-colors">
                  {isPlaying ? 'Pause Demo' : 'Start Demo'}
                </span>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden flex flex-col h-[500px] border border-gray-200">
              {/* Chat Header */}
              <div className="bg-white p-4 flex items-center gap-3 border-b border-gray-200">
                <Bot className="w-6 h-6 text-primary" />
                <div className="flex-1">
                  <h3 className="text-gray-900 font-medium">AI Concierge</h3>
                  <p className="text-sm text-gray-500">Online • Bilingual Support</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div
                ref={messageListRef}
                className="flex-1 p-4 flex flex-col gap-4 overflow-y-scroll hide-scrollbar"
                style={{ minHeight: 0, maxHeight: 340 }}
              >
                <AnimatePresence mode="popLayout">
                  {messageHistory.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ 
                        opacity: 0,
                        y: 20,
                        scale: 0.95,
                        transition: { duration: 0.2 }
                      }}
                      transition={{ 
                        duration: 0.4,
                        ease: "easeOut"
                      }}
                      className={`flex ${message.type === 'customer' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl p-4 ${
                          message.type === 'customer'
                            ? 'bg-gradient-to-r from-primary to-secondary text-white'
                            : 'bg-white text-gray-900 shadow-sm border border-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {message.type === 'ai' && (
                            <div className={`w-2 h-2 rounded-full ${message.lang === 'cy' ? 'bg-red-500' : 'bg-green-500'}`}></div>
                          )}
                          <span className="text-sm font-medium opacity-80">
                            {message.type === 'customer' ? 'You' : 'AI Assistant'}
                          </span>
                        </div>
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none"
                    disabled={!isPlaying}
                  />
                  <button
                    className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50"
                    disabled={!isPlaying}
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-4 text-center">
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  English responses
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  Welsh responses
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}