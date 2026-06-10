import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import Button from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import {
  Target,
  Zap,
  BarChart,
  Map,
  TrendingUp,
  Briefcase,
  Award,
  Users,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function LandingPage() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore()

  const features = [
    {
      icon: Target,
      title: 'Career Profile',
      description: 'Create a comprehensive profile highlighting your education, skills, and aspirations.',
    },
    {
      icon: Zap,
      title: 'Skill Inventory',
      description: 'Track and manage your technical and soft skills with proficiency levels.',
    },
    {
      icon: BarChart,
      title: 'Gap Analysis',
      description: 'Identify the skills gap between your current level and career goals.',
    },
    {
      icon: Map,
      title: 'AI Roadmap',
      description: 'Get AI-powered personalized learning paths tailored to your goals.',
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Monitor your growth and milestones with detailed analytics.',
    },
    {
      icon: Briefcase,
      title: 'Project Planner',
      description: 'Discover and plan projects to build real-world experience.',
    },
  ]

  const benefits = [
    'Personalized career roadmap powered by AI',
    'Comprehensive skill assessment and tracking',
    'Mentor-guided feedback and reviews',
    'Real-time progress monitoring',
    'Curated learning resources and projects',
    'Industry-aligned career guidance',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-950 via-primary-950 to-secondary-950 text-white overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-secondary-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            ACRG
          </h1>
          <div className="flex items-center gap-4">
            {isAuthenticated() ? (
              <Button onClick={() => navigate('/dashboard/student')}>Go to Dashboard</Button>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={() => navigate('/auth/login')}
                >
                  Sign In
                </Button>
                <Button onClick={() => navigate('/auth/register')}>Get Started</Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
            Your AI-Powered Career Roadmap
          </h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            Create personalized career paths, track your progress, and achieve your professional goals with AI-driven insights and expert mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate('/auth/register')}
              className="flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/auth/login')}
            >
              Already Have an Account?
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">Powerful Features</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass h-full border-primary-500/20 hover:border-primary-500/50 transition-colors">
                  <CardContent className="p-6">
                    <Icon className="h-10 w-10 text-primary-400 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-secondary-300 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-primary-950/30 rounded-2xl my-20 border border-primary-500/20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-8">Why Choose ACRG?</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-success-400 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-200">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Award className="h-64 w-64 text-primary-400/20" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">What Users Say</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="glass border-primary-500/20">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-secondary-200 mb-4">
                  "ACRG helped me identify my career direction and create a clear roadmap. The AI insights are incredibly valuable!"
                </p>
                <p className="font-semibold">Student Name</p>
                <p className="text-secondary-400 text-sm">Career Goal: AI Engineer</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Career?</h3>
        <Button
          size="lg"
          onClick={() => navigate('/auth/register')}
          className="flex items-center gap-2 mx-auto"
        >
          Get Started Now
          <ArrowRight className="h-5 w-5" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-secondary-400">
          <p>&copy; 2024 AI Career Roadmap Generator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
