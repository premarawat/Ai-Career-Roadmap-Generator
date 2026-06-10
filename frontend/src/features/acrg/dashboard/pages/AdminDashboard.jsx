import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { EmptyState } from '@/components/ui/EmptyState'

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Total Users', value: '450', color: 'primary' },
          { label: 'Active Sessions', value: '123', color: 'success' },
          { label: 'System Health', value: '99.8%', color: 'accent' },
          { label: 'Pending Actions', value: '12', color: 'warning' },
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

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="glass">
          <CardHeader>
            <CardTitle>User Management</CardTitle>
          </CardHeader>
          <CardContent>
            <EmptyState
              title="User Management"
              description="Manage system users and their roles."
            />
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>System Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <EmptyState
              title="Audit Logs"
              description="View system activities and user actions."
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
