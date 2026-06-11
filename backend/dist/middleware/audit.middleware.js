"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditMiddleware = void 0;
const AuditEvent_model_1 = require("../modules/admin/models/AuditEvent.model");
const auditMiddleware = async (req, res, next) => {
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
        await AuditEvent_model_1.AuditEventModel.create(event);
    }
    catch (error) {
        // Keep request flowing even if audit logging fails
        console.warn('Audit event failed', error);
    }
    next();
};
exports.auditMiddleware = auditMiddleware;
//# sourceMappingURL=audit.middleware.js.map