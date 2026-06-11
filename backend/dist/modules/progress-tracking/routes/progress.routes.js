"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.progressRouter = void 0;
const express_1 = require("express");
const progress_controller_1 = require("../controllers/progress.controller");
const auth_middleware_1 = require("../../../middleware/auth.middleware");
const validate_middleware_1 = require("../../../middleware/validate.middleware");
const progress_schemas_1 = require("../schemas/progress.schemas");
exports.progressRouter = (0, express_1.Router)();
exports.progressRouter.post('/', auth_middleware_1.authenticate, (0, validate_middleware_1.validateRequest)(progress_schemas_1.createProgressSchema), progress_controller_1.createProgressController);
exports.progressRouter.get('/', auth_middleware_1.authenticate, progress_controller_1.getProgressController);
exports.progressRouter.patch('/:id', auth_middleware_1.authenticate, (0, validate_middleware_1.validateRequest)(progress_schemas_1.updateProgressSchema), progress_controller_1.patchProgressController);
//# sourceMappingURL=progress.routes.js.map