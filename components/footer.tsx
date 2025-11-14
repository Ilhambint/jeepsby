import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

export default function Footer() {
  const footerSections = [
    {
      title: 'VEHICLES',
      links: ['Wrangler 4-Door', 'Wrangler 2-Door', 'Gladiator', 'Specifications']
    },
    {
      title: 'SHOPPING TOOLS',
      links: ['Build & Price', 'Financing', 'Trade-In Value', 'Inventory Search']
    },
    {
      title: 'SUPPORT',
      links: ['Find a Dealer', 'Schedule Service', 'Warranty', 'FAQ']
    },
    {
      title: 'COMPANY',
      links: ['About Us', 'Press', 'Careers', 'Contact Us']
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Youtube, href: '#' },
    { icon: Twitter, href: '#' }
  ]

  return (
    <footer className="bg-secondary text-primary-foreground py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-2xl font-bold mb-2">JEEP</p>
            <p className="text-sm text-gray-300">© 2025 Jeep Indonesia. All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => {
              const IconComponent = social.icon
              return (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 bg-white/10 hover:bg-primary rounded-full transition-all duration-300 hover:scale-110"
                >
                  <IconComponent size={20} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Legal */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-gray-300">
          <p>
            <a href="#" className="hover:text-primary">Privacy Policy</a> • 
            <a href="#" className="hover:text-primary ml-3">Terms of Service</a> • 
            <a href="#" className="hover:text-primary ml-3">Cookie Settings</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
