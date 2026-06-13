import bcrypt from 'bcryptjs';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import crypto from 'crypto';
import { UserModel, IUser } from '../models/User.model';
import { env } from '../../config/env';
import { AuthResponse, JwtTokens, UserPayload } from '../types/auth.types';

const signAccessToken = (payload: UserPayload): string => {
  return sign(payload as any, env.jwtAccessSecret as any, { expiresIn: env.accessTokenExpiresIn as any } as any);
};

const signRefreshToken = (payload: UserPayload): string => {
  return sign(payload as any, env.jwtRefreshSecret as any, { expiresIn: env.refreshTokenExpiresIn as any } as any);
};

export const registerUser = async (input: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: IUser['role'];
  createdBy?: string | null;
}): Promise<AuthResponse> => {
  const existingUser = await UserModel.findOne({ email: input.email });
  if (existingUser) {
    throw Object.assign(new Error('Email already in use'), { code: 'USER_EXISTS', status: 409 });
  }

  const hashedPassword = await bcrypt.hash(input.password, 12);
  const user = await UserModel.create({
    email: input.email,
    password: hashedPassword,
    firstName: input.firstName,
    lastName: input.lastName,
    role: input.role,
    createdBy: input.createdBy ?? null,
    updatedBy: input.createdBy ?? null
  });

  const payload: UserPayload = { id: user.id, email: user.email, role: user.role };
  const accessToken = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload);

  user.refreshToken = refreshToken;
  await user.save();

  return {
    user: { id: user.id, email: user.email, role: user.role, firstName: user.firstName, lastName: user.lastName },
    accessToken,
    refreshToken
  };
};

export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw Object.assign(new Error('Invalid credentials'), { code: 'INVALID_CREDENTIALS', status: 401 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw Object.assign(new Error('Invalid credentials'), { code: 'INVALID_CREDENTIALS', status: 401 });
  }

  const payload: UserPayload = { id: user.id, email: user.email, role: user.role };
  const accessToken = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload);

  user.refreshToken = refreshToken;
  await user.save();

  return {
    user: { id: user.id, email: user.email, role: user.role, firstName: user.firstName, lastName: user.lastName },
    accessToken,
    refreshToken
  };
};

export const logoutUser = async (userId: string): Promise<void> => {
  await UserModel.findByIdAndUpdate(userId, { refreshToken: null, updatedBy: userId });
};

export const refreshTokens = async (token: string): Promise<JwtTokens> => {
  try {
    const decoded = verify(token, env.jwtRefreshSecret) as JwtPayload & UserPayload;
    const user = await UserModel.findById(decoded.id);
    if (!user || user.refreshToken !== token) {
      throw new Error('Invalid refresh token');
    }

    const payload: UserPayload = { id: user.id, email: user.email, role: user.role };
    const accessToken = signAccessToken(payload);
    const refreshToken = signRefreshToken(payload);

    user.refreshToken = refreshToken;
    await user.save();

    return { accessToken, refreshToken };
  } catch (error) {
    throw Object.assign(new Error('Refresh token invalid or expired'), { code: 'INVALID_REFRESH_TOKEN', status: 401 });
  }
};

export const initiateForgotPassword = async (email: string): Promise<string> => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw Object.assign(new Error('User not found'), { code: 'USER_NOT_FOUND', status: 404 });
  }

  const resetToken = crypto.randomBytes(32).toString('hex');
  const resetHash = await bcrypt.hash(resetToken, 10);

  user.set('passwordResetToken', resetHash);
  user.set('passwordResetExpires', Date.now() + 3600000);
  await user.save();

  return resetToken;
};

export const resetPassword = async (token: string, password: string): Promise<void> => {
  const users = await UserModel.find({ passwordResetExpires: { $gt: Date.now() } });
  const user = users.find((item) => {
    const storedHash = item.get('passwordResetToken');
    return typeof storedHash === 'string' && bcrypt.compareSync(token, storedHash);
  });

  if (!user) {
    throw Object.assign(new Error('Password reset invalid or expired'), { code: 'INVALID_RESET_TOKEN', status: 400 });
  }

  user.password = await bcrypt.hash(password, 12);
  user.passwordResetToken = null;
  user.passwordResetExpires = null;
  user.updatedBy = user.id;
  await user.save();
};

export const verifyEmailToken = async (token: string): Promise<void> => {
  const users = await UserModel.find();
  const user = users.find((item) => {
    const storedHash = item.get('emailVerificationToken');
    return typeof storedHash === 'string' && bcrypt.compareSync(token, storedHash);
  });

  if (!user) {
    throw Object.assign(new Error('Email verification token invalid or expired'), { code: 'INVALID_VERIFICATION_TOKEN', status: 400 });
  }

  user.emailVerified = true;
  user.emailVerificationToken = null;
  user.updatedBy = user.id;
  await user.save();
};
