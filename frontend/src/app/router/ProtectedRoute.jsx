import { Navigate } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore()

  if (!isAuthenticated()) {
    return <Navigate to="/auth/login" replace />
  }

  return children
}

export const RoleRoute = ({ children, allowedRoles }) => {
  const { hasAnyRole, isAuthenticated } = useAuthStore()

  if (!isAuthenticated()) {
    return <Navigate to="/auth/login" replace />
  }

  if (!hasAnyRole(allowedRoles)) {
    return <Navigate to="/unauthorized" replace />
  }

  return children
}

export const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore()

  if (isAuthenticated()) {
    return <Navigate to="/dashboard" replace />
  }

  return children
}
