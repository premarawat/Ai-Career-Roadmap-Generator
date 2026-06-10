import { EmptyState } from '@/components/ui/EmptyState'

export default function GoalDetailsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        Goal Details
      </h1>
      <EmptyState
        title="Goal Details"
        description="View and track your career goal progress."
      />
    </div>
  )
}
