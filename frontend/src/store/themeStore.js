import { create } from 'zustand'
import { LOCAL_STORAGE_KEYS } from '@/constants'

export const useThemeStore = create((set) => ({
  isDarkMode: localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) === 'dark',

  toggleDarkMode: () =>
    set((state) => {
      const newMode = !state.isDarkMode
      localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, newMode ? 'dark' : 'light')
      return { isDarkMode: newMode }
    }),

  setDarkMode: (isDarkMode) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, isDarkMode ? 'dark' : 'light')
    set({ isDarkMode })
  },
}))
