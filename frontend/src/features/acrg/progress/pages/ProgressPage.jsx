                                                            import { EmptyState } from '@/components/ui/EmptyState'

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        Progress Tracking
      </h1>
      <EmptyState
        title="Progress Tracking"
        description="Track your milestones and career development progress."
      />
    </div>
  )
}
