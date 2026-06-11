"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
const response_helper_1 = require("../common/helpers/response.helper");
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith('Bearer ') ? authHeader.replace('Bearer ', '') : undefined;
    if (!token) {
        (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authorization header missing', res.locals.requestId ?? '', [], 401);
        return;
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, env_1.env.jwtAccessSecret);
        req.user = payload;
        next();
    }
    catch (error) {
        (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Invalid or expired token', res.locals.requestId ?? '', [], 401);
        return;
    }
};
exports.authenticate = authenticate;
//# sourceMappingURL=auth.middleware.js.map