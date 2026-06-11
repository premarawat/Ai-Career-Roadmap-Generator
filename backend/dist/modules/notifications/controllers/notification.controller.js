"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchNotificationReadController = exports.getNotificationsController = void 0;
const notification_service_1 = require("../services/notification.service");
const response_helper_1 = require("../../../common/helpers/response.helper");
const getNotificationsController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const notifications = await (0, notification_service_1.getNotificationsForUser)(req.user.id);
        return (0, response_helper_1.sendSuccess)(res, notifications, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.getNotificationsController = getNotificationsController;
const patchNotificationReadController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const notification = await (0, notification_service_1.markNotificationRead)(req.user.id, req.params.id);
        if (!notification) {
            return (0, response_helper_1.sendError)(res, 'NOT_FOUND', 'Notification not found', res.locals.requestId, [], 404);
        }
        return (0, response_helper_1.sendSuccess)(res, notification, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.patchNotificationReadController = patchNotificationReadController;
//# sourceMappingURL=notification.controller.js.map