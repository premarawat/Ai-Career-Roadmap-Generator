export const Roles = {
  STUDENT: 'Student',
  MENTOR: 'Career Mentor',
  PLACEMENT: 'Placement Officer',
  ADMIN: 'Career Content Administrator'
} as const;

export type Role = (typeof Roles)[keyof typeof Roles];
