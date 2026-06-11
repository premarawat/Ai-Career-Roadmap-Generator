"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const response_helper_1 = require("../common/helpers/response.helper");
const authorize = (allowedRoles) => {
    return (req, res, next) => {
        const userRole = req.user?.role;
        if (!userRole || !allowedRoles.includes(userRole)) {
            (0, response_helper_1.sendError)(res, 'FORBIDDEN', 'Insufficient permissions', res.locals.requestId ?? '', [], 403);
            return;
        }
        next();
    };
};
exports.authorize = authorize;
//# sourceMappingURL=role.middleware.js.map