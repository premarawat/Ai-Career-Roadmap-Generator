"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationRouter = void 0;
const express_1 = require("express");
const notification_controller_1 = require("../controllers/notification.controller");
const auth_middleware_1 = require("../../../middleware/auth.middleware");
const validate_middleware_1 = require("../../../middleware/validate.middleware");
const notification_schemas_1 = require("../schemas/notification.schemas");
exports.notificationRouter = (0, express_1.Router)();
exports.notificationRouter.get('/', auth_middleware_1.authenticate, notification_controller_1.getNotificationsController);
exports.notificationRouter.patch('/:id/read', auth_middleware_1.authenticate, (0, validate_middleware_1.validateRequest)(notification_schemas_1.updateNotificationReadSchema), notification_controller_1.patchNotificationReadController);
//# sourceMappingURL=notifications.routes.js.map