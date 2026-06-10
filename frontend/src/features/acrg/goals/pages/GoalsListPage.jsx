import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { Plus } from 'lucide-react'

export default function GoalsListPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
          Career Goals
        </h1>
        <Button icon={Plus}>Add Goal</Button>
      </div>

      <div className="grid gap-6">
        {[].length === 0 ? (
          <EmptyState
            title="No Goals Yet"
            description="Create your first career goal to get started on your roadmap."
            action={<Button>Add Your First Goal</Button>}
          />
        ) : null}
      </div>
    </div>
  )
}
