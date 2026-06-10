import { EmptyState } from '@/components/ui/EmptyState'

export default function AdminSkillsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        Skills Management
      </h1>
      <EmptyState
        title="Skills Management"
        description="Manage system skills and categories."
      />
    </div>
  )
}
