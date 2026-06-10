import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { EmptyState } from '@/components/ui/EmptyState'

export default function PlacementDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        Placement Officer Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Total Students', value: '150', color: 'primary' },
          { label: 'Placed', value: '89', color: 'success' },
          { label: 'Pending', value: '45', color: 'warning' },
          { label: 'Placement Rate', value: '59%', color: 'accent' },
        ].map((stat, i) => (
          <Card key={i} className="glass">
            <CardContent className="p-6">
              <p className="text-sm text-secondary-600 dark:text-secondary-400">{stat.label}</p>
              <p className="text-3xl font-bold text-secondary-900 dark:text-secondary-100 mt-2">
                {stat.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            title="Analytics Dashboard"
            description="Detailed placement analytics and reports coming soon."
          />
        </CardContent>
      </Card>
    </div>
  )
}
