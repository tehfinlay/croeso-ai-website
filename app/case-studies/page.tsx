'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, TrendingUp } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'Bryn Guest House',
    location: 'Betws-y-Coed',
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
    problem: 'Slow mobile site, no Welsh option, losing bookings to competitors',
    solution: 'New responsive site with bilingual AI concierge',
    results: {
      enquiries: '+47%',
      revenue: '£2,743',
      period: 'first month'
    },
    metrics: [
      { label: 'Page Load Time', before: '8.2s', after: '1.1s' },
      { label: 'Mobile Score', before: '32/100', after: '94/100' },
      { label: 'Conversion Rate', before: '1.2%', after: '3.8%' }
    ],
    testimonial: "CroesoAI transformed our online presence. The Welsh-speaking AI has been a game-changer with local customers.",
    author: "Sian Williams, Owner"
  },
  {
    id: 2,
    title: 'Gadlys Coastal Cottages',
    location: 'Pembrokeshire',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
    problem: 'Wall-of-text pages, confusing navigation, low enquiry rates',
    solution: 'Masonry grid layout with AI quote bot integration',
    results: {
      enquiries: '2.3×',
      revenue: '£4,110',
      period: 'monthly direct revenue'
    },
    metrics: [
      { label: 'Time on Site', before: '1m 23s', after: '4m 17s' },
      { label: 'Bounce Rate', before: '67%', after: '28%' },
      { label: 'Quote Requests', before: '12/mo', after: '41/mo' }
    ],
    testimonial: "The new website is stunning and the AI handles 80% of our enquiries automatically. More time for hosting!",
    author: "David Evans, Manager"
  },
  {
    id: 3,
    title: 'Snowdonia Mountain Lodge',
    location: 'Llanberis',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
    problem: 'Outdated booking system, manual processes, staff overwhelmed',
    solution: 'Automated booking workflows with smart upselling AI',
    results: {
      enquiries: '+67%',
      revenue: '£6,890',
      period: 'additional monthly revenue'
    },
    metrics: [
      { label: 'Booking Completion', before: '23%', after: '71%' },
      { label: 'Average Booking Value', before: '£340', after: '£485' },
      { label: 'Staff Time Saved', before: '0hrs', after: '15hrs/week' }
    ],
    testimonial: "Incredible results! The AI upsells activities and local experiences, increasing our revenue per booking significantly.",
    author: "Rhys Thomas, Director"
  },
  {
    id: 4,
    title: 'Anglesey Retreat',
    location: 'Beaumaris',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
    problem: 'Poor search rankings, invisible to local customers, seasonal struggles',
    solution: 'SEO-optimized bilingual site with local content strategy',
    results: {
      enquiries: '+89%',
      revenue: '£3,420',
      period: 'off-season bookings'
    },
    metrics: [
      { label: 'Google Rankings', before: 'Page 3+', after: 'Top 5' },
      { label: 'Organic Traffic', before: '240/mo', after: '1,340/mo' },
      { label: 'Local Enquiries', before: '8%', after: '34%' }
    ],
    testimonial: "We're now visible to Welsh-speaking customers and our off-season bookings have transformed our business model.",
    author: "Mari Jones, Owner"
  },
  {
    id: 5,
    title: 'Conwy Castle View B&B',
    location: 'Conwy',
    image: 'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=800',
    problem: 'Negative reviews impacting bookings, no review management system',
    solution: 'Automated review management with AI response system',
    results: {
      enquiries: '+52%',
      revenue: '£2,180',
      period: 'recovery from review issues'
    },
    metrics: [
      { label: 'Review Score', before: '3.2/5', after: '4.7/5' },
      { label: 'Response Time', before: '3-5 days', after: 'Within 2hrs' },
      { label: 'Positive Reviews', before: '52%', after: '91%' }
    ],
    testimonial: "The AI review management saved our reputation. We now respond to every review professionally in both languages.",
    author: "John Roberts, Manager"
  },
  {
    id: 6,
    title: 'Cardigan Bay Glamping',
    location: 'Cardigan',
    image: 'https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&w=800',
    problem: 'Complex booking process, high cart abandonment, lost revenue',
    solution: 'Streamlined booking with AI assistance and Welsh support',
    results: {
      enquiries: '+73%',
      revenue: '£5,230',
      period: 'recovered lost bookings'
    },
    metrics: [
      { label: 'Cart Abandonment', before: '78%', after: '31%' },
      { label: 'Booking Completion', before: '22%', after: '69%' },
      { label: 'Customer Satisfaction', before: '3.4/5', after: '4.8/5' }
    ],
    testimonial: "The simplified booking process and Welsh AI support has made us accessible to a whole new customer base.",
    author: "Emma Davies, Founder"
  }
]

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null)

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
              Real <span className="text-yellow-300">bookings</span>, not vanity metrics
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              See how Welsh tourism businesses have transformed their online presence and dramatically increased direct bookings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="masonry">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="masonry-item cursor-pointer group"
                onClick={() => setSelectedCase(study)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>{study.location}</span>
                    </div>
                    <h3 className="text-xl font-spline font-bold mb-3">
                      {study.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-white/70">Enquiries</span>
                        <div className="font-bold text-lg">{study.results.enquiries}</div>
                      </div>
                      <div>
                        <span className="text-white/70">Revenue</span>
                        <div className="font-bold text-lg">{study.results.revenue}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-spline font-bold mb-6">
              Your turn?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join these successful Welsh tourism businesses and start generating more direct bookings today.
            </p>
            <a href="/contact" className="btn-secondary bg-white text-primary hover:bg-gray-100">
              Book Free AI Audit
            </a>
          </motion.div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{selectedCase.location}</span>
                  </div>
                  
                  <h2 className="text-3xl font-spline font-bold text-gray-900 mb-6">
                    {selectedCase.title}
                  </h2>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                      <h3 className="font-spline font-semibold text-gray-900 mb-3">Problem</h3>
                      <p className="text-gray-600">{selectedCase.problem}</p>
                    </div>
                    <div>
                      <h3 className="font-spline font-semibold text-gray-900 mb-3">Solution</h3>
                      <p className="text-gray-600">{selectedCase.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-spline font-semibold text-gray-900 mb-3">Results</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="font-semibold text-green-600">{selectedCase.results.enquiries}</span>
                          <span className="text-gray-600">enquiries</span>
                        </div>
                        <div className="text-2xl font-spline font-bold text-gray-900">
                          {selectedCase.results.revenue}
                        </div>
                        <div className="text-sm text-gray-600">{selectedCase.results.period}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <h3 className="font-spline font-semibold text-gray-900 mb-4">Key Metrics</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {selectedCase.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
                          <div className="text-lg font-semibold text-red-600">{metric.before}</div>
                          <div className="text-xs text-gray-500 mb-1">↓</div>
                          <div className="text-lg font-semibold text-green-600">{metric.after}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-2xl">
                    <p className="text-lg text-gray-700 italic mb-4">
                      "{selectedCase.testimonial}"
                    </p>
                    <cite className="text-primary font-medium">
                      — {selectedCase.author}
                    </cite>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}