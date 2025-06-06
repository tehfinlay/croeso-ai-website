'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Bot, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

      <div className="relative container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-spline font-bold text-white mb-6 leading-tight">
              Turn website visitors into bookings—
              <span className="text-yellow-300">diolch</span> to AI.
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Launch a bilingual, lightning-fast site with a Welsh-speaking concierge in just 7 days.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/contact" className="btn-primary text-lg px-10 py-5">
                Book Free AI Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/how-it-works" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                How It Works
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-md">
              {/* Main Bot */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30"
              >
                <Bot className="w-24 h-24 text-white mx-auto mb-4" />
                <div className="text-center text-white">
                  <h3 className="font-spline font-semibold text-lg mb-2">AI Concierge</h3>
                  <p className="text-sm opacity-90">Bilingual • 24/7 • Intelligent</p>
                </div>
              </motion.div>

              {/* Floating Chat Bubbles */}
              <motion.div
                animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-white rounded-2xl p-3 shadow-lg"
              >
                <MessageCircle className="w-8 h-8 text-primary" />
              </motion.div>

              <motion.div
                animate={{ x: [20, -20, 20], y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-secondary rounded-2xl p-3 shadow-lg"
              >
                <MessageCircle className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ x: [-10, 10, -10], y: [15, -15, 15] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -left-8 bg-yellow-300 rounded-2xl p-2 shadow-lg"
              >
                <MessageCircle className="w-6 h-6 text-gray-800" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}