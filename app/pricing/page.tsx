'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight, Shield } from 'lucide-react'

const plans = [
  {
    name: 'Launch',
    upfront: 1100,
    monthly: 99,
    description: 'Perfect for small B&Bs and guesthouses starting their digital journey',
    features: [
      '3 professionally designed pages',
      'Basic AI Concierge (FAQ handling)',
      'Professional Welsh translation',
      'Mobile-responsive design',
      'Basic SEO optimization',
      'Contact form integration',
      'Google Analytics setup',
      'SSL certificate included'
    ],
    additionalFeatures: [
      'Review bot: ❌',
      'Dedicated success hours: 0/month',
      'Priority support: ❌'
    ],
    popular: false,
    color: 'gray'
  },
  {
    name: 'Growth',
    upfront: 2200,
    monthly: 350,
    description: 'Ideal for growing tourism businesses ready to scale',
    features: [
      '10 custom pages',
      'Smart upsell AI concierge',
      'Professional Welsh translation',
      'Advanced mobile optimization',
      'Complete SEO package',
      'Booking system integration',
      'Review bot automation',
      '1 hour monthly success support'
    ],
    additionalFeatures: [
      'Review bot: ✅',
      'Dedicated success hours: 1/month',
      'Priority support: ✅'
    ],
    popular: true,
    color: 'primary'
  },
  {
    name: 'Scale',
    upfront: 4500,
    monthly: 499,
    description: 'For established tourism operators seeking maximum growth',
    features: [
      'Unlimited pages',
      'Multi-agent AI system (pricing + itinerary)',
      'Professional Welsh translation',
      'Advanced performance optimization',
      'Complete marketing integration',
      'Custom booking workflows',
      'Advanced review management',
      '3 hours monthly success support'
    ],
    additionalFeatures: [
      'Review bot: ✅ Advanced',
      'Dedicated success hours: 3/month',
      'Priority support: ✅ 24/7'
    ],
    popular: false,
    color: 'secondary'
  }
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  const getPrice = (monthly: number) => {
    if (isYearly) {
      return Math.floor(monthly * 10) // Save 2 months
    }
    return monthly
  }

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
              Simple, <span className="text-yellow-300">transparent</span> pricing
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Pay 50% of build cost only after your first direct booking. No hidden fees, no long-term contracts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-4 bg-gray-100 p-1 rounded-button">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-3 rounded-button font-medium transition-all duration-300 ${
                  !isYearly ? 'bg-white text-primary shadow-md' : 'text-gray-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-3 rounded-button font-medium transition-all duration-300 ${
                  isYearly ? 'bg-white text-primary shadow-md' : 'text-gray-600'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                  Save 2 months
                </span>
              </button>
            </div>
          </motion.div>

          {/* Plans */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 border-2 ${
                  plan.popular 
                    ? 'border-primary shadow-2xl scale-105' 
                    : 'border-gray-100 shadow-lg'
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
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-spline font-bold text-gray-900 mb-1">
                      £{plan.upfront.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">upfront (50% after first booking)</div>
                  </div>
                  
                  <div className="text-2xl font-spline font-bold text-gray-900">
                    £{getPrice(plan.monthly)}
                    <span className="text-lg text-gray-600 font-normal">
                      /{isYearly ? 'month (billed yearly)' : 'month'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-100 pt-6 mb-8">
                  {plan.additionalFeatures.map((feature) => (
                    <div key={feature} className="text-sm text-gray-600 mb-2">
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
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

          {/* Risk Reversal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-green-50 rounded-3xl p-8 text-center"
          >
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-spline font-bold text-gray-900 mb-4">
              Risk-Free Guarantee
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We're so confident in our ability to generate direct bookings that you only pay 50% of the build cost 
              after you receive your first direct booking through your new website. This shows our commitment to your success 
              and significantly reduces your financial risk.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}