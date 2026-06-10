import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { Plus } from 'lucide-react'

export default function SkillsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
          Skills Inventory
        </h1>
        <Button icon={Plus}>Add Skill</Button>
      </div>

      <EmptyState
        title="Skills Inventory"
        description="Track your technical and soft skills."
      />
    </div>
  )
}
