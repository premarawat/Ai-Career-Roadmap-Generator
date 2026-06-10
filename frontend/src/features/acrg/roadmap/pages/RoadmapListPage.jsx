import { EmptyState } from '@/components/ui/EmptyState'

export default function RoadmapListPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        My Roadmaps
      </h1>
      <EmptyState
        title="Roadmaps"
        description="View and manage your AI-generated career roadmaps."
      />
    </div>
  )
}
