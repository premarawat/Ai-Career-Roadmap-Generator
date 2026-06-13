import { z } from 'zod';
import { Roles } from '../../common/constants/roles';

export const registerSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    role: z.nativeEnum(Roles),
    resumeUrl: z.string().url().optional(),
    confirmPassword: z.string().optional()  // accepted but ignored — stripped before DB write
  })
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8)
  })
});

export const refreshTokenSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1)
  })
});

export const forgotPasswordSchema = z.object({
  body: z.object({
    email: z.string().email()
  })
});

export const resetPasswordSchema = z.object({
  body: z.object({
    token: z.string().min(1),
    password: z.string().min(8)
  })
});

export const verifyEmailSchema = z.object({
  query: z.object({
    token: z.string().min(1)
  })
});
