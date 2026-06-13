import { useQuery, useMutation } from '@tanstack/react-query'
import { authAPI } from '@/services/api'
import { useAuthStore } from '@/store/authStore'
import toast from 'react-hot-toast'

export const useLogin = () => {
  const { login } = useAuthStore()

  return useMutation({
    mutationFn: ({ email, password }) => authAPI.login(email, password),
    onSuccess: (response) => {
      // Backend wraps in { data, meta, error } — unwrap with response.data.data
      const { user, accessToken, refreshToken } = response.data.data
      login(user, accessToken, refreshToken)
      toast.success('Logged in successfully!')
    },
    onError: (error) => {
      toast.error(error.response?.data?.error?.message || 'Login failed')
    },
  })
}

export const useRegister = () => {
  const { login } = useAuthStore()

  return useMutation({
    mutationFn: (data) => {
      // Strip confirmPassword — backend doesn't need it
      const { confirmPassword, ...payload } = data
      return authAPI.register(payload)
    },
    onSuccess: (response) => {
      // Auto-login after registration using returned tokens + user
      const { user, accessToken, refreshToken } = response.data.data
      login(user, accessToken, refreshToken)
      toast.success('Registration successful! Please verify your email.')
    },
    onError: (error) => {
      toast.error(error.response?.data?.error?.message || 'Registration failed')
    },
  })
}

export const useLogout = () => {
  const { logout } = useAuthStore()

  return useMutation({
    mutationFn: () => authAPI.logout(),
    onSuccess: () => {
      logout()
      toast.success('Logged out successfully')
    },
    onError: () => {
      // Force local logout even if server call fails
      logout()
    },
  })
}

export const useMe = () => {
  const { setUser } = useAuthStore()

  return useQuery({
    queryKey: ['auth', 'me'],
    queryFn: () => authAPI.me(),
    select: (response) => response.data.data,
    onSuccess: (user) => {
      setUser(user)
    },
    enabled: !!useAuthStore.getState().token,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: false,
  })
}

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: (token) => authAPI.verifyEmail(token),
    onSuccess: () => {
      toast.success('Email verified successfully!')
    },
    onError: (error) => {
      toast.error(error.response?.data?.error?.message || 'Verification failed')
    },
  })
}

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (email) => authAPI.forgotPassword(email),
    onSuccess: () => {
      toast.success('Reset link sent to your email')
    },
    onError: (error) => {
      toast.error(error.response?.data?.error?.message || 'Failed to send reset link')
    },
  })
}

export const useResetPassword = () => {
  return useMutation({
    mutationFn: ({ token, password }) => authAPI.resetPassword(token, password),
    onSuccess: () => {
      toast.success('Password reset successfully!')
    },
    onError: (error) => {
      toast.error(error.response?.data?.error?.message || 'Password reset failed')
    },
  })
}
