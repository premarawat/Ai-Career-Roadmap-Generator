import { useEffect, useState } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import AppProviders from './app/providers'
import AppRouter from './app/router'
import { queryClient } from './lib/http/queryClient'
import ErrorBoundary from './components/feedback/ErrorBoundary'
import { useThemeStore } from './store/themeStore'

export default function App() {
  const [mounted, setMounted] = useState(false)
  const { isDarkMode } = useThemeStore()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const root = document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDarkMode, mounted])

  if (!mounted) return null

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AppProviders>
          <AppRouter />
          <Toaster position="top-right" reverseOrder={false} />
        </AppProviders>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}
