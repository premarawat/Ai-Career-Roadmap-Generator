import { EmptyState } from '@/components/ui/EmptyState'

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        User Management
      </h1>
      <EmptyState
        title="User Management"
        description="Manage all system users and their roles."
      />
    </div>
  )
}
