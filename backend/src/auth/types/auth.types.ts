import { Role } from '../../common/constants/roles';

export interface UserPayload {
  id: string;
  email: string;
  role: Role;
}

export interface JwtTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthUser {
  id: string;
  email: string;
  role: Role;
  firstName: string;
  lastName: string;
}

export interface AuthResponse {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
}
