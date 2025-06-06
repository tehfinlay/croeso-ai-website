'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Only run on client side
    if (typeof window !== 'undefined') {
      // Check if user has a saved preference
      const savedTheme = localStorage.getItem('darkMode')
      if (savedTheme) {
        const isDark = savedTheme === 'true'
        setIsDarkMode(isDark)
        updateDOM(isDark)
      } else {
        // Check system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setIsDarkMode(systemPrefersDark)
        updateDOM(systemPrefersDark)
      }
    }
  }, [])

  const updateDOM = (isDark: boolean) => {
    if (typeof window !== 'undefined') {
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  const toggleDarkMode = () => {
    if (typeof window !== 'undefined') {
      const newDarkMode = !isDarkMode
      setIsDarkMode(newDarkMode)
      localStorage.setItem('darkMode', newDarkMode.toString())
      updateDOM(newDarkMode)
    }
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 w-9 h-9"></div>
    )
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  )
}

export function MobileDarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('darkMode')
      if (savedTheme) {
        setIsDarkMode(savedTheme === 'true')
      } else {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setIsDarkMode(systemPrefersDark)
      }
    }
  }, [])

  const toggleDarkMode = () => {
    if (typeof window !== 'undefined') {
      const newDarkMode = !isDarkMode
      setIsDarkMode(newDarkMode)
      localStorage.setItem('darkMode', newDarkMode.toString())
      
      if (newDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200"
    >
      {isDarkMode ? (
        <>
          <Sun className="w-5 h-5" />
          Light Mode
        </>
      ) : (
        <>
          <Moon className="w-5 h-5" />
          Dark Mode
        </>
      )}
    </button>
  )
} 