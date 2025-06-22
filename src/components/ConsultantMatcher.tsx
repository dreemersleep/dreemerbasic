import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, MessageCircle, Star, Award, Heart, Clock } from 'lucide-react'

interface ConsultantMatcherProps {
  onBack: () => void
  onComplete: (consultant: any) => void
}

interface Question {
  id: number
  question: string
  options: { value: string; label: string; emoji: string }[]
}

interface Consultant {
  id: number
  name: string
  photo: string
  background: string
  specialties: string[]
  experience: string
  rating: number
  reviews: number
  approach: string
  languages: string[]
  personality: string
  matchScore: number
  bio: string
}

const ConsultantMatcher: React.FC<ConsultantMatcherProps> = ({ onBack, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [matchedConsultant, setMatchedConsultant] = useState<Consultant | null>(null)

  const questions: Question[] = [
    {
      id: 1,
      question: "What's your child's age?",
      options: [
        { value: 'newborn', label: '0-3 months (Newborn)', emoji: '👶' },
        { value: 'infant', label: '4-12 months (Infant)', emoji: '🍼' },
        { value: 'toddler', label: '1-3 years (Toddler)', emoji: '🧸' },
        { value: 'preschool', label: '3-5 years (Preschooler)', emoji: '🎨' }
      ]
    },
    {
      id: 2,
      question: "What's your biggest sleep challenge?",
      options: [
        { value: 'falling_asleep', label: 'Difficulty falling asleep', emoji: '😴' },
        { value: 'night_waking', label: 'Frequent night wakings', emoji: '🌙' },
        { value: 'early_rising', label: 'Too early morning wake-ups', emoji: '🌅' },
        { value: 'nap_struggles', label: 'Nap time battles', emoji: '☀️' }
      ]
    },
    {
      id: 3,
      question: "What's your parenting style preference?",
      options: [
        { value: 'gentle', label: 'Gentle & attachment-focused', emoji: '🤗' },
        { value: 'structured', label: 'Structured & routine-based', emoji: '📋' },
        { value: 'flexible', label: 'Flexible & adaptive', emoji: '🌊' },
        { value: 'traditional', label: 'Traditional Asian methods', emoji: '🏮' }
      ]
    },
    {
      id: 4,
      question: "How involved are grandparents in childcare?",
      options: [
        { value: 'very_involved', label: 'Very involved daily', emoji: '👵' },
        { value: 'somewhat', label: 'Somewhat involved', emoji: '👪' },
        { value: 'occasional', label: 'Occasional help', emoji: '🤝' },
        { value: 'not_involved', label: 'Not involved', emoji: '👨‍👩‍👧' }
      ]
    },
    {
      id: 5,
      question: "What's your preferred communication style?",
      options: [
        { value: 'detailed', label: 'Detailed explanations', emoji: '📚' },
        { value: 'practical', label: 'Quick practical tips', emoji: '⚡' },
        { value: 'supportive', label: 'Emotional support focused', emoji: '💝' },
        { value: 'scientific', label: 'Research-based approach', emoji: '🔬' }
      ]
    }
  ]

  const consultants: Consultant[] = [
    {
      id: 1,
      name: "Dr. Mei Lin Chen",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      background: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialties: ["Newborn Sleep", "Gentle Methods", "Cultural Integration"],
      experience: "8 years",
      rating: 4.9,
      reviews: 127,
      approach: "Gentle & Culturally Sensitive",
      languages: ["English", "Mandarin", "Cantonese"],
      personality: "Warm, patient, and understanding of traditional Asian family dynamics",
      matchScore: 95,
      bio: "Specializes in helping Asian families navigate sleep challenges while respecting cultural traditions. Expert in gentle sleep training methods that work with multi-generational households."
    },
    {
      id: 2,
      name: "Dr. Sakura Tanaka",
      photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      background: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialties: ["Toddler Sleep", "Routine Building", "Behavioral Approaches"],
      experience: "6 years",
      rating: 4.8,
      reviews: 89,
      approach: "Structured & Evidence-Based",
      languages: ["English", "Japanese", "Korean"],
      personality: "Systematic, encouraging, and detail-oriented with a focus on sustainable routines",
      matchScore: 88,
      bio: "Expert in creating structured sleep routines that work for busy Asian families. Combines modern sleep science with practical solutions for working parents."
    },
    {
      id: 3,
      name: "Dr. Priya Sharma",
      photo: "https://images.unsplash.com/photo-1594824388853-2c5899d87b98?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      background: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialties: ["Infant Sleep", "Night Weaning", "Co-sleeping Transitions"],
      experience: "10 years",
      rating: 4.9,
      reviews: 156,
      approach: "Holistic & Family-Centered",
      languages: ["English", "Hindi", "Tamil"],
      personality: "Compassionate, flexible, and skilled at working with extended family dynamics",
      matchScore: 92,
      bio: "Specializes in helping South Asian families with sleep transitions while honoring family traditions. Expert in gradual approaches that respect attachment parenting principles."
    },
    {
      id: 4,
      name: "Dr. Grace Kim",
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      background: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialties: ["Preschooler Sleep", "Sleep Anxiety", "Bedtime Routines"],
      experience: "7 years",
      rating: 4.7,
      reviews: 98,
      approach: "Playful & Child-Centered",
      languages: ["English", "Korean", "Mandarin"],
      personality: "Creative, energetic, and excellent at making sleep fun for children",
      matchScore: 85,
      bio: "Focuses on making sleep enjoyable for older children while addressing anxiety and resistance. Creates engaging bedtime routines that children actually look forward to."
    }
  ]

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion]: value }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate best match based on answers
      const bestMatch = calculateMatch(newAnswers)
      setMatchedConsultant(bestMatch)
      setShowResults(true)
    }
  }

  const calculateMatch = (userAnswers: Record<number, string>): Consultant => {
    // Simple matching logic based on answers
    const age = userAnswers[0]
    const challenge = userAnswers[1]
    const style = userAnswers[2]
    const grandparents = userAnswers[3]
    const communication = userAnswers[4]

    let bestMatch = consultants[0]

    // Match based on age specialization
    if (age === 'newborn' || age === 'infant') {
      bestMatch = consultants.find(c => c.specialties.includes('Newborn Sleep') || c.specialties.includes('Infant Sleep')) || consultants[0]
    } else if (age === 'toddler') {
      bestMatch = consultants.find(c => c.specialties.includes('Toddler Sleep')) || consultants[1]
    } else if (age === 'preschool') {
      bestMatch = consultants.find(c => c.specialties.includes('Preschooler Sleep')) || consultants[3]
    }

    // Adjust match score based on other factors
    if (style === 'gentle' && bestMatch.approach.includes('Gentle')) {
      bestMatch.matchScore = Math.min(98, bestMatch.matchScore + 5)
    }
    if (style === 'structured' && bestMatch.approach.includes('Structured')) {
      bestMatch.matchScore = Math.min(98, bestMatch.matchScore + 5)
    }

    return bestMatch
  }

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    } else {
      onBack()
    }
  }

  if (showResults && matchedConsultant) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">🎉 Perfect Match Found!</h1>
            <p className="text-xl text-gray-600">Based on your answers, we found your ideal sleep consultant</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${matchedConsultant.background})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {matchedConsultant.matchScore}% Match
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-start space-x-6">
                <img
                  src={matchedConsultant.photo}
                  alt={matchedConsultant.name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg -mt-16 relative z-10"
                />
                <div className="flex-1 pt-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{matchedConsultant.name}</h2>
                  <p className="text-[#358597] font-semibold mb-2">{matchedConsultant.approach}</p>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">{matchedConsultant.rating}</span>
                      <span className="text-gray-600">({matchedConsultant.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="h-5 w-5 text-[#F4A896]" />
                      <span className="text-gray-600">{matchedConsultant.experience} experience</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">{matchedConsultant.bio}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Specialties</h3>
                      <div className="flex flex-wrap gap-2">
                        {matchedConsultant.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="bg-[#358597]/10 text-[#358597] px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {matchedConsultant.languages.map((language, index) => (
                          <span
                            key={index}
                            className="bg-[#F4A896]/20 text-[#F4A896] px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Personality & Approach</h3>
                    <p className="text-gray-700">{matchedConsultant.personality}</p>
                  </div>

                  <div className="flex space-x-4 mt-8">
                    <button
                      onClick={() => onComplete(matchedConsultant)}
                      className="flex-1 bg-[#358597] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2a6b7a] transition-colors flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>Start Working Together</span>
                    </button>
                    <button
                      onClick={() => setShowResults(false)}
                      className="border-2 border-[#358597] text-[#358597] px-6 py-3 rounded-xl font-semibold hover:bg-[#358597]/10 transition-colors"
                    >
                      See Other Options
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4A896]/20 via-white to-[#358597]/20 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={goBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Sleep Consultant</h1>
          <p className="text-xl text-gray-600">Answer 5 quick questions to get matched with an expert who understands your family's needs</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-[#358597]">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[#358597] h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-[#358597] hover:bg-[#358597]/5 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{option.emoji}</span>
                    <span className="text-lg font-medium text-gray-900 group-hover:text-[#358597]">
                      {option.label}
                    </span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#358597] ml-auto" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            <Heart className="h-4 w-4 inline mr-1" />
            Your answers help us find the perfect consultant for your family's unique needs
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConsultantMatcher
