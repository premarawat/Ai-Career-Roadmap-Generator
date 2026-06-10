import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const registerSchema = z
  .object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
    role: z.enum(['student', 'mentor']),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const profileSchema = z.object({
  education: z.string().min(1, 'Education is required'),
  skills: z.array(z.string()),
  experience: z.string().optional(),
  interests: z.array(z.string()),
  certifications: z.array(z.string()).optional(),
  preferredDomain: z.string().optional(),
})

export const goalSchema = z.object({
  title: z.string().min(1, 'Goal title is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  category: z.string().min(1, 'Category is required'),
  targetDate: z.date().optional(),
})

export const skillSchema = z.object({
  name: z.string().min(1, 'Skill name is required'),
  level: z.enum(['beginner', 'intermediate', 'advanced']),
  yearsOfExperience: z.number().min(0).optional(),
  proficiency: z.number().min(0).max(100).optional(),
})

export const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const emailVerificationSchema = z.object({
  code: z.string().length(6, 'Verification code must be 6 characters'),
})
