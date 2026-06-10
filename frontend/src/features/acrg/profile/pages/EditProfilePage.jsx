import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'

export default function EditProfilePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        Edit Career Profile
      </h1>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            title="Edit Profile Form"
            description="Form to edit education, skills, experience, and preferences."
          />
        </CardContent>
      </Card>
    </div>
  )
}
