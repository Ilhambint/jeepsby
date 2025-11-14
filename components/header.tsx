'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-secondary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold tracking-wider">JEEP</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {['VEHICLES', 'SHOPPING', 'CAPABILITIES', 'SERVICE', 'ABOUT'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium hover:text-accent transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-primary hover:bg-accent text-primary-foreground px-6 py-2 rounded font-semibold transition-all duration-200 hover:shadow-lg">
              FIND DEALER
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            {['VEHICLES', 'SHOPPING', 'CAPABILITIES', 'SERVICE', 'ABOUT'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-primary hover:bg-accent text-primary-foreground px-6 py-2 rounded font-semibold w-full transition-all">
              FIND DEALER
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
