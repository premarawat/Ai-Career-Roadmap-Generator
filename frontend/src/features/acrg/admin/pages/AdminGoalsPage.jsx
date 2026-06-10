import { EmptyState } from '@/components/ui/EmptyState'

export default function AdminGoalsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        Goals Management
      </h1>
      <EmptyState
        title="Goals Management"
        description="Manage career goals and categories."
      />
    </div>
  )
}
