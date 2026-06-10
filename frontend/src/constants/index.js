export const USER_ROLES = {
  STUDENT: 'student',
  MENTOR: 'mentor',
  PLACEMENT_OFFICER: 'placement_officer',
  ADMIN: 'admin',
}

export const SKILL_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
}

export const GOAL_CATEGORIES = [
  { id: 'ai-engineer', label: 'AI Engineer', icon: 'Cpu' },
  { id: 'data-scientist', label: 'Data Scientist', icon: 'BarChart' },
  { id: 'full-stack-dev', label: 'Full Stack Developer', icon: 'Code' },
  { id: 'ml-engineer', label: 'ML Engineer', icon: 'Brain' },
  { id: 'cloud-engineer', label: 'Cloud Engineer', icon: 'Cloud' },
  { id: 'devops-engineer', label: 'DevOps Engineer', icon: 'Server' },
  { id: 'frontend-dev', label: 'Frontend Developer', icon: 'Palette' },
  { id: 'backend-dev', label: 'Backend Developer', icon: 'Database' },
]

export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
}

export const PAGINATION_LIMIT = 10

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    VERIFY_EMAIL: '/auth/verify-email',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    REFRESH_TOKEN: '/auth/refresh-token',
    ME: '/auth/me',
  },
  PROFILE: {
    GET: '/profile',
    UPDATE: '/profile',
    GET_BY_ID: '/profile/:id',
  },
  GOALS: {
    LIST: '/goals',
    CREATE: '/goals',
    GET: '/goals/:id',
    UPDATE: '/goals/:id',
    DELETE: '/goals/:id',
  },
  SKILLS: {
    LIST: '/skills',
    CREATE: '/skills',
    GET: '/skills/:id',
    UPDATE: '/skills/:id',
    DELETE: '/skills/:id',
  },
  ROADMAP: {
    GENERATE: '/roadmap/generate',
    GET: '/roadmap/:id',
    LIST: '/roadmap',
    UPDATE: '/roadmap/:id',
  },
  ANALYTICS: {
    DASHBOARD: '/analytics/dashboard',
    PROGRESS: '/analytics/progress',
    SKILLS_GROWTH: '/analytics/skills-growth',
  },
}

export const LOCAL_STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  REFRESH_TOKEN: 'refresh_token',
  USER: 'user',
  THEME: 'theme',
  SIDEBAR_COLLAPSED: 'sidebar_collapsed',
}

export const TOAST_MESSAGES = {
  SUCCESS_CREATED: 'Created successfully!',
  SUCCESS_UPDATED: 'Updated successfully!',
  SUCCESS_DELETED: 'Deleted successfully!',
  ERROR_GENERIC: 'Something went wrong. Please try again.',
  ERROR_NETWORK: 'Network error. Please check your connection.',
  LOADING: 'Loading...',
}
