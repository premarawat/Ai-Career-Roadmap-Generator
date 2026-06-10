import { EmptyState } from '@/components/ui/EmptyState'

export default function MentorReviewPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        Mentor Reviews
      </h1>
      <EmptyState
        title="Mentor Review"
        description="Get feedback and guidance from experienced mentors."
      />
    </div>
  )
}
