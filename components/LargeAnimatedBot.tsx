'use client'

import { useState, useEffect } from 'react'
import { Bot } from 'lucide-react'

export default function LargeAnimatedBot() {
  const [showBubble, setShowBubble] = useState(false)

  useEffect(() => {
    // Show speech bubble every 6 seconds for 4 seconds
    const interval = setInterval(() => {
      setShowBubble(true)
      setTimeout(() => setShowBubble(false), 4000)
    }, 10000)

    // Show it initially after 3 seconds
    setTimeout(() => {
      setShowBubble(true)
      setTimeout(() => setShowBubble(false), 4000)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      {/* Speech Bubble - positioned for large bot */}
      <div 
        className={`absolute -top-20 -left-8 bg-white/95 backdrop-blur-sm border-2 border-white/50 rounded-2xl px-4 py-3 shadow-xl transform transition-all duration-700 ${
          showBubble 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="text-primary font-semibold text-lg whitespace-nowrap">
          Helo! 👋
        </div>
        <div className="text-primary/70 text-sm">
          Sut mae? How are you?
        </div>
        {/* Speech bubble tail - larger for hero */}
        <div className="absolute top-full left-8 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-white/50"></div>
        <div className="absolute top-full left-8 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-white/95 transform translate-y-[-3px]"></div>
      </div>
      
      {/* Large Bot Icon with enhanced animation */}
      <Bot className={`w-24 h-24 text-white mx-auto mb-4 transition-all duration-500 ${
        showBubble ? 'animate-bounce scale-110' : 'hover:scale-105'
      }`} />
    </div>
  )
} 