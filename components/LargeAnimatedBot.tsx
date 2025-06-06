'use client'

import { useState, useEffect } from 'react'
import { Bot } from 'lucide-react'

const tips = [
  { main: "Helo! 👋", sub: "Sut mae? How are you?" },
  { main: "Croeso! 🏴󠁧󠁢󠁷󠁬󠁳󠁿", sub: "Welcome to Wales!" },
  { main: "24/7 Support 🌙", sub: "I'm always here to help" },
  { main: "Bilingual AI 🗣️", sub: "Welsh & English speaking" },
  { main: "Book instantly 📅", sub: "Skip the phone calls!" },
  { main: "Local insider 🏔️", sub: "North Wales expert tips" },
  { main: "Quick responses ⚡", sub: "No waiting around" },
  { main: "Diolch! 💜", sub: "Thank you for visiting" }
]

export default function LargeAnimatedBot() {
  const [currentTipIndex, setCurrentTipIndex] = useState(0)

  useEffect(() => {
    // Cycle through tips every 4 seconds
    const interval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % tips.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const currentTip = tips[currentTipIndex]

  return (
    <div className="relative">
      {/* Speech Bubble - always visible, cycling through tips */}
      <div 
        className="absolute -top-20 -left-8 bg-white/95 backdrop-blur-sm border-2 border-white/50 rounded-2xl px-4 py-3 shadow-xl transform transition-all duration-500"
      >
        <div className="text-primary font-semibold text-lg whitespace-nowrap">
          {currentTip.main}
        </div>
        <div className="text-primary/70 text-sm">
          {currentTip.sub}
        </div>
        {/* Speech bubble tail */}
        <div className="absolute top-full left-8 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-white/50"></div>
        <div className="absolute top-full left-8 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-white/95 transform translate-y-[-3px]"></div>
      </div>
      
      {/* Large Bot Icon with continuous bounce */}
      <Bot className="w-24 h-24 text-white mx-auto mb-4 animate-bounce hover:scale-105 transition-transform duration-300" />
    </div>
  )
} 