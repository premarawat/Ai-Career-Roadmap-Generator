import { EmptyState } from '@/components/ui/EmptyState'

export default function GapAnalysisPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        Gap Analysis
      </h1>
      <EmptyState
        title="Gap Analysis"
        description="Identify the skills gap between your current level and career goals."
      />
    </div>
  )
}
