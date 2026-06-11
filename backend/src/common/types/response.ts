export interface ApiResponse<T = unknown> {
  data: T | null;
  meta: {
    requestId: string;
    timestamp: string;
  };
  error: {
    code: string;
    message: string;
    details?: unknown[];
  } | null;
}
