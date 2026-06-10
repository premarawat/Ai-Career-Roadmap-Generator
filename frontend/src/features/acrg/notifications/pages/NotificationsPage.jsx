import { EmptyState } from '@/components/ui/EmptyState'

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        Notifications
      </h1>
      <EmptyState
        title="Notification Center"
        description="View all your notifications and updates."
      />
    </div>
  )
}
