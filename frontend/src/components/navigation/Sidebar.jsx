import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import { useUIStore } from '@/store/uiStore'
import {
  LayoutDashboard,
  User,
  Target,
  Zap,
  BarChart,
  Map,
  TrendingUp,
  Briefcase,
  Users,
  Bell,
  FileText,
  Settings,
  Menu,
  X,
  BookOpen,
  Brain,
  ShieldAlert,
} from 'lucide-react'
import { cn } from '@/utils/cn'

export default function Sidebar() {
  const { user } = useAuthStore()
  const { sidebarOpen, toggleSidebar } = useUIStore()
  const location = useLocation()

  const menuItems = {
    student: [
      { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard/student' },
      { icon: User, label: 'Profile', href: '/profile' },
      { icon: Target, label: 'Goals', href: '/goals' },
      { icon: Zap, label: 'Skills', href: '/skills' },
      { icon: BarChart, label: 'Gap Analysis', href: '/gap-analysis' },
      { icon: Map, label: 'Roadmap', href: '/roadmap' },
      { icon: TrendingUp, label: 'Progress', href: '/progress' },
      { icon: Briefcase, label: 'Projects', href: '/projects' },
      { icon: Bell, label: 'Notifications', href: '/notifications' },
      { icon: FileText, label: 'Reports', href: '/reports' },
    ],
    mentor: [
      { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard/mentor' },
      { icon: Users, label: 'Students', href: '/mentor-review' },
      { icon: FileText, label: 'Reviews', href: '/mentor-review' },
      { icon: Bell, label: 'Notifications', href: '/notifications' },
      { icon: BarChart, label: 'Analytics', href: '/reports' },
    ],
    placement_officer: [
      { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard/placement' },
      { icon: BarChart, label: 'Analytics', href: '/reports' },
      { icon: Users, label: 'Students', href: '/profile' },
      { icon: FileText, label: 'Reports', href: '/reports' },
      { icon: Bell, label: 'Notifications', href: '/notifications' },
    ],
    admin: [
      { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard/admin' },
      { icon: Users, label: 'Users', href: '/admin/users' },
      { icon: Target, label: 'Goals', href: '/admin/goals' },
      { icon: Zap, label: 'Skills', href: '/admin/skills' },
      { icon: ShieldAlert, label: 'Audit Logs', href: '/admin/logs' },
      { icon: BarChart, label: 'Analytics', href: '/reports' },
      { icon: Settings, label: 'Settings', href: '/settings' },
    ],
  }

  const currentMenuItems = menuItems[user?.role] || menuItems.student

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-white dark:bg-secondary-900 rounded-lg border border-secondary-200 dark:border-secondary-800"
      >
        {sidebarOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed lg:static left-0 top-0 h-screen w-64 bg-white dark:bg-secondary-900 border-r border-secondary-200 dark:border-secondary-800 flex flex-col z-40 transition-transform duration-300',
          !sidebarOpen && '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-secondary-200 dark:border-secondary-800">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            ACRG
          </h1>
          <p className="text-xs text-secondary-600 dark:text-secondary-400 mt-1">
            Career Roadmap Generator
          </p>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {currentMenuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => window.innerWidth < 1024 && toggleSidebar()}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200',
                  isActive
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100'
                    : 'text-secondary-600 dark:text-secondary-400 hover:bg-secondary-100 dark:hover:bg-secondary-800'
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-secondary-200 dark:border-secondary-800">
          <div className="text-xs text-secondary-600 dark:text-secondary-400">
            <p className="font-semibold text-secondary-900 dark:text-secondary-100">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="capitalize">{user?.role}</p>
          </div>
        </div>
      </aside>
    </>
  )
}
