'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Play, MessageCircle, Pause } from 'lucide-react'
import { useState, useEffect } from 'react'

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

  useEffect(() => {
    if (!isPlaying) return

    const conversationCycle = async () => {
      // Reset states
      setShowCustomer(false)
      setShowAI(false)
      
      // Wait a moment, then show customer message
      setTimeout(() => setShowCustomer(true), 500)
      
      // Wait, then show AI response
      setTimeout(() => setShowAI(true), 2000)
      
      // Wait, then move to next conversation
      setTimeout(() => {
        setCurrentConversation((prev) => (prev + 1) % conversations.length)
      }, 4000)
    }

    conversationCycle()
    const interval = setInterval(conversationCycle, 5000)

    return () => clearInterval(interval)
  }, [isPlaying, currentConversation])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      setCurrentConversation(0)
      setShowCustomer(false)
      setShowAI(false)
    }
  }

  const currentConv = conversations[currentConversation]

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
          <div className="relative bg-gradient-primary p-1 rounded-3xl">
            <div className="bg-white rounded-[22px] p-8">
              {/* Interactive Demo */}
              <div className="aspect-video bg-gray-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                
                {/* Play/Pause Button */}
                <button 
                  onClick={handlePlayPause}
                  className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-primary" />
                  ) : (
                    <Play className="w-8 h-8 text-primary ml-1" />
                  )}
                </button>
                
                {/* Animated Chat Messages */}
                <AnimatePresence mode="wait">
                  {isPlaying && showCustomer && (
                    <motion.div
                      key={`customer-${currentConversation}`}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="absolute bottom-8 right-8 bg-primary rounded-2xl p-4 shadow-lg max-w-xs"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <MessageCircle className="w-5 h-5 text-white" />
                        <span className="font-medium text-sm text-white">Customer</span>
                      </div>
                      <p className="text-sm text-white/90">{currentConv.customer.text}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  {isPlaying && showAI && (
                    <motion.div
                      key={`ai-${currentConversation}`}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -20 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute top-8 left-8 bg-white rounded-2xl p-4 shadow-lg max-w-xs"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <MessageCircle className="w-5 h-5 text-primary" />
                        <span className="font-medium text-sm">AI Assistant</span>
                        <div className={`w-2 h-2 rounded-full ${currentConv.ai.lang === 'cy' ? 'bg-red-500' : 'bg-green-500'}`}></div>
                      </div>
                      <p className="text-sm text-gray-600">{currentConv.ai.text}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Default static messages when not playing */}
                {!isPlaying && (
                  <>
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-8 left-8 bg-white rounded-2xl p-4 shadow-lg max-w-xs"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <MessageCircle className="w-5 h-5 text-primary" />
                        <span className="font-medium text-sm">AI Assistant</span>
                      </div>
                      <p className="text-sm text-gray-600">Shwmae! How can I help you today?</p>
                    </motion.div>

                    <motion.div
                      animate={{ y: [10, -10, 10] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-8 right-8 bg-primary rounded-2xl p-4 shadow-lg max-w-xs"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <MessageCircle className="w-5 h-5 text-white" />
                        <span className="font-medium text-sm text-white">Customer</span>
                      </div>
                      <p className="text-sm text-white/90">Do you have availability for next weekend?</p>
                    </motion.div>
                  </>
                )}
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-4">
                  {isPlaying ? 'Live conversation demo' : 'Click play to see real conversations'}
                </p>
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}