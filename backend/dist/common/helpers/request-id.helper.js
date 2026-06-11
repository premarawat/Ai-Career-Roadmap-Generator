"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestIdMiddleware = void 0;
const uuid_1 = require("uuid");
const env_1 = require("../../config/env");
const requestIdMiddleware = (req, res, next) => {
    const requestId = req.headers[env_1.env.requestIdHeader] ?? (0, uuid_1.v4)();
    res.locals.requestId = requestId;
    req.headers[env_1.env.requestIdHeader] = requestId;
    next();
};
exports.requestIdMiddleware = requestIdMiddleware;
//# sourceMappingURL=request-id.helper.js.map