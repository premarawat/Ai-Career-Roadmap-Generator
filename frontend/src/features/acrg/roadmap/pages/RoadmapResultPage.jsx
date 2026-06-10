import { EmptyState } from '@/components/ui/EmptyState'

export default function RoadmapResultPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        Your AI-Generated Roadmap
      </h1>
      <EmptyState
        title="Roadmap Result"
        description="View your personalized AI-generated career roadmap."
      />
    </div>
  )
}
