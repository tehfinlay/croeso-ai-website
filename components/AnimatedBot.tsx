'use client'

import { useState, useEffect } from 'react'
import { Bot } from 'lucide-react'

export default function AnimatedBot() {
  const [showBubble, setShowBubble] = useState(false)

  useEffect(() => {
    // Show speech bubble every 5 seconds for 3 seconds
    const interval = setInterval(() => {
      setShowBubble(true)
      setTimeout(() => setShowBubble(false), 3000)
    }, 8000)

    // Show it initially after 2 seconds
    setTimeout(() => {
      setShowBubble(true)
      setTimeout(() => setShowBubble(false), 3000)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      {/* Speech Bubble */}
      <div 
        className={`absolute -top-12 -left-4 bg-white border-2 border-primary rounded-lg px-3 py-1 shadow-lg transform transition-all duration-500 ${
          showBubble 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-75 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="text-primary font-medium text-sm whitespace-nowrap">
          Helo! 👋
        </div>
        {/* Speech bubble tail */}
        <div className="absolute top-full left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary"></div>
        <div className="absolute top-full left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white transform translate-y-[-2px]"></div>
      </div>
      
      {/* Bot Icon with subtle animation */}
      <Bot className={`w-8 h-8 text-primary transition-transform duration-300 ${
        showBubble ? 'animate-bounce' : 'hover:scale-110'
      }`} />
    </div>
  )
} 