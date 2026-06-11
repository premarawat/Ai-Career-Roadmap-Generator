"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmail = exports.resetPasswordController = exports.forgotPassword = exports.refresh = exports.logout = exports.login = exports.register = void 0;
const auth_service_1 = require("../services/auth.service");
const response_helper_1 = require("../../common/helpers/response.helper");
const register = async (req, res, next) => {
    try {
        const tokens = await (0, auth_service_1.registerUser)({
            ...req.body,
            createdBy: null
        });
        return (0, response_helper_1.sendCreated)(res, tokens, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.register = register;
const login = async (req, res, next) => {
    try {
        const tokens = await (0, auth_service_1.loginUser)(req.body.email, req.body.password);
        return (0, response_helper_1.sendSuccess)(res, tokens, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.login = login;
const logout = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'User session not found', res.locals.requestId, [], 401);
        }
        await (0, auth_service_1.logoutUser)(req.user.id);
        return (0, response_helper_1.sendSuccess)(res, { message: 'Logged out successfully' }, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.logout = logout;
const refresh = async (req, res, next) => {
    try {
        const tokens = await (0, auth_service_1.refreshTokens)(req.body.refreshToken);
        return (0, response_helper_1.sendSuccess)(res, tokens, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.refresh = refresh;
const forgotPassword = async (req, res, next) => {
    try {
        const token = await (0, auth_service_1.initiateForgotPassword)(req.body.email);
        return (0, response_helper_1.sendSuccess)(res, { resetToken: token }, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.forgotPassword = forgotPassword;
const resetPasswordController = async (req, res, next) => {
    try {
        await (0, auth_service_1.resetPassword)(req.body.token, req.body.password);
        return (0, response_helper_1.sendSuccess)(res, { message: 'Password reset successfully' }, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.resetPasswordController = resetPasswordController;
const verifyEmail = async (req, res, next) => {
    try {
        await (0, auth_service_1.verifyEmailToken)(req.query.token);
        return (0, response_helper_1.sendSuccess)(res, { message: 'Email verified successfully' }, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.verifyEmail = verifyEmail;
//# sourceMappingURL=auth.controller.js.map