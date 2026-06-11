import { Request, Response, NextFunction } from 'express';
import { sendError } from '../common/helpers/response.helper';
import { Role } from '../common/constants/roles';

export const authorize = (allowedRoles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const userRole = req.user?.role as Role | undefined;

    if (!userRole || !allowedRoles.includes(userRole)) {
      sendError(res, 'FORBIDDEN', 'Insufficient permissions', res.locals.requestId ?? '', [], 403);
      return;
    }

    next();
  };
};
