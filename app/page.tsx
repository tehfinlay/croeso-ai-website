import Hero from '@/components/home/Hero'
import SocialProof from '@/components/home/SocialProof'
import Problem from '@/components/home/Problem'
import Solution from '@/components/home/Solution'
import LiveDemo from '@/components/home/LiveDemo'
import Results from '@/components/home/Results'
import PricingTeaser from '@/components/home/PricingTeaser'
import FAQ from '@/components/home/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <LiveDemo />
      <Results />
      <PricingTeaser />
      <FAQ />
    </>
  )
}