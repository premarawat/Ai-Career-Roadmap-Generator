import { useEffect } from 'react'
import { useAuthStore } from '@/store/authStore'

export default function AppProviders({ children }) {
  const { hydrate } = useAuthStore()

  useEffect(() => {
    hydrate()
  }, [hydrate])

  return <>{children}</>
}
