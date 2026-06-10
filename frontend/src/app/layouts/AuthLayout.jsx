import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-secondary-900 to-accent-900 flex items-center justify-center p-4">
      <Outlet />
    </div>
  )
}
