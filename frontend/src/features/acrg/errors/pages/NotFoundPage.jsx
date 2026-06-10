import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { AlertCircle } from 'lucide-react'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-950 via-primary-950 to-secondary-950 flex items-center justify-center">
      <EmptyState
        icon={AlertCircle}
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist."
        action={
          <Button onClick={() => navigate('/')}>
            Go to Home
          </Button>
        }
      />
    </div>
  )
}
