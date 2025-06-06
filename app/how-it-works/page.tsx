'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Video, Palette, Bot, Rocket, BarChart3, ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '01',
    day: 'Day 0-1',
    title: 'Free Audit',
    icon: Video,
    description: 'We film a 3-minute mobile audit of your current website and provide you with a detailed score plus improvement proposal.',
    features: [
      'Mobile performance analysis',
      'Conversion rate assessment',
      'Competitor comparison',
      'Personalized recommendations'
    ]
  },
  {
    step: '02',
    day: 'Day 2-10',
    title: 'Build & Translate',
    icon: Palette,
    description: 'We create wireframes in Figma, build with Tailwind + Next.js, and provide professional Welsh translation with native speaker proof.',
    features: [
      'Professional design wireframes',
      'Lightning-fast development',
      'Native Welsh translation',
      'Mobile-first responsive design'
    ]
  },
  {
    step: '03',
    day: 'Day 11-15',
    title: 'AI Concierge Setup',
    icon: Bot,
    description: 'We feed your FAQs and attractions data into our OpenAI Assistant, creating a smart bilingual concierge.',
    features: [
      'Custom AI training',
      'Bilingual conversation handling',
      'Local attraction database',
      'Smart booking assistance'
    ]
  },
  {
    step: '04',
    day: 'Day 16-21',
    title: 'Launch & Prove',
    icon: Rocket,
    description: 'Your site goes live with full monitoring. You only pay 50% of the build fee after your first direct booking.',
    features: [
      'Soft launch with monitoring',
      'Performance optimization',
      'First booking guarantee',
      'Risk-free payment model'
    ]
  },
  {
    step: '05',
    day: 'Ongoing',
    title: 'Optimize & Grow',
    icon: BarChart3,
    description: 'Quarterly CRO improvements, review bot management, and speed optimization to maximize your bookings.',
    features: [
      'Quarterly optimization',
      'Review management',
      'Performance monitoring',
      'Conversion rate improvements'
    ]
  }
]

export default function HowItWorks() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-spline font-bold mb-6">
              From audit to live in <span className="text-yellow-300">21 days</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Here's our proven playbook for transforming your tourism website into a booking-generating machine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl font-spline font-bold text-gray-100">
                      {step.step}
                    </span>
                    <div>
                      <div className="text-sm font-medium text-primary mb-1">
                        {step.day}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-spline font-bold text-gray-900">
                        {step.title}
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    <div className="w-full aspect-square bg-gradient-primary rounded-3xl flex items-center justify-center">
                      <step.icon className="w-24 h-24 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-red-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-spline font-bold mb-6">
              Ready to see your audit?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Get your free 3-minute mobile audit and see exactly how we can improve your website's performance.
            </p>
            <Link href="/contact" className="btn-primary bg-primary text-white hover:bg-gradient-to-r from-primary to-secondary hover:text-white">
              Book Free AI Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}