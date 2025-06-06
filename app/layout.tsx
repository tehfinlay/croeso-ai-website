import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CroesoAI - AI-Powered Welsh Tourism Websites',
  description: 'Turn website visitors into bookings with bilingual, lightning-fast sites and Welsh-speaking AI concierge. Trusted by North Wales tourism businesses.',
  keywords: 'Welsh tourism, AI concierge, bilingual websites, North Wales, booking optimization',
  authors: [{ name: 'CroesoAI' }],
  openGraph: {
    title: 'CroesoAI - AI-Powered Welsh Tourism Websites',
    description: 'Turn website visitors into bookings—diolch to AI.',
    type: 'website',
    locale: 'en_GB',
    alternateLocale: 'cy_GB',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-inter antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}