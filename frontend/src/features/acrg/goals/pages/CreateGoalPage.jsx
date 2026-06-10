import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { Plus } from 'lucide-react'

export default function CreateGoalPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        Create New Goal
      </h1>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Goal Creation Form</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            title="Goal Selection"
            description="Select or create a new career goal."
          />
        </CardContent>
      </Card>
    </div>
  )
}
