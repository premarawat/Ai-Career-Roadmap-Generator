import { EmptyState } from '@/components/ui/EmptyState'

export default function AdminLogsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        Audit Logs
      </h1>
      <EmptyState
        title="Audit Logs"
        description="View system activities and user actions."
      />
    </div>
  )
}
