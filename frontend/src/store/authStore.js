import { create } from 'zustand'
import { LOCAL_STORAGE_KEYS } from '@/constants'

export const useAuthStore = create((set, get) => ({
  user: null,
  token: localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN),
  refreshToken: localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN),
  isLoading: false,
  error: null,

  setUser: (user) => set({ user }),
  setToken: (token) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN, token)
    set({ token })
  },
  setRefreshToken: (refreshToken) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, refreshToken)
    set({ refreshToken })
  },
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),

  login: (user, token, refreshToken) => {
    set({ user, token, refreshToken, error: null })
    localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN, token)
    localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, refreshToken)
    localStorage.setItem(LOCAL_STORAGE_KEYS.USER, JSON.stringify(user))
  },

  logout: () => {
    set({ user: null, token: null, refreshToken: null, error: null })
    localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN)
    localStorage.removeItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN)
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER)
  },

  isAuthenticated: () => {
    const { token } = get()
    return !!token
  },

  hasRole: (role) => {
    const { user } = get()
    return user?.role === role
  },

  hasAnyRole: (roles) => {
    const { user } = get()
    return roles.includes(user?.role)
  },

  hydrate: () => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN)
    const refreshToken = localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN)
    const user = localStorage.getItem(LOCAL_STORAGE_KEYS.USER)

    if (token && user) {
      set({
        token,
        refreshToken,
        user: JSON.parse(user),
      })
    }
  },
}))
