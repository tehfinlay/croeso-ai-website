'use client'

import { motion } from 'framer-motion'
import { Clock, Globe, MessageSquare } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: 'Slow Sites',
    description: 'Your website takes forever to load, losing bookings to faster competitors.'
  },
  {
    icon: Globe,
    title: 'No Welsh Option',
    description: 'Missing out on local customers who prefer Welsh-language service.'
  },
  {
    icon: MessageSquare,
    title: 'Manual Replies',
    description: 'Spending hours answering the same questions instead of growing your business.'
  }
]

export default function Problem() {
  return (
    <section className="section-padding bg-red-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-spline font-bold text-gray-900 mb-6">
            Still losing <span className="gradient-text">15%</span> to OTA fees?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most tourism businesses struggle with outdated websites that don't convert visitors into direct bookings.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <problem.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-spline font-semibold text-gray-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}