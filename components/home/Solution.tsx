'use client'

import { motion } from 'framer-motion'
import { Palette, Bot, Heart } from 'lucide-react'

const solutions = [
  {
    icon: Palette,
    title: 'Design',
    description: 'Beautiful, fast-loading websites that work perfectly on all devices.',
    step: '01'
  },
  {
    icon: Bot,
    title: 'AI Concierge',
    description: 'Smart Welsh-speaking assistant that answers questions 24/7.',
    step: '02'
  },
  {
    icon: Heart,
    title: 'Ongoing Care',
    description: 'Continuous optimization and support to maximize your bookings.',
    step: '03'
  }
]

export default function Solution() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-spline font-bold text-gray-900 mb-6">
            We <span className="gradient-text">build</span> • <span className="gradient-text">translate</span> • <span className="gradient-text">automate</span>.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our complete solution transforms your online presence into a booking-generating machine.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-gradient-primary p-1 rounded-3xl">
                <div className="bg-white rounded-[22px] p-8 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-6xl font-spline font-bold text-gray-100 group-hover:text-primary/20 transition-colors duration-300">
                      {solution.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-spline font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}