import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import VehicleShowcase from '@/components/vehicle-showcase'
import FeaturesSection from '@/components/features-section'
import CallToActionSection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <VehicleShowcase />
      <FeaturesSection />
      <CallToActionSection />
      <Footer />
    </main>
  )
}
