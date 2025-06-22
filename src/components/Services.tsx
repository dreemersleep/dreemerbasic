import React from 'react'
import { Baby, Users, Clock, MessageCircle, Calendar, BookOpen } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: Baby,
      title: "Infant Sleep Training",
      description: "Gentle, culturally-sensitive approaches to help your baby develop healthy sleep habits while respecting family traditions.",
      features: ["0-12 months guidance", "Cultural adaptation", "Gentle methods"]
    },
    {
      icon: Users,
      title: "Family Sleep Coaching",
      description: "Comprehensive support for the whole family, understanding multi-generational living and Asian family dynamics.",
      features: ["Whole family approach", "Grandparent guidance", "Sibling coordination"]
    },
    {
      icon: MessageCircle,
      title: "24/7 Support Chat",
      description: "Round-the-clock support in multiple Asian languages with consultants who understand your cultural context.",
      features: ["Multilingual support", "Instant messaging", "Emergency guidance"]
    },
    {
      icon: Calendar,
      title: "Personalized Plans",
      description: "Custom sleep schedules that work with Asian meal times, family routines, and cultural practices.",
      features: ["Custom schedules", "Cultural integration", "Flexible timing"]
    },
    {
      icon: Clock,
      title: "Progress Tracking",
      description: "Detailed monitoring of sleep patterns with insights tailored to Asian family lifestyles and expectations.",
      features: ["Sleep analytics", "Progress reports", "Goal tracking"]
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Comprehensive library of sleep education materials translated and adapted for Asian families.",
      features: ["Multilingual content", "Cultural guides", "Video tutorials"]
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Sleep Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our services are designed specifically for Asian families, combining proven sleep science 
            with cultural understanding and sensitivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#358597]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-[#358597]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-[#358597] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#358597] to-[#2a6b7a] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Family's Sleep?</h3>
          <p className="text-[#358597]/20 mb-6 max-w-2xl mx-auto">
            Join hundreds of Asian families who have found better sleep and happier days with our culturally-aware approach.
          </p>
          <button className="bg-white text-[#358597] px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
