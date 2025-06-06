'use client'

import { motion } from 'framer-motion'

const clients = [
  { name: 'Bryn Guest House', logo: 'BG' },
  { name: 'Gadlys Cottages', logo: 'GC' },
  { name: 'Snowdonia Stays', logo: 'SS' },
  { name: 'Coastal Retreats', logo: 'CR' },
  { name: 'Welsh Valleys B&B', logo: 'WV' },
  { name: 'Mountain View Lodge', logo: 'MV' },
]

export default function SocialProof() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 font-medium mb-8">Trusted by North Wales favourites</p>
          
          {/* Client Logos Marquee */}
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full font-spline font-bold text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
              >
                {client.logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}