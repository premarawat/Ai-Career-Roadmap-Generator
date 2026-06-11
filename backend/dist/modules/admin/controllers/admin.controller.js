"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnalyticsController = exports.getAuditEventsController = exports.deleteUserController = exports.patchUserController = exports.getUsersController = void 0;
const admin_service_1 = require("../services/admin.service");
const admin_service_2 = require("../services/admin.service");
const response_helper_1 = require("../../../common/helpers/response.helper");
const getUsersController = async (req, res, next) => {
    try {
        const users = await (0, admin_service_1.getUsers)();
        return (0, response_helper_1.sendSuccess)(res, users, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.getUsersController = getUsersController;
const patchUserController = async (req, res, next) => {
    try {
        const user = await (0, admin_service_1.updateUser)(req.params.id, req.body, req.user?.id ?? null);
        if (!user) {
            return (0, response_helper_1.sendError)(res, 'NOT_FOUND', 'User not found', res.locals.requestId, [], 404);
        }
        return (0, response_helper_1.sendSuccess)(res, user, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.patchUserController = patchUserController;
const deleteUserController = async (req, res, next) => {
    try {
        const deleted = await (0, admin_service_1.removeUser)(req.params.id);
        if (!deleted) {
            return (0, response_helper_1.sendError)(res, 'NOT_FOUND', 'User not found', res.locals.requestId, [], 404);
        }
        return (0, response_helper_1.sendSuccess)(res, { message: 'User deleted' }, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.deleteUserController = deleteUserController;
const getAuditEventsController = async (req, res, next) => {
    try {
        const events = await (0, admin_service_2.getAuditEvents)();
        return (0, response_helper_1.sendSuccess)(res, events, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.getAuditEventsController = getAuditEventsController;
const getAnalyticsController = async (req, res, next) => {
    try {
        const events = await (0, admin_service_2.getAnalyticsEvents)();
        return (0, response_helper_1.sendSuccess)(res, events, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.getAnalyticsController = getAnalyticsController;
//# sourceMappingURL=admin.controller.js.map