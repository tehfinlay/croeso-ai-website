'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Bot } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import DarkModeToggle, { MobileDarkModeToggle } from '@/components/DarkModeToggle'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Cymraeg', href: '/cy' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-spline font-bold">
          <Bot className="w-8 h-8 text-primary" />
          <span className="gradient-text">CroesoAI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <DarkModeToggle />
          
          {/* CTA Button */}
          <Link href="/contact" className="btn-primary">
            Book Free AI Audit
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300"
          >
            <div className="container-custom py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Dark Mode Toggle */}
              <MobileDarkModeToggle />
              
              <Link
                href="/contact"
                className="btn-primary w-full justify-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Free AI Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}