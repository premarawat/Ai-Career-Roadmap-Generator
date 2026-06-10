import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { AlertCircle } from 'lucide-react'

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-950 via-primary-950 to-secondary-950 flex items-center justify-center">
      <EmptyState
        icon={AlertCircle}
        title="500 - Server Error"
        description="Something went wrong on our end. Please try again later."
        action={
          <Button onClick={() => navigate('/')}>
            Go to Home
          </Button>
        }
      />
    </div>
  )
}
