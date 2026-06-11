"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRouter = void 0;
const express_1 = require("express");
const project_controller_1 = require("../controllers/project.controller");
const auth_middleware_1 = require("../../../middleware/auth.middleware");
const validate_middleware_1 = require("../../../middleware/validate.middleware");
const project_schemas_1 = require("../schemas/project.schemas");
exports.projectRouter = (0, express_1.Router)();
exports.projectRouter.post('/', auth_middleware_1.authenticate, (0, validate_middleware_1.validateRequest)(project_schemas_1.createProjectSchema), project_controller_1.createProjectController);
exports.projectRouter.get('/', auth_middleware_1.authenticate, project_controller_1.getProjectsController);
//# sourceMappingURL=project.routes.js.map