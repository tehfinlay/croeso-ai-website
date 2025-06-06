'use client'

import { motion } from 'framer-motion'
import { Clock, Globe, MessageSquare } from 'lucide-react'
import { useState } from 'react'

const problems = [
  {
    icon: Clock,
    title: 'Slow Sites',
    description: 'Your website takes forever to load, losing bookings to faster competitors.',
    color: '#EF4444', // Tailwind red-500
    bg: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    icon: Globe,
    title: 'No Welsh Option',
    description: 'Missing out on local customers who prefer Welsh-language service.',
    color: '#F59E42', // Tailwind orange-400
    bg: 'bg-orange-100',
    iconColor: 'text-orange-500',
  },
  {
    icon: MessageSquare,
    title: 'Manual Replies',
    description: 'Spending hours answering the same questions instead of growing your business.',
    color: '#3B82F6', // Tailwind blue-500
    bg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  }
]

export default function Problem() {
  // Track mouse position for each box
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

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
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              onMouseMove={e => {
                const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
                setMousePos({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top
                })
                setHoveredIndex(index)
              }}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Reactive border effect */}
              {hoveredIndex === index && (
                <span
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: `
                      radial-gradient(120px circle at ${mousePos.x}px ${mousePos.y}px, ${problem.color} 0%, transparent 70%),
                      radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, ${problem.color}15 0%, transparent 70%)
                    `,
                    borderRadius: '1rem', // exactly matches rounded-2xl
                    border: `1px solid transparent`,
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    zIndex: 1,
                  }}
                  aria-hidden="true"
                />
              )}
              <div className={`w-16 h-16 ${problem.bg} rounded-full flex items-center justify-center mb-6 relative z-10`}>
                <problem.icon className={`w-8 h-8 ${problem.iconColor}`} />
              </div>
              <h3 className="text-xl font-spline font-semibold text-gray-900 mb-4 relative z-10">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}