import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import ClientDashboard from './components/ClientDashboard'
import ConsultantDashboard from './components/ConsultantDashboard'
import ConsultantMatcher from './components/ConsultantMatcher'
import Footer from './components/Footer'

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'client' | 'consultant' | 'matcher'>('home')
  const [matchedConsultant, setMatchedConsultant] = useState<any>(null)

  const handleConsultantMatch = (consultant: any) => {
    setMatchedConsultant(consultant)
    setCurrentView('client')
  }

  const renderContent = () => {
    switch (currentView) {
      case 'client':
        return <ClientDashboard onBack={() => setCurrentView('home')} matchedConsultant={matchedConsultant} />
      case 'consultant':
        return <ConsultantDashboard onBack={() => setCurrentView('home')} />
      case 'matcher':
        return <ConsultantMatcher onBack={() => setCurrentView('home')} onComplete={handleConsultantMatch} />
      default:
        return (
          <>
            <Hero 
              onClientLogin={() => setCurrentView('matcher')} 
              onConsultantLogin={() => setCurrentView('consultant')} 
            />
            <Services />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4A896]/20 via-white to-[#358597]/20">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      {renderContent()}
      {currentView === 'home' && <Footer />}
    </div>
  )
}

export default App
