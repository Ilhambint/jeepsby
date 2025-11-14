'use client'

import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

const vehicles = [
  {
    id: 1,
    name: 'WRANGLER 4-DOOR',
    subtitle: 'Unlimited Adventure',
    price: 'From Rp 489 Juta',
    image: '/red-jeep-wrangler-4-door.jpg',
    features: ['Trail Rated', '4x4 Systems', 'Off-road Capability']
  },
  {
    id: 2,
    name: 'WRANGLER 2-DOOR',
    subtitle: 'Pure Freedom',
    price: 'From Rp 449 Juta',
    image: '/black-jeep-wrangler-2-door.jpg',
    features: ['Compact Design', 'Agile Handling', 'Removable Top']
  },
  {
    id: 3,
    name: 'GLADIATOR',
    subtitle: 'Premium Power',
    price: 'From Rp 599 Juta',
    image: '/blue-jeep-gladiator-truck.jpg',
    features: ['Pickup Bed', 'Powerful Engine', '4x4 Excellence']
  }
]

export default function VehicleShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            JEEP<span className="text-primary">®</span> LINEUP
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our full range of iconic vehicles built for adventure and performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 bg-secondary overflow-hidden">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {vehicle.name}
                </h3>
                <p className="text-sm text-primary font-semibold mb-4">
                  {vehicle.subtitle}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {vehicle.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and Action */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">
                    {vehicle.price}
                  </span>
                  <button
                    className={`p-2 rounded-full transition-all ${
                      hoveredId === vehicle.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground hover:bg-primary hover:text-primary-foreground'
                    }`}
                    onMouseEnter={() => setHoveredId(vehicle.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>

              <Link href={`/vehicles/${vehicle.id}`}>
                <button className="w-full bg-primary hover:bg-accent text-primary-foreground py-3 font-semibold transition-all duration-200">
                  LEARN MORE
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
