'use client'

import { useState } from 'react'
import { Phone, MapPin, Calendar } from 'lucide-react'

export default function CallToActionSection() {
  const [activeTab, setActiveTab] = useState('test-drive')

  const ctaOptions = [
    {
      id: 'test-drive',
      label: 'SCHEDULE TEST DRIVE',
      icon: Calendar,
      description: 'Experience the thrill of driving a Jeep'
    },
    {
      id: 'quote',
      label: 'GET A QUOTE',
      icon: Phone,
      description: 'Get personalized pricing information'
    },
    {
      id: 'dealer',
      label: 'FIND A DEALER',
      icon: MapPin,
      description: 'Locate your nearest Jeep dealer'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            START YOUR ADVENTURE TODAY
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Join thousands of adventure seekers who trust Jeep for their journeys
          </p>
        </div>

        {/* CTA Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ctaOptions.map((option) => {
            const IconComponent = option.icon
            return (
              <button
                key={option.id}
                onClick={() => setActiveTab(option.id)}
                className={`p-8 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  activeTab === option.id
                    ? 'bg-primary text-primary-foreground shadow-2xl'
                    : 'bg-white/10 hover:bg-white/20 text-primary-foreground'
                }`}
              >
                <IconComponent className="mb-4 mx-auto" size={32} />
                <h3 className="font-bold text-lg mb-2">{option.label}</h3>
                <p className="text-sm opacity-90">{option.description}</p>
              </button>
            )
          })}
        </div>

        {/* Form Area */}
        <div className="max-w-2xl mx-auto">
          <form className="bg-white/10 backdrop-blur p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 rounded bg-white/20 text-primary-foreground placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 rounded bg-white/20 text-primary-foreground placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded bg-white/20 text-primary-foreground placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary mb-4"
            />
            <button
              type="submit"
              className="w-full bg-primary hover:bg-accent text-primary-foreground font-bold py-3 rounded transition-all duration-200 hover:shadow-lg"
            >
              GET IN TOUCH
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
