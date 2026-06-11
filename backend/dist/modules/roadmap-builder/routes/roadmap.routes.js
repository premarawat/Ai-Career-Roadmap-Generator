"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roadmapRouter = void 0;
const express_1 = require("express");
const roadmap_controller_1 = require("../controllers/roadmap.controller");
const auth_middleware_1 = require("../../../middleware/auth.middleware");
const validate_middleware_1 = require("../../../middleware/validate.middleware");
const roadmap_schemas_1 = require("../schemas/roadmap.schemas");
exports.roadmapRouter = (0, express_1.Router)();
exports.roadmapRouter.post('/generate', auth_middleware_1.authenticate, (0, validate_middleware_1.validateRequest)(roadmap_schemas_1.createRoadmapSchema), roadmap_controller_1.generateRoadmapController);
exports.roadmapRouter.get('/:id', auth_middleware_1.authenticate, (0, validate_middleware_1.validateRequest)(roadmap_schemas_1.roadmapIdSchema), roadmap_controller_1.getRoadmapController);
exports.roadmapRouter.patch('/:id', auth_middleware_1.authenticate, (0, validate_middleware_1.validateRequest)(roadmap_schemas_1.updateRoadmapSchema), roadmap_controller_1.patchRoadmapController);
//# sourceMappingURL=roadmap.routes.js.map