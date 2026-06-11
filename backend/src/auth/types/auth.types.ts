export interface UserPayload {
  id: string;
  email: string;
  role: string;
}

export interface JwtTokens {
  accessToken: string;
  refreshToken: string;
}
