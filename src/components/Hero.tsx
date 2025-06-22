import React from 'react'
import { ArrowRight, Heart, Users, Clock } from 'lucide-react'

interface HeroProps {
  onClientLogin: () => void
  onConsultantLogin: () => void
}

const Hero: React.FC<HeroProps> = ({ onClientLogin, onConsultantLogin }) => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Better Sleep for
                <span className="text-[#358597]"> Asian Families</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional sleep consultation designed with cultural understanding. 
                Supporting mothers and children in achieving healthy sleep patterns 
                that work for Asian family dynamics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onClientLogin}
                className="bg-[#358597] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#2a6b7a] transition-colors flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Find Your Sleep Consultant</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={onConsultantLogin}
                className="border-2 border-[#358597] text-[#358597] px-8 py-4 rounded-xl font-semibold hover:bg-[#358597]/10 transition-colors"
              >
                Consultant Login
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="bg-[#F4A896]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-8 w-8 text-[#F4A896]" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Families Helped</div>
              </div>
              <div className="text-center">
                <div className="bg-[#358597]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-[#358597]" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Expert Consultants</div>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Mother and baby sleeping peacefully"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-[#358597] to-[#2a6b7a] rounded-2xl opacity-20 z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-[#F4A896] to-[#e89680] rounded-2xl opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
