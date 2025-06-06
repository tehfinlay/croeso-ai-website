'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Animation variants for staggered items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Adjust stagger time between items
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

// Dummy blog post data
const blogPosts = [
  {
    id: 1,
    title: "Boosting Bookings with AI Chatbots",
    excerpt: "Discover how integrating an AI-powered chatbot on your tourism website can dramatically improve customer engagement and increase direct bookings.",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8bd1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixtid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "October 26, 2023",
    slug: "boosting-bookings-with-ai-chatbots",
  },
  {
    id: 2,
    title: "Bilingual Websites: Reaching a Wider Audience in Wales",
    excerpt: "Learn why offering your website content in both English and Welsh is crucial for connecting with the local community and attracting more visitors.",
    image: "https://images.unsplash.com/photo-1533107862482-bc607e2c52e4?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixtid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "November 10, 2023",
    slug: "bilingual-websites-reaching-wider-audience",
  },
  {
    id: 3,
    title: "The Future of Tourism Marketing: AI and Personalization",
    excerpt: "Explore how artificial intelligence is revolutionizing personalized marketing strategies in the tourism sector, creating unique experiences for potential visitors.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcb43bbbf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixtid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "November 25, 2023",
    slug: "future-of-tourism-marketing-ai",
  },
  {
    id: 4,
    title: "SEO Tips for Welsh Tourism Businesses",
    excerpt: "Improve your online visibility with these essential SEO strategies tailored for tourism businesses operating in Wales.",
    image: "https://plus.unsplash.com/premium_photo-1677109606204-599e670e7cfb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixtid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "December 5, 2023",
    slug: "seo-tips-welsh-tourism",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 bg-gray-50">
      <section className="section-padding">
        <div className="container-custom">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-spline font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Our Blog
          </motion.h1>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Link href={`/blog/${post.slug}`} passHref>
                  <div className="block w-full bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
                    <div className="relative w-full h-48 overflow-hidden">
                       <Image
                        src={post.image}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="text-xl font-spline font-semibold text-gray-900 mb-3">
                        {post.title}
                      </h2>
                      <p className="text-gray-700 mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      <p className="text-sm text-gray-500 mt-auto">
                        {post.date}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
} 