'use client'

import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

interface VehicleDetailProps {
  params: {
    id: string
  }
}

const colorImageMap: Record<string, string> = {
  'Firecracker Red': '/wrangler-firecracker-red.png',
  'Pearl White': '/wrangler-pearl-white.png',
  'Steel Blue': '/wrangler-steel-blue.png',
  'Olive': '/wrangler-olive-green.png',
  'Forest Green': '/wrangler-forest-green.png',
  'Dark Gray': '/wrangler-steel-gray.png',
  'Black': '/wrangler-jet-black.png',
  'Navy Blue': '/wrangler-steel-blue.png'
}

const vehicleData: Record<string, any> = {
  '1': {
    name: 'WRANGLER 4-DOOR',
    subtitle: 'Unlimited Adventure',
    price: 'From Rp 489 Juta',
    mainImage: '/wrangler-firecracker-red.png',
    description: 'The Jeep Wrangler is one of Indonesia\'s favourite 4x4 vehicles, blending the reliability and durability of the world\'s toughest cars with the comfort, convenience and technology you\'d expect from a market leader.',
    features: [
      {
        title: '80 YEARS OF OPEN-AIR FREEDOM',
        description: 'The Jeep Wrangler offers the Most Ways to Experience Open Air Freedom with an available removable Freedom Top hardtop, an easy-to-lower standard Sunrider soft top, an available Sky One-Touch roof, plus a fold-down windshield and removable doors.',
        buttonText: 'EXPLORE EXTERIOR',
        image: '/red-jeep-wrangler-landscape.jpg'
      },
      {
        title: 'SAFETY AND SECURITY FIRST',
        description: 'When conditions change, Wrangler is always one step ahead with over 75 Standard and Available Safety and Security Features, including Blind Spot Monitoring and Adaptive Cruise Control with Full Stop. The Jeep Wrangler helps keep you and your passengers safe and secure.',
        buttonText: 'EXPLORE SAFETY AND SECURITY',
        image: '/jeep-safety-terrain.jpg'
      },
      {
        title: 'CHALLENGE ACCEPTED',
        description: 'The Jeep Wrangler doesn\'t back down from a challenge, which is why it\'s the Most Capable Wrangler Generation Ever. The Wrangler combines 80 years of revolutionary off-road expertise and innovation with a history of 4x4 capability. Every Jeep Wrangler proudly wears the Trail Rated badge, so you\'re ready to explore places that others wouldn\'t dare.',
        buttonText: 'EXPLORE CAPABILITY',
        image: '/jeep-water-crossing.jpg'
      },
      {
        title: 'CONNECTED AND IN COMMAND',
        description: 'Our Most Technologically Advanced Wrangler Generation Ever offers plenty of available features to help you keep connected and in command, like the Uconnect system featuring Voice Command functionality.',
        buttonText: 'EXPLORE TECHNOLOGY',
        image: '/jeep-interior-tech.jpg'
      },
      {
        title: 'ENJOY THE RIDE',
        description: 'The Jeep Wrangler is a getaway of its own, with an adventure-inspired cabin featuring elevated craftsmanship and comfort-laden conveniences like the available Trail Rail system and the Jeep Utility Grid for cargo storage.',
        buttonText: 'EXPLORE INTERIOR',
        image: '/jeep-interior-ride.jpg'
      }
    ],
    colors: [
      { name: 'Firecracker Red', hex: '#C41E3A' },
      { name: 'Black', hex: '#000000' },
      { name: 'Pearl White', hex: '#F8F8F8' },
      { name: 'Dark Gray', hex: '#3A3A3A' },
      { name: 'Steel Blue', hex: '#4A5568' },
      { name: 'Forest Green', hex: '#2F5233' },
      { name: 'Olive', hex: '#6B8E23' },
      { name: 'Navy Blue', hex: '#001F3F' }
    ],
    gallery: [
      '/red-jeep-wrangler-landscape.jpg',
      '/jeep-safety-terrain.jpg',
      '/jeep-water-crossing.jpg',
      '/jeep-interior-tech.jpg',
      '/jeep-interior-ride.jpg',
      '/red-jeep-wrangler-4-door.jpg'
    ]
  }
}

export default function VehicleDetail({ params }: VehicleDetailProps) {
  const vehicle = vehicleData[params.id] || vehicleData['1']
  const [selectedColor, setSelectedColor] = useState(vehicle.colors[0])
  const [selectedTab, setSelectedTab] = useState('exterior')
  const [expandedGallery, setExpandedGallery] = useState(false)

  const currentVehicleImage = colorImageMap[selectedColor.name] || vehicle.mainImage

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Back Button */}
      <div className="bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
            <ChevronLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen md:h-[600px] bg-black overflow-hidden flex items-center justify-center">
        <img
          src={vehicle.mainImage || "/placeholder.svg"}
          alt={vehicle.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">THE ALL-NEW</h1>
          <h2 className="text-6xl md:text-8xl font-bold mb-6">{vehicle.name.split(' ')[0]}</h2>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto text-balance">
            {vehicle.description}
          </p>
        </div>
      </section>

      {/* Vehicle Selector and Tabs */}
      <section className="bg-white py-8 border-b sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h3 className="text-2xl font-bold">CHOOSE YOUR VEHICLE</h3>
            <div className="flex gap-4">
              <button className={`px-6 py-2 font-semibold transition-all ${selectedTab === 'exterior' ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`} onClick={() => setSelectedTab('exterior')}>
                EXTERIOR
              </button>
              <button className={`px-6 py-2 font-semibold transition-all ${selectedTab === 'highlights' ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`} onClick={() => setSelectedTab('highlights')}>
                HIGHLIGHTS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Color Selection */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Colors */}
            <div className="bg-white p-8 rounded-lg h-fit">
              <h4 className="text-lg font-bold mb-6">COLORS</h4>
              <p className="text-sm text-gray-600 mb-6">{selectedColor.name} Clear-Coat Exterior Paint</p>
              <div className="grid grid-cols-4 gap-3">
                {vehicle.colors.map((color: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className={`w-14 h-14 rounded-full border-4 transition-all duration-200 hover:scale-105 cursor-pointer ${
                      selectedColor.name === color.name ? 'border-black scale-110 shadow-lg' : 'border-gray-300 hover:border-gray-600'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center bg-white rounded-lg p-8">
              <img
                key={currentVehicleImage}
                src={currentVehicleImage || "/placeholder.svg"}
                alt={`${selectedColor.name} ${vehicle.name}`}
                className="w-full h-auto object-contain transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      {vehicle.features.map((feature: any, idx: number) => (
        <section key={idx} className="relative min-h-96 flex items-center bg-cover bg-center" style={{ backgroundImage: `url(${feature.image})` }}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 w-full">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${idx % 2 === 0 ? '' : 'md:text-right'}`}>
              {idx % 2 === 0 ? (
                <>
                  <div className="bg-black/60 p-8 rounded-lg text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-base md:text-lg mb-6 text-gray-100 leading-relaxed">
                      {feature.description}
                    </p>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 font-semibold transition-all">
                      {feature.buttonText} →
                    </button>
                  </div>
                  <div></div>
                </>
              ) : (
                <>
                  <div></div>
                  <div className="bg-black/60 p-8 rounded-lg text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-base md:text-lg mb-6 text-gray-100 leading-relaxed">
                      {feature.description}
                    </p>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 font-semibold transition-all">
                      {feature.buttonText} →
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Gallery Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">GALLERY</h2>
            <p className="text-gray-600">Explore the full range of available features and customization options</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {vehicle.gallery.slice(0, 3).map((image: string, idx: number) => (
              <div key={idx} className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <img src={image || "/placeholder.svg"} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {vehicle.gallery.slice(3).map((image: string, idx: number) => (
              <div key={idx} className="relative h-48 rounded-lg overflow-hidden">
                <img src={image || "/placeholder.svg"} alt={`Gallery ${idx + 4}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 font-semibold transition-all">
              EXPLORE FULL GALLERY →
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Adventure?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a test drive or get a personalized quote for your dream Jeep.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 font-semibold transition-all">
              SCHEDULE TEST DRIVE
            </button>
            <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 font-semibold transition-all">
              GET A QUOTE
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
