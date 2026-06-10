import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { Users, CheckCircle, Clock } from 'lucide-react'

export default function MentorDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        Mentor Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="glass">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">Assigned Students</p>
                <p className="text-3xl font-bold text-secondary-900 dark:text-secondary-100 mt-2">12</p>
              </div>
              <Users className="h-8 w-8 text-primary-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">Pending Reviews</p>
                <p className="text-3xl font-bold text-secondary-900 dark:text-secondary-100 mt-2">5</p>
              </div>
              <Clock className="h-8 w-8 text-warning-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">Completed Reviews</p>
                <p className="text-3xl font-bold text-secondary-900 dark:text-secondary-100 mt-2">28</p>
              </div>
              <CheckCircle className="h-8 w-8 text-success-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Pending Student Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            title="No Pending Reviews"
            description="All student submissions have been reviewed. Check back for updates."
          />
        </CardContent>
      </Card>
    </div>
  )
}
