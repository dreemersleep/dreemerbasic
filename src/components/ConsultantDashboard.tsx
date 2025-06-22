import React, { useState } from 'react'
import { ArrowLeft, Users, Calendar, MessageCircle, TrendingUp, Clock, User, Phone, Video } from 'lucide-react'

interface ConsultantDashboardProps {
  onBack: () => void
}

const ConsultantDashboard: React.FC<ConsultantDashboardProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'clients' | 'schedule' | 'analytics' | 'messages'>('clients')

  const clients = [
    {
      id: 1,
      name: 'Sarah Kim',
      childName: 'Emma',
      childAge: '8 months',
      status: 'Active',
      lastSession: '2024-01-10',
      progress: 85,
      priority: 'normal',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Lisa Chen',
      childName: 'Alex',
      childAge: '2 years',
      status: 'Needs Attention',
      lastSession: '2024-01-08',
      progress: 45,
      priority: 'high',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Maria Wong',
      childName: 'Sophie',
      childAge: '6 months',
      status: 'Active',
      lastSession: '2024-01-12',
      progress: 92,
      priority: 'normal',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 4,
      name: 'Jennifer Lee',
      childName: 'Daniel',
      childAge: '14 months',
      status: 'Completed',
      lastSession: '2024-01-05',
      progress: 100,
      priority: 'low',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ]

  const todaySchedule = [
    { time: '9:00 AM', client: 'Sarah Kim', type: 'Initial Consultation', duration: '60 min' },
    { time: '10:30 AM', client: 'Lisa Chen', type: 'Follow-up Session', duration: '45 min' },
    { time: '2:00 PM', client: 'Maria Wong', type: 'Progress Review', duration: '30 min' },
    { time: '3:30 PM', client: 'Jennifer Lee', type: 'Final Assessment', duration: '45 min' },
    { time: '5:00 PM', client: 'New Client', type: 'Initial Consultation', duration: '60 min' }
  ]

  const renderClients = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-[#358597]/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Total Clients</h3>
            <Users className="h-6 w-6 text-[#358597]" />
          </div>
          <div className="text-3xl font-bold text-[#358597]">24</div>
          <div className="text-sm text-gray-600">+3 this month</div>
        </div>
        
        <div className="bg-green-50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Active Cases</h3>
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-3xl font-bold text-green-600">18</div>
          <div className="text-sm text-gray-600">75% of total</div>
        </div>
        
        <div className="bg-yellow-50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Avg Success Rate</h3>
            <Clock className="h-6 w-6 text-yellow-600" />
          </div>
          <div className="text-3xl font-bold text-yellow-600">89%</div>
          <div className="text-sm text-gray-600">Above target</div>
        </div>
        
        <div className="bg-[#F4A896]/20 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">This Week</h3>
            <Calendar className="h-6 w-6 text-[#F4A896]" />
          </div>
          <div className="text-3xl font-bold text-[#F4A896]">12</div>
          <div className="text-sm text-gray-600">Sessions scheduled</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Client Overview</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Child</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Session</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-10 w-10 rounded-full" src={client.avatar} alt="" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{client.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{client.childName}</div>
                    <div className="text-sm text-gray-500">{client.childAge}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      client.status === 'Active' ? 'bg-green-100 text-green-800' :
                      client.status === 'Needs Attention' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className={`h-2 rounded-full ${
                            client.progress >= 80 ? 'bg-green-600' :
                            client.progress >= 60 ? 'bg-yellow-600' :
                            'bg-red-600'
                          }`}
                          style={{ width: `${client.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-900">{client.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {client.lastSession}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button className="text-[#358597] hover:text-[#2a6b7a]">
                      <MessageCircle className="h-4 w-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900">
                      <Phone className="h-4 w-4" />
                    </button>
                    <button className="text-[#F4A896] hover:text-[#e89680]">
                      <Video className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderSchedule = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Today's Schedule</h3>
        <div className="space-y-4">
          {todaySchedule.map((appointment, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="text-lg font-semibold text-[#358597]">{appointment.time}</div>
                <div>
                  <div className="font-medium text-gray-900">{appointment.client}</div>
                  <div className="text-sm text-gray-600">{appointment.type}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">{appointment.duration}</span>
                <div className="flex space-x-2">
                  <button className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors">
                    <Phone className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-[#358597] hover:bg-[#358597]/10 rounded-lg transition-colors">
                    <Video className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-[#F4A896] hover:bg-[#F4A896]/20 rounded-lg transition-colors">
                    <MessageCircle className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Monday</span>
              <span className="font-medium">4 sessions</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Tuesday</span>
              <span className="font-medium">3 sessions</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Wednesday</span>
              <span className="font-medium">5 sessions</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Thursday</span>
              <span className="font-medium">2 sessions</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Friday</span>
              <span className="font-medium">3 sessions</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Deadlines</h3>
          <div className="space-y-3">
            <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
              <div className="font-medium text-gray-900">Sarah Kim - Progress Report</div>
              <div className="text-sm text-gray-600">Due tomorrow</div>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <div className="font-medium text-gray-900">Lisa Chen - Sleep Plan Update</div>
              <div className="text-sm text-gray-600">Due in 3 days</div>
            </div>
            <div className="p-3 bg-[#358597]/10 rounded-lg border-l-4 border-[#358597]">
              <div className="font-medium text-gray-900">Monthly Team Meeting</div>
              <div className="text-sm text-gray-600">Due in 5 days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Success Rate Trend</h3>
          <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
          <div className="text-sm text-gray-600">+5% from last month</div>
          <div className="mt-4 h-20 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-end justify-center">
            <div className="text-xs text-green-700">Trending upward</div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Avg Session Duration</h3>
          <div className="text-3xl font-bold text-[#358597] mb-2">42 min</div>
          <div className="text-sm text-gray-600">Optimal range</div>
          <div className="mt-4 h-20 bg-gradient-to-r from-[#358597]/20 to-[#358597]/30 rounded-lg flex items-end justify-center">
            <div className="text-xs text-[#358597]">Within target</div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Satisfaction</h3>
          <div className="text-3xl font-bold text-[#F4A896] mb-2">4.8/5</div>
          <div className="text-sm text-gray-600">Based on 24 reviews</div>
          <div className="mt-4 h-20 bg-gradient-to-r from-[#F4A896]/20 to-[#F4A896]/30 rounded-lg flex items-end justify-center">
            <div className="text-xs text-[#F4A896]">Excellent rating</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Client Progress Overview</h3>
        <div className="space-y-4">
          {clients.map((client) => (
            <div key={client.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <img className="h-10 w-10 rounded-full" src={client.avatar} alt="" />
                <div>
                  <div className="font-medium text-gray-900">{client.name}</div>
                  <div className="text-sm text-gray-600">{client.childName} - {client.childAge}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      client.progress >= 80 ? 'bg-green-600' :
                      client.progress >= 60 ? 'bg-yellow-600' :
                      'bg-red-600'
                    }`}
                    style={{ width: `${client.progress}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900 w-12">{client.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderMessages = () => (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Messages</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {clients.slice(0, 3).map((client) => (
            <div key={client.id} className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <img className="h-10 w-10 rounded-full" src={client.avatar} alt="" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900">{client.name}</div>
                  <div className="text-sm text-gray-600 truncate">
                    Thank you for the sleep tips...
                  </div>
                  <div className="text-xs text-gray-500">2 hours ago</div>
                </div>
                <div className="w-3 h-3 bg-[#358597] rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:col-span-2 bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <img className="h-10 w-10 rounded-full" src={clients[0].avatar} alt="" />
            <div>
              <div className="font-medium text-gray-900">{clients[0].name}</div>
              <div className="text-sm text-gray-600">Online now</div>
            </div>
          </div>
        </div>
        
        <div className="h-64 p-4 space-y-4 overflow-y-auto">
          <div className="flex items-start space-x-3">
            <img className="h-8 w-8 rounded-full" src={clients[0].avatar} alt="" />
            <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
              <div className="text-sm text-gray-900">Hi Dr. Chen! Emma had a great night last night. She slept for 8 hours straight!</div>
              <div className="text-xs text-gray-500 mt-1">10:15 AM</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 justify-end">
            <div className="bg-[#358597] text-white rounded-lg p-3 max-w-xs">
              <div className="text-sm">That's fantastic news! I'm so happy to hear about Emma's progress. Let's continue with the current routine for another week.</div>
              <div className="text-xs text-[#358597]/20 mt-1">10:18 AM</div>
            </div>
            <div className="w-8 h-8 bg-[#358597] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">DC</span>
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
            <div className="w-16 h-16 bg-gradient-to-br from-[#358597] to-[#2a6b7a] rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dr. Sarah Chen</h1>
              <p className="text-gray-600">Sleep Consultant Dashboard</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'clients', label: 'Clients', icon: Users },
              { id: 'schedule', label: 'Schedule', icon: Calendar },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp },
              { id: 'messages', label: 'Messages', icon: MessageCircle }
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
          {activeTab === 'clients' && renderClients()}
          {activeTab === 'schedule' && renderSchedule()}
          {activeTab === 'analytics' && renderAnalytics()}
          {activeTab === 'messages' && renderMessages()}
        </div>
      </div>
    </div>
  )
}

export default ConsultantDashboard
