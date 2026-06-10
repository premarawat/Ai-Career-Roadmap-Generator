import { EmptyState } from '@/components/ui/EmptyState'

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        Reports & Analytics
      </h1>
      <EmptyState
        title="Reports"
        description="Generate and view your progress and analytics reports."
      />
    </div>
  )
}
