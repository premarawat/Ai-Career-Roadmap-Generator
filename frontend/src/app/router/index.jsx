import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PrivateRoute, PublicRoute, RoleRoute } from './ProtectedRoute'

// Layout
import MainLayout from '@/app/layouts/MainLayout'
import AuthLayout from '@/app/layouts/AuthLayout'

// Auth Pages
import LoginPage from '@/features/acrg/auth/pages/LoginPage'
import RegisterPage from '@/features/acrg/auth/pages/RegisterPage'
import ForgotPasswordPage from '@/features/acrg/auth/pages/ForgotPasswordPage'
import ResetPasswordPage from '@/features/acrg/auth/pages/ResetPasswordPage'
import EmailVerificationPage from '@/features/acrg/auth/pages/EmailVerificationPage'

// Public Pages
import LandingPage from '@/features/acrg/landing/pages/LandingPage'

// Dashboard Pages
import StudentDashboard from '@/features/acrg/dashboard/pages/StudentDashboard'
import MentorDashboard from '@/features/acrg/dashboard/pages/MentorDashboard'
import AdminDashboard from '@/features/acrg/dashboard/pages/AdminDashboard'
import PlacementDashboard from '@/features/acrg/dashboard/pages/PlacementDashboard'

// Profile Pages
import ProfilePage from '@/features/acrg/profile/pages/ProfilePage'
import EditProfilePage from '@/features/acrg/profile/pages/EditProfilePage'

// Goals Pages
import GoalsListPage from '@/features/acrg/goals/pages/GoalsListPage'
import GoalDetailsPage from '@/features/acrg/goals/pages/GoalDetailsPage'
import CreateGoalPage from '@/features/acrg/goals/pages/CreateGoalPage'

// Skills Pages
import SkillsPage from '@/features/acrg/skills/pages/SkillsPage'

// Gap Analysis Pages
import GapAnalysisPage from '@/features/acrg/gap-analysis/pages/GapAnalysisPage'

// Roadmap Pages
import RoadmapGeneratorPage from '@/features/acrg/roadmap/pages/RoadmapGeneratorPage'
import RoadmapResultPage from '@/features/acrg/roadmap/pages/RoadmapResultPage'
import RoadmapListPage from '@/features/acrg/roadmap/pages/RoadmapListPage'

// Progress Pages
import ProgressPage from '@/features/acrg/progress/pages/ProgressPage'

// Projects Pages
import ProjectsPage from '@/features/acrg/projects/pages/ProjectsPage'

// Mentor Review Pages
import MentorReviewPage from '@/features/acrg/mentor-review/pages/MentorReviewPage'

// Notifications Pages
import NotificationsPage from '@/features/acrg/notifications/pages/NotificationsPage'

// Reports Pages
import ReportsPage from '@/features/acrg/reports/pages/ReportsPage'

// Admin Pages
import AdminUsersPage from '@/features/acrg/admin/pages/AdminUsersPage'
import AdminGoalsPage from '@/features/acrg/admin/pages/AdminGoalsPage'
import AdminSkillsPage from '@/features/acrg/admin/pages/AdminSkillsPage'
import AdminLogsPage from '@/features/acrg/admin/pages/AdminLogsPage'

// Error Pages
import NotFoundPage from '@/features/acrg/errors/pages/NotFoundPage'
import UnauthorizedPage from '@/features/acrg/errors/pages/UnauthorizedPage'
import ErrorPage from '@/features/acrg/errors/pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: (
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        ),
      },
      {
        path: 'register',
        element: (
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        ),
      },
      {
        path: 'forgot-password',
        element: (
          <PublicRoute>
            <ForgotPasswordPage />
          </PublicRoute>
        ),
      },
      {
        path: 'reset-password/:token',
        element: (
          <PublicRoute>
            <ResetPasswordPage />
          </PublicRoute>
        ),
      },
      {
        path: 'verify-email',
        element: (
          <PublicRoute>
            <EmailVerificationPage />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'student',
        element: (
          <RoleRoute allowedRoles={['student']}>
            <StudentDashboard />
          </RoleRoute>
        ),
      },
      {
        path: 'mentor',
        element: (
          <RoleRoute allowedRoles={['mentor']}>
            <MentorDashboard />
          </RoleRoute>
        ),
      },
      {
        path: 'placement',
        element: (
          <RoleRoute allowedRoles={['placement_officer']}>
            <PlacementDashboard />
          </RoleRoute>
        ),
      },
      {
        path: 'admin',
        element: (
          <RoleRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </RoleRoute>
        ),
      },
    ],
  },
  {
    path: '/profile',
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <ProfilePage />,
      },
      {
        path: 'edit',
        element: <EditProfilePage />,
      },
    ],
  },
  {
    path: '/goals',
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <GoalsListPage />,
      },
      {
        path: 'new',
        element: <CreateGoalPage />,
      },
      {
        path: ':id',
        element: <GoalDetailsPage />,
      },
    ],
  },
  {
    path: '/skills',
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <SkillsPage />,
      },
    ],
  },
  {
    path: '/gap-analysis',
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <GapAnalysisPage />,
      },
    ],
  },
  {
    path: '/roadmap',
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <RoadmapListPage />,
      },
      {
        path: 'generate',
        element: <RoadmapGeneratorPage />,
      },
      {
        path: 'result/:id',
        element: <RoadmapResultPage />,
      },
    ],
  },
  {
    path: '/progress',
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <ProgressPage />,
      },
    ],
  },
  {
    path: '/projects',
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <ProjectsPage />,
      },
    ],
  },
  {
    path: '/mentor-review',
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <MentorReviewPage />,
      },
    ],
  },
  {
    path: '/notifications',
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <NotificationsPage />,
      },
    ],
  },
  {
    path: '/reports',
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <ReportsPage />,
      },
    ],
  },
  {
    path: '/admin',
    element: (
      <RoleRoute allowedRoles={['admin']}>
        <MainLayout />
      </RoleRoute>
    ),
    children: [
      {
        path: 'users',
        element: <AdminUsersPage />,
      },
      {
        path: 'goals',
        element: <AdminGoalsPage />,
      },
      {
        path: 'skills',
        element: <AdminSkillsPage />,
      },
      {
        path: 'logs',
        element: <AdminLogsPage />,
      },
    ],
  },
  {
    path: '/unauthorized',
    element: <UnauthorizedPage />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
