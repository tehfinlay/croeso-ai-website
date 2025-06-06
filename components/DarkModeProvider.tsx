'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface DarkModeContextType {
  isDarkMode: boolean
  toggleDarkMode: () => void
  mounted: boolean
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

export function DarkModeProvider({ children }: { children: ReactNode }) {
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

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, mounted }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export function useDarkMode() {
  const context = useContext(DarkModeContext)
  
  // Provide a default value for SSR
  if (context === undefined) {
    return {
      isDarkMode: false,
      toggleDarkMode: () => {},
      mounted: false
    }
  }
  
  return context
} 