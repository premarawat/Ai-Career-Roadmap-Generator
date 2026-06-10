// Auth types
export type User = {
  id: string
  email: string
  firstName: string
  lastName: string
  role: 'student' | 'mentor' | 'placement_officer' | 'admin'
  avatar?: string
  bio?: string
  createdAt: string
}

export type AuthState = {
  user: User | null
  token: string | null
  refreshToken: string | null
  isLoading: boolean
  error: string | null
}

// Profile types
export type Profile = {
  id: string
  userId: string
  education: string
  skills: string[]
  experience: string
  interests: string[]
  certifications?: string[]
  preferredDomain?: string
  profileCompletion: number
}

// Goal types
export type Goal = {
  id: string
  userId: string
  title: string
  description: string
  category: string
  targetDate?: string
  status: 'active' | 'completed' | 'paused'
  progress: number
  createdAt: string
}

// Skill types
export type Skill = {
  id: string
  userId: string
  name: string
  level: 'beginner' | 'intermediate' | 'advanced'
  yearsOfExperience?: number
  proficiency: number
  endorsements: number
  createdAt: string
}

// Roadmap types
export type Roadmap = {
  id: string
  userId: string
  goalId: string
  title: string
  description: string
  weeks: number
  milestones: Milestone[]
  resources: Resource[]
  projects: Project[]
  confidenceScore: number
  createdAt: string
}

export type Milestone = {
  id: string
  title: string
  description: string
  week: number
  status: 'pending' | 'in-progress' | 'completed'
  skills: string[]
}

export type Resource = {
  id: string
  title: string
  type: 'course' | 'article' | 'video' | 'book'
  url: string
  duration?: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

export type Project = {
  id: string
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedDuration: string
  requiredSkills: string[]
  resources: string[]
}

// Analytics types
export type AnalyticsData = {
  roadmapActivation: number
  milestoneCompletion: number
  skillGrowth: number
  mentorApprovalRate: number
  goalRetention: number
}

// Pagination types
export type PaginationParams = {
  page: number
  limit: number
  sort?: string
  order?: 'asc' | 'desc'
}

export type PaginatedResponse<T> = {
  data: T[]
  total: number
  page: number
  limit: number
  pages: number
}

// API Response types
export type ApiResponse<T> = {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Notification types
export type Notification = {
  id: string
  userId: string
  title: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  read: boolean
  createdAt: string
}
