export const Roles = {
  STUDENT: 'student',
  MENTOR: 'mentor',
  PLACEMENT: 'placement_officer',
  ADMIN: 'admin'
} as const;

export type Role = (typeof Roles)[keyof typeof Roles];
