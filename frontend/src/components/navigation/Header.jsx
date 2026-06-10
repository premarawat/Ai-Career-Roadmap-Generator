import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import { useThemeStore } from '@/store/themeStore'
import Button from '@/components/ui/Button'
import { Moon, Sun, LogOut, Settings, Bell } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const { user, logout } = useAuthStore()
  const { isDarkMode, toggleDarkMode } = useThemeStore()
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/auth/login')
  }

  return (
    <header className="sticky top-0 z-40 border-b border-secondary-200 dark:border-secondary-800 bg-white dark:bg-secondary-900 shadow-sm">
      <div className="px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100">
            ACRG
          </h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="p-2 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-lg transition-colors">
            <Bell className="h-5 w-5 text-secondary-600 dark:text-secondary-400" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-lg transition-colors"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-secondary-600 dark:text-secondary-400" />
            ) : (
              <Moon className="h-5 w-5 text-secondary-600 dark:text-secondary-400" />
            )}
          </button>

          {/* Profile Menu */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 p-2 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-lg transition-colors"
            >
              <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-semibold text-sm">
                {user?.firstName?.[0]}{user?.lastName?.[0]}
              </div>
              <span className="text-sm font-medium text-secondary-900 dark:text-secondary-100 hidden sm:block">
                {user?.firstName}
              </span>
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700 py-2 z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-secondary-900 dark:text-secondary-100 hover:bg-secondary-100 dark:hover:bg-secondary-700"
                >
                  Profile
                </Link>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-secondary-900 dark:text-secondary-100 hover:bg-secondary-100 dark:hover:bg-secondary-700 flex items-center gap-2"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </button>
                <hr className="my-2 border-secondary-200 dark:border-secondary-700" />
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/20 flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
