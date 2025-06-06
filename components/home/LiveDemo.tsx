'use client'

import { motion } from 'framer-motion'
import { Play, MessageCircle } from 'lucide-react'

export default function LiveDemo() {
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
              {/* Demo Video Placeholder */}
              <div className="aspect-video bg-gray-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <button className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </button>
                
                {/* Floating Chat Elements */}
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
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-4">90-second demo showing real conversations</p>
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