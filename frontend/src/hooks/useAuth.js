import { useQuery, useMutation } from '@tanstack/react-query'
import { authAPI } from '@/services/api'
import { useAuthStore } from '@/store/authStore'
import toast from 'react-hot-toast'

export const useLogin = () => {
  const { login } = useAuthStore()

  return useMutation({
    mutationFn: ({ email, password }) => authAPI.login(email, password),
    onSuccess: (response) => {
      const { user, token, refreshToken } = response.data
      login(user, token, refreshToken)
      toast.success('Logged in successfully!')
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Login failed')
    },
  })
}

export const useRegister = () => {
  return useMutation({
    mutationFn: (data) => authAPI.register(data),
    onSuccess: () => {
      toast.success('Registration successful! Please verify your email.')
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Registration failed')
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
  })
}

export const useMe = () => {
  const { setUser } = useAuthStore()

  return useQuery({
    queryKey: ['auth', 'me'],
    queryFn: () => authAPI.me(),
    onSuccess: (response) => {
      setUser(response.data)
    },
    enabled: !!useAuthStore.getState().token,
  })
}

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: (code) => authAPI.verifyEmail(code),
    onSuccess: () => {
      toast.success('Email verified successfully!')
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Verification failed')
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
      toast.error(error.response?.data?.message || 'Failed to send reset link')
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
      toast.error(error.response?.data?.message || 'Password reset failed')
    },
  })
}
