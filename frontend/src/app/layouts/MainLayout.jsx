import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/navigation/Sidebar'
import Header from '@/components/navigation/Header'
import { useUIStore } from '@/store/uiStore'

export default function MainLayout() {
  const { sidebarOpen } = useUIStore()

  return (
    <div className="flex h-screen bg-secondary-50 dark:bg-secondary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main
          className={`flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8 transition-all duration-300`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}
