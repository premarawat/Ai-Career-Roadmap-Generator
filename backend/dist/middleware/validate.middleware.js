"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const response_helper_1 = require("../common/helpers/response.helper");
const validateRequest = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse({
            body: req.body,
            query: req.query,
            params: req.params
        });
        if (!result.success) {
            const errors = result.error.errors.map((issue) => ({ path: issue.path.join('.'), message: issue.message }));
            (0, response_helper_1.sendError)(res, 'VALIDATION_ERROR', 'Request validation failed', res.locals.requestId ?? '', errors, 422);
            return;
        }
        Object.assign(req, result.data);
        next();
    };
};
exports.validateRequest = validateRequest;
//# sourceMappingURL=validate.middleware.js.map