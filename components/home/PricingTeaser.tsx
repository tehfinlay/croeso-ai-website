'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Launch',
    price: '£1,100',
    monthly: '£99',
    description: 'Perfect for small B&Bs and guesthouses',
    features: [
      '3 pages',
      'Basic AI Concierge',
      'Welsh translation',
      'Mobile responsive',
    ],
    popular: false
  },
  {
    name: 'Growth',
    price: '£2,200',
    monthly: '£350',
    description: 'Ideal for growing tourism businesses',
    features: [
      '10 pages',
      'Smart upsell AI',
      'Review bot',
      '1hr monthly support',
    ],
    popular: true
  },
  {
    name: 'Scale',
    price: '£4,500',
    monthly: '£499',
    description: 'For established tourism operators',
    features: [
      'Unlimited pages',
      'Multi-agent AI',
      'Dedicated success manager',
      '3hrs monthly support',
    ],
    popular: false
  }
]

export default function PricingTeaser() {
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
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pay 50% of build cost only after your first direct booking. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 border-2 ${
                plan.popular ? 'border-primary shadow-2xl scale-105' : 'border-gray-100 shadow-lg'
              } hover:shadow-xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-spline font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-spline font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">upfront</span>
                </div>
                <div className="text-lg text-gray-700">
                  <span className="font-semibold">{plan.monthly}</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/pricing"
                className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-button font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-primary text-white hover:shadow-lg hover:-translate-y-1'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors"
          >
            See full pricing details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}