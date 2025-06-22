import React from 'react'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  currentView: 'home' | 'client' | 'consultant'
  onNavigate: (view: 'home' | 'client' | 'consultant') => void
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img 
              src="https://cdn.chatandbuild.com/users/685614b7a1e54d1c73c04a53/2024-02-dreemer-logo-1750482596510-292509147.jpeg" 
              alt="Dreemer Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-gray-900">Dreemer</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${
                currentView === 'home' ? 'text-[#358597]' : 'text-gray-700 hover:text-[#358597]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('client')}
              className={`text-sm font-medium transition-colors ${
                currentView === 'client' ? 'text-[#358597]' : 'text-gray-700 hover:text-[#358597]'
              }`}
            >
              Client Portal
            </button>
            <button
              onClick={() => onNavigate('consultant')}
              className={`text-sm font-medium transition-colors ${
                currentView === 'consultant' ? 'text-[#358597]' : 'text-gray-700 hover:text-[#358597]'
              }`}
            >
              Consultant Portal
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#358597]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  onNavigate('home')
                  setIsMenuOpen(false)
                }}
                className="text-left text-gray-700 hover:text-[#358597]"
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigate('client')
                  setIsMenuOpen(false)
                }}
                className="text-left text-gray-700 hover:text-[#358597]"
              >
                Client Portal
              </button>
              <button
                onClick={() => {
                  onNavigate('consultant')
                  setIsMenuOpen(false)
                }}
                className="text-left text-gray-700 hover:text-[#358597]"
              >
                Consultant Portal
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
