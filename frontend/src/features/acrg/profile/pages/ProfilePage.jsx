import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { Edit, User } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
          Career Profile
        </h1>
        <Button icon={Edit} href="/profile/edit">Edit Profile</Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card className="glass">
            <CardContent className="p-6 text-center">
              <div className="h-24 w-24 bg-primary-600 rounded-full mx-auto flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-xl font-semibold mt-4 text-secondary-900 dark:text-secondary-100">
                John Doe
              </h2>
              <p className="text-secondary-600 dark:text-secondary-400">Student</p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <Card className="glass">
            <CardHeader>
              <CardTitle>Profile Completion</CardTitle>
            </CardHeader>
            <CardContent>
              <EmptyState
                title="Complete Your Profile"
                description="Add your education, skills, and experience to get personalized recommendations."
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
