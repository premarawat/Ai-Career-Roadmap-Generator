import httpClient from '@/lib/http/client'
import { API_ENDPOINTS } from '@/constants'

// Auth API
export const authAPI = {
  login: (email, password) =>
    httpClient.post(API_ENDPOINTS.AUTH.LOGIN, { email, password }),
  register: (data) => httpClient.post(API_ENDPOINTS.AUTH.REGISTER, data),
  logout: () => httpClient.post(API_ENDPOINTS.AUTH.LOGOUT),
  verifyEmail: (code) =>
    httpClient.post(API_ENDPOINTS.AUTH.VERIFY_EMAIL, { code }),
  forgotPassword: (email) =>
    httpClient.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, { email }),
  resetPassword: (token, password) =>
    httpClient.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, { token, password }),
  me: () => httpClient.get(API_ENDPOINTS.AUTH.ME),
  refreshToken: (refreshToken) =>
    httpClient.post(API_ENDPOINTS.AUTH.REFRESH_TOKEN, { refreshToken }),
}

// Profile API
export const profileAPI = {
  get: () => httpClient.get(API_ENDPOINTS.PROFILE.GET),
  getById: (id) =>
    httpClient.get(API_ENDPOINTS.PROFILE.GET_BY_ID.replace(':id', id)),
  update: (data) => httpClient.patch(API_ENDPOINTS.PROFILE.UPDATE, data),
}

// Goals API
export const goalsAPI = {
  list: (params) => httpClient.get(API_ENDPOINTS.GOALS.LIST, { params }),
  create: (data) => httpClient.post(API_ENDPOINTS.GOALS.CREATE, data),
  get: (id) => httpClient.get(API_ENDPOINTS.GOALS.GET.replace(':id', id)),
  update: (id, data) =>
    httpClient.patch(API_ENDPOINTS.GOALS.UPDATE.replace(':id', id), data),
  delete: (id) =>
    httpClient.delete(API_ENDPOINTS.GOALS.DELETE.replace(':id', id)),
}

// Skills API
export const skillsAPI = {
  list: (params) => httpClient.get(API_ENDPOINTS.SKILLS.LIST, { params }),
  create: (data) => httpClient.post(API_ENDPOINTS.SKILLS.CREATE, data),
  get: (id) => httpClient.get(API_ENDPOINTS.SKILLS.GET.replace(':id', id)),
  update: (id, data) =>
    httpClient.patch(API_ENDPOINTS.SKILLS.UPDATE.replace(':id', id), data),
  delete: (id) =>
    httpClient.delete(API_ENDPOINTS.SKILLS.DELETE.replace(':id', id)),
}

// Roadmap API
export const roadmapAPI = {
  generate: (data) => httpClient.post(API_ENDPOINTS.ROADMAP.GENERATE, data),
  get: (id) => httpClient.get(API_ENDPOINTS.ROADMAP.GET.replace(':id', id)),
  list: (params) => httpClient.get(API_ENDPOINTS.ROADMAP.LIST, { params }),
  update: (id, data) =>
    httpClient.patch(API_ENDPOINTS.ROADMAP.UPDATE.replace(':id', id), data),
}

// Gap Analysis API
export const gapAnalysisAPI = {
  create: (data) => httpClient.post(API_ENDPOINTS.GAP_ANALYSIS.CREATE, data),
  get: (id) => httpClient.get(API_ENDPOINTS.GAP_ANALYSIS.GET.replace(':id', id)),
}

// Projects API
export const projectsAPI = {
  recommend: (data) => httpClient.post(API_ENDPOINTS.PROJECTS.RECOMMEND, data),
  list: (params) => httpClient.get(API_ENDPOINTS.PROJECTS.LIST, { params }),
}

// Mentor Review API
export const mentorReviewAPI = {
  create: (data) => httpClient.post(API_ENDPOINTS.MENTOR_REVIEW.CREATE, data),
  list: (params) => httpClient.get(API_ENDPOINTS.MENTOR_REVIEW.LIST, { params }),
  update: (id, data) => httpClient.patch(API_ENDPOINTS.MENTOR_REVIEW.UPDATE.replace(':id', id), data),
}

// Notifications API
export const notificationsAPI = {
  list: (params) => httpClient.get('/notifications', { params }),
  markAsRead: (id) => httpClient.patch(`/notifications/${id}/read`),
}

// Analytics API
export const analyticsAPI = {
  dashboard: () => httpClient.get(API_ENDPOINTS.ANALYTICS.DASHBOARD),
  progress: (params) =>
    httpClient.get(API_ENDPOINTS.ANALYTICS.PROGRESS, { params }),
  skillsGrowth: (params) =>
    httpClient.get(API_ENDPOINTS.ANALYTICS.SKILLS_GROWTH, { params }),
}
