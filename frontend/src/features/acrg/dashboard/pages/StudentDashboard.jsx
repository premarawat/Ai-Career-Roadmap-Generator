import { useMe } from '@/hooks/useAuth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Badge } from '@/components/ui/Badge'
import { Loader } from '@/components/feedback/Loader'
import { EmptyState } from '@/components/ui/EmptyState'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { TrendingUp, Target, Zap, BookOpen } from 'lucide-react'

const chartData = [
  { month: 'Jan', completion: 40, target: 100 },
  { month: 'Feb', completion: 60, target: 100 },
  { month: 'Mar', completion: 75, target: 100 },
  { month: 'Apr', completion: 85, target: 100 },
]

export default function StudentDashboard() {
  const { data: user, isLoading } = useMe()

  if (isLoading) return <Loader />

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
          Welcome back, {user?.firstName}! 👋
        </h1>
        <p className="text-secondary-600 dark:text-secondary-400">
          Track your progress and continue your career journey
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { icon: TrendingUp, label: 'Profile Completion', value: '85%', color: 'primary' },
          { icon: Target, label: 'Active Goals', value: '3', color: 'accent' },
          { icon: Zap, label: 'Skills Added', value: '12', color: 'success' },
          { icon: BookOpen, label: 'Courses Completed', value: '2', color: 'warning' },
        ].map((stat, i) => {
          const Icon = stat.icon
          return (
            <Card key={i} className="glass">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">{stat.label}</p>
                    <p className="text-3xl font-bold text-secondary-900 dark:text-secondary-100 mt-2">
                      {stat.value}
                    </p>
                  </div>
                  <Icon className={`h-8 w-8 text-${stat.color}-500`} />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Progress Chart */}
      <Card className="glass">
        <CardHeader>
          <CardTitle>Roadmap Progress</CardTitle>
          <CardDescription>Your completion progress over the past 4 months</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="completion" stroke="#0ea5e9" name="Your Progress" />
              <Line type="monotone" dataKey="target" stroke="#8b5cf6" name="Target" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Current Goal */}
        <Card className="glass">
          <CardHeader>
            <CardTitle>Current Goal</CardTitle>
            <CardDescription>Your primary career objective</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-secondary-900 dark:text-secondary-100">
                  AI Engineer
                </span>
                <Badge variant="success">In Progress</Badge>
              </div>
              <ProgressBar value={65} label="Progress" />
            </div>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              Expected completion in 6 months
            </p>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="glass">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Your latest milestone updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: 'Completed: Python Fundamentals', date: '2 days ago' },
              { label: 'Added: Machine Learning skill', date: '1 week ago' },
              { label: 'Updated: Career Profile', date: '2 weeks ago' },
            ].map((activity, i) => (
              <div key={i} className="flex justify-between items-start pb-3 border-b border-secondary-200 dark:border-secondary-800 last:border-0">
                <p className="text-sm text-secondary-900 dark:text-secondary-100">{activity.label}</p>
                <span className="text-xs text-secondary-500 dark:text-secondary-400">{activity.date}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
