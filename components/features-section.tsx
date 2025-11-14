import { Gauge, Zap, Shield, Compass, Mountain, Fuel } from 'lucide-react'

const features = [
  {
    icon: Mountain,
    title: 'TRAIL RATED®',
    description: 'Proven off-road performance with advanced 4x4 systems'
  },
  {
    icon: Gauge,
    title: '4X4 SYSTEMS',
    description: 'Sophisticated terrain management for any environment'
  },
  {
    icon: Zap,
    title: 'POWERFUL ENGINE',
    description: 'Advanced powertrains delivering premium performance'
  },
  {
    icon: Shield,
    title: 'SAFETY TECH',
    description: 'Modern safety features to protect your adventure'
  },
  {
    icon: Fuel,
    title: 'FUEL EFFICIENT',
    description: 'Optimized engines for better fuel economy'
  },
  {
    icon: Compass,
    title: 'TECHNOLOGY',
    description: 'Latest infotainment and connectivity features'
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            WHY CHOOSE JEEP<span className="text-primary">®</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineered for adventure with cutting-edge technology and unmatched capability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="mb-4 inline-block p-3 bg-primary rounded-lg group-hover:bg-accent transition-all">
                  <IconComponent className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
