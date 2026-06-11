import { Request, Response, NextFunction } from 'express';
import { AuditEventModel } from '../modules/admin/models/AuditEvent.model';

export const auditMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const event = {
      action: `${req.method} ${req.path}`,
      userId: req.user?.id ?? null,
      role: req.user?.role ?? 'Anonymous',
      ip: req.ip,
      metadata: {
        body: req.body,
        query: req.query,
        params: req.params
      }
    };

    await AuditEventModel.create(event);
  } catch (error) {
    // Keep request flowing even if audit logging fails
    console.warn('Audit event failed', error);
  }

  next();
};
