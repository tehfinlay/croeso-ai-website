'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function Results() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [revenue, setRevenue] = useState(0)
  
  useEffect(() => {
    if (isInView) {
      const target = 87412
      const duration = 2000
      const steps = 60
      const stepValue = target / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += stepValue
        if (current >= target) {
          setRevenue(target)
          clearInterval(timer)
        } else {
          setRevenue(Math.floor(current))
        }
      }, duration / steps)
      
      return () => clearInterval(timer)
    }
  }, [isInView])

  return (
    <section className="section-padding bg-gradient-primary text-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-spline font-semibold mb-4">
            Direct revenue added for clients since 2024
          </h2>
          <div className="text-5xl md:text-7xl font-spline font-bold mb-6">
            £{revenue.toLocaleString()}
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our AI-powered websites have helped Welsh tourism businesses dramatically increase their direct bookings and reduce dependency on expensive OTA platforms.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-spline font-bold mb-2">47%</div>
              <div className="text-white/80">Average increase in direct enquiries</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl font-spline font-bold mb-2">2.3x</div>
              <div className="text-white/80">Improvement in conversion rates</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl font-spline font-bold mb-2">7 days</div>
              <div className="text-white/80">Average time to launch</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}