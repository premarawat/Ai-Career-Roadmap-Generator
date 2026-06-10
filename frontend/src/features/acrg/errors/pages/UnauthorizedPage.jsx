import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { ShieldAlert } from 'lucide-react'

export default function UnauthorizedPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-950 via-primary-950 to-secondary-950 flex items-center justify-center">
      <EmptyState
        icon={ShieldAlert}
        title="403 - Access Denied"
        description="You don't have permission to access this resource."
        action={
          <Button onClick={() => navigate('/')}>
            Go to Home
          </Button>
        }
      />
    </div>
  )
}
