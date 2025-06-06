'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Bot } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Cymraeg', href: '/cy' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-spline font-bold group">
          <span className="inline-block">
            <Bot className="w-8 h-8 text-primary transition-transform duration-300 group-hover:animate-navdance" />
          </span>
          <span className="gradient-text">CroesoAI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative group font-medium transition-colors duration-200 ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  aria-hidden="true"
                />
              </Link>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
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
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
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
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="container-custom py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-primary font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
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

      <style jsx global>{`
        @keyframes navdance {
          0%, 100% { transform: rotate(0deg) scale(1); }
          20% { transform: rotate(-6deg) scale(1.03); }
          40% { transform: rotate(6deg) scale(1.06); }
          60% { transform: rotate(-4deg) scale(1.02); }
          80% { transform: rotate(4deg) scale(1.01); }
        }
        .animate-navdance {
          animation: navdance 0.6s cubic-bezier(0.4,0,0.2,1) 1;
        }
      `}</style>
    </header>
  )
}