import { Navigate } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'

const getRoleDashboard = (role) => {
  const roleMap = {
    student: '/dashboard/student',
    mentor: '/dashboard/mentor',
    placement_officer: '/dashboard/placement',
    admin: '/dashboard/admin',
  }
  return roleMap[role] ?? '/dashboard/student'
}

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
  const { isAuthenticated, user } = useAuthStore()

  if (isAuthenticated()) {
    const role = user?.role ?? JSON.parse(localStorage.getItem('user') || '{}')?.role
    return <Navigate to={getRoleDashboard(role)} replace />
  }

  return children
}
