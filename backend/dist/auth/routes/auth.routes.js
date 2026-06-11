"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const validate_middleware_1 = require("../../middleware/validate.middleware");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const auth_schemas_1 = require("../schemas/auth.schemas");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post('/register', (0, validate_middleware_1.validateRequest)(auth_schemas_1.registerSchema), auth_controller_1.register);
exports.authRouter.post('/login', (0, validate_middleware_1.validateRequest)(auth_schemas_1.loginSchema), auth_controller_1.login);
exports.authRouter.post('/logout', auth_middleware_1.authenticate, auth_controller_1.logout);
exports.authRouter.post('/refresh', (0, validate_middleware_1.validateRequest)(auth_schemas_1.refreshTokenSchema), auth_controller_1.refresh);
exports.authRouter.post('/forgot-password', (0, validate_middleware_1.validateRequest)(auth_schemas_1.forgotPasswordSchema), auth_controller_1.forgotPassword);
exports.authRouter.post('/reset-password', (0, validate_middleware_1.validateRequest)(auth_schemas_1.resetPasswordSchema), auth_controller_1.resetPasswordController);
exports.authRouter.get('/verify-email', (0, validate_middleware_1.validateRequest)(auth_schemas_1.verifyEmailSchema), auth_controller_1.verifyEmail);
//# sourceMappingURL=auth.routes.js.map