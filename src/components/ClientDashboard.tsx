import React, { useState } from 'react'
import { ArrowLeft, Baby, Calendar, MessageCircle, TrendingUp, Clock, Moon, Sun, Star, Award } from 'lucide-react'

interface ClientDashboardProps {
  onBack: () => void
  matchedConsultant?: any
}

const ClientDashboard: React.FC<ClientDashboardProps> = ({ onBack, matchedConsultant }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'schedule' | 'progress' | 'chat'>('overview')

  const sleepData = [
    { date: 'Mon', nightSleep: 8, napTime: 2, totalSleep: 10 },
    { date: 'Tue', nightSleep: 7.5, napTime: 2.5, totalSleep: 10 },
    { date: 'Wed', nightSleep: 8.5, napTime: 1.5, totalSleep: 10 },
    { date: 'Thu', nightSleep: 8, napTime: 2, totalSleep: 10 },
    { date: 'Fri', nightSleep: 7, napTime: 3, totalSleep: 10 },
    { date: 'Sat', nightSleep: 9, napTime: 1, totalSleep: 10 },
    { date: 'Sun', nightSleep: 8.5, napTime: 1.5, totalSleep: 10 }
  ]

  const upcomingAppointments = [
    { 
      date: '2024-01-15', 
      time: '10:00 AM', 
      consultant: matchedConsultant?.name || 'Dr. Sarah Chen', 
      type: 'Follow-up Session' 
    },
    { 
      date: '2024-01-18', 
      time: '2:00 PM', 
      consultant: matchedConsultant?.name || 'Dr. Sarah Chen', 
      type: 'Progress Review' 
    },
    { 
      date: '2024-01-22', 
      time: '11:00 AM', 
      consultant: matchedConsultant?.name || 'Dr. Sarah Chen', 
      type: 'Sleep Plan Adjustment' 
    }
  ]

  const renderOverview = () => (
    <div className="space-y-6">
      {matchedConsultant && (
        <div className="bg-gradient-to-r from-[#358597] to-[#2a6b7a] rounded-xl p-6 text-white">
          <div className="flex items-center space-x-4">
            <img
              src={matchedConsultant.photo}
              alt={matchedConsultant.name}
              className="w-16 h-16 rounded-full border-3 border-white"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold">Your Sleep Consultant</h3>
              <p className="text-lg">{matchedConsultant.name}</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-300 fill-current" />
                  <span className="text-sm">{matchedConsultant.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="h-4 w-4" />
                  <span className="text-sm">{matchedConsultant.experience}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                {matchedConsultant.matchScore}% Match
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-[#358597]/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Average Sleep</h3>
            <Moon className="h-6 w-6 text-[#358597]" />
          </div>
          <div className="text-3xl font-bold text-[#358597]">9.2 hrs</div>
          <div className="text-sm text-gray-600">+0.5 hrs from last week</div>
        </div>
        
        <div className="bg-green-50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Sleep Quality</h3>
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-3xl font-bold text-green-600">85%</div>
          <div className="text-sm text-gray-600">Excellent improvement</div>
        </div>
        
        <div className="bg-[#F4A896]/20 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Consistency</h3>
            <Clock className="h-6 w-6 text-[#F4A896]" />
          </div>
          <div className="text-3xl font-bold text-[#F4A896]">92%</div>
          <div className="text-sm text-gray-600">Following schedule</div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Sleep Pattern</h3>
        <div className="space-y-4">
          {sleepData.map((day, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 text-sm font-medium text-gray-600">{day.date}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                <div 
                  className="bg-[#358597] h-6 rounded-full flex items-center justify-end pr-2"
                  style={{ width: `${(day.nightSleep / 12) * 100}%` }}
                >
                  <span className="text-xs text-white font-medium">{day.nightSleep}h</span>
                </div>
                <div 
                  className="bg-[#F4A896] h-6 rounded-full absolute top-0 flex items-center justify-end pr-2"
                  style={{ left: `${(day.nightSleep / 12) * 100}%`, width: `${(day.napTime / 12) * 100}%` }}
                >
                  <span className="text-xs text-white font-medium">{day.napTime}h</span>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-900">{day.totalSleep}h total</div>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-6 mt-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-[#358597] rounded"></div>
            <span className="text-gray-600">Night Sleep</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-[#F4A896] rounded"></div>
            <span className="text-gray-600">Nap Time</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h3>
        <div className="space-y-4">
          {upcomingAppointments.map((appointment, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">{appointment.type}</div>
                <div className="text-sm text-gray-600">with {appointment.consultant}</div>
              </div>
              <div className="text-right">
                <div className="font-medium text-gray-900">{appointment.date}</div>
                <div className="text-sm text-gray-600">{appointment.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderSchedule = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Today's Sleep Schedule</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
          <div className="flex items-center space-x-3">
            <Sun className="h-5 w-5 text-yellow-600" />
            <div>
              <div className="font-medium text-gray-900">Morning Wake Up</div>
              <div className="text-sm text-gray-600">Start the day with gentle routine</div>
            </div>
          </div>
          <div className="text-lg font-semibold text-gray-900">7:00 AM</div>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-[#358597]/10 rounded-lg border-l-4 border-[#358597]">
          <div className="flex items-center space-x-3">
            <Moon className="h-5 w-5 text-[#358597]" />
            <div>
              <div className="font-medium text-gray-900">Morning Nap</div>
              <div className="text-sm text-gray-600">1-1.5 hours recommended</div>
            </div>
          </div>
          <div className="text-lg font-semibold text-gray-900">10:00 AM</div>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
          <div className="flex items-center space-x-3">
            <Moon className="h-5 w-5 text-green-600" />
            <div>
              <div className="font-medium text-gray-900">Afternoon Nap</div>
              <div className="text-sm text-gray-600">2-2.5 hours for deep rest</div>
            </div>
          </div>
          <div className="text-lg font-semibold text-gray-900">1:00 PM</div>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-[#F4A896]/20 rounded-lg border-l-4 border-[#F4A896]">
          <div className="flex items-center space-x-3">
            <Moon className="h-5 w-5 text-[#F4A896]" />
            <div>
              <div className="font-medium text-gray-900">Bedtime Routine</div>
              <div className="text-sm text-gray-600">Wind down and prepare for night sleep</div>
            </div>
          </div>
          <div className="text-lg font-semibold text-gray-900">7:30 PM</div>
        </div>
      </div>
    </div>
  )

  const renderProgress = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sleep Goals Progress</h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Consistent Bedtime</span>
              <span className="text-sm text-gray-600">92%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Sleep Duration</span>
              <span className="text-sm text-gray-600">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-[#358597] h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Night Wakings Reduction</span>
              <span className="text-sm text-gray-600">78%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-[#F4A896] h-2 rounded-full" style={{ width: '78%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">✓</span>
            </div>
            <div>
              <div className="font-medium text-gray-900">7 consecutive nights of 8+ hours sleep</div>
              <div className="text-sm text-gray-600">Achieved 3 days ago</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-[#358597]/10 rounded-lg">
            <div className="w-8 h-8 bg-[#358597] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">✓</span>
            </div>
            <div>
              <div className="font-medium text-gray-900">Reduced night wakings by 50%</div>
              <div className="text-sm text-gray-600">Achieved 1 week ago</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-[#F4A896]/20 rounded-lg">
            <div className="w-8 h-8 bg-[#F4A896] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">✓</span>
            </div>
            <div>
              <div className="font-medium text-gray-900">Established consistent nap routine</div>
              <div className="text-sm text-gray-600">Achieved 2 weeks ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderChat = () => (
    <div className="bg-white rounded-xl shadow-sm h-96 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          Chat with {matchedConsultant?.name || 'Dr. Sarah Chen'}
        </h3>
        <div className="text-sm text-gray-600">Sleep Consultant • Online now</div>
      </div>
      
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-[#358597] rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">SC</span>
          </div>
          <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
            <div className="text-sm text-gray-900">Good morning! How did last night go with the new bedtime routine?</div>
            <div className="text-xs text-gray-500 mt-1">9:15 AM</div>
          </div>
        </div>
        
        <div className="flex items-start space-x-3 justify-end">
          <div className="bg-[#358597] text-white rounded-lg p-3 max-w-xs">
            <div className="text-sm">Much better! She only woke up once and went back to sleep quickly. Thank you for the tips about the room temperature.</div>
            <div className="text-xs text-[#358597]/20 mt-1">9:18 AM</div>
          </div>
          <div className="w-8 h-8 bg-[#F4A896] rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">M</span>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-[#358597] rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">SC</span>
          </div>
          <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
            <div className="text-sm text-gray-900">That's wonderful progress! Let's continue with this routine for another week and then we can work on extending the sleep duration.</div>
            <div className="text-xs text-gray-500 mt-1">9:20 AM</div>
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#358597]"
          />
          <button className="bg-[#358597] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2a6b7a] transition-colors">
            Send
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
        </div>

        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#F4A896] to-[#e89680] rounded-full flex items-center justify-center">
              <Baby className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, Sarah!</h1>
              <p className="text-gray-600">Let's check on Emma's sleep progress</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: TrendingUp },
              { id: 'schedule', label: 'Schedule', icon: Calendar },
              { id: 'progress', label: 'Progress', icon: Clock },
              { id: 'chat', label: 'Chat', icon: MessageCircle }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#358597] text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div>
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'schedule' && renderSchedule()}
          {activeTab === 'progress' && renderProgress()}
          {activeTab === 'chat' && renderChat()}
        </div>
      </div>
    </div>
  )
}

export default ClientDashboard
