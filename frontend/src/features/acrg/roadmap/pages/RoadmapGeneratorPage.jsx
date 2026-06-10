import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'

export default function RoadmapGeneratorPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        Generate Roadmap
      </h1>

      <Card className="glass">
        <CardHeader>
          <CardTitle>AI Roadmap Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            title="Generate Your AI Roadmap"
            description="Answer a few questions and let AI create your personalized career roadmap."
          />
        </CardContent>
      </Card>
    </div>
  )
}
