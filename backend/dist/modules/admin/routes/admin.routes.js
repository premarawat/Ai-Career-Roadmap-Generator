"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = require("express");
const admin_controller_1 = require("../controllers/admin.controller");
const auth_middleware_1 = require("../../../middleware/auth.middleware");
const role_middleware_1 = require("../../../middleware/role.middleware");
const roles_1 = require("../../../common/constants/roles");
exports.adminRouter = (0, express_1.Router)();
exports.adminRouter.use(auth_middleware_1.authenticate, (0, role_middleware_1.authorize)([roles_1.Roles.ADMIN]));
exports.adminRouter.get('/users', admin_controller_1.getUsersController);
exports.adminRouter.patch('/users/:id', admin_controller_1.patchUserController);
exports.adminRouter.delete('/users/:id', admin_controller_1.deleteUserController);
exports.adminRouter.get('/audit-events', admin_controller_1.getAuditEventsController);
exports.adminRouter.get('/analytics', admin_controller_1.getAnalyticsController);
//# sourceMappingURL=admin.routes.js.map