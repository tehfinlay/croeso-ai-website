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
    // Cycle through tips every 8 seconds (doubled from 4 seconds)
    const interval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % tips.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const currentTip = tips[currentTipIndex]

  return (
    <div className="relative">
      {/* Speech Bubble - always visible, cycling through tips */}
      <div 
        className="absolute -top-24 -right-16 bg-white/95 border border-gray-200 px-6 py-4 shadow-2xl transform transition-all duration-500 min-w-[220px] max-w-xs"
        style={{ borderRadius: '24px 24px 32px 24px' }}
      >
        <div className="text-primary font-semibold text-lg whitespace-nowrap">
          {currentTip.main}
        </div>
        <div className="text-primary/70 text-sm">
          {currentTip.sub}
        </div>
        {/* Speech bubble tail - classic triangle, bottom right */}
        <div className="absolute top-full right-6 w-0 h-0 border-t-[18px] border-t-white border-x-[14px] border-x-transparent"></div>
      </div>
      {/* Large Bot Icon with interactive animation */}
      <Bot className="w-24 h-24 text-white mx-auto mb-4 animate-bounce hover:scale-105 transition-transform duration-300" />
    </div>
  )
} 