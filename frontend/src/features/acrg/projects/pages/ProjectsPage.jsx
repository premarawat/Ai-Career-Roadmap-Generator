import { EmptyState } from '@/components/ui/EmptyState'

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        Project Planner
      </h1>
      <EmptyState
        title="Suggested Projects"
        description="Discover and plan projects to build real-world experience."
      />
    </div>
  )
}
