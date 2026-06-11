"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillRouter = void 0;
const express_1 = require("express");
const skill_controller_1 = require("../controllers/skill.controller");
const auth_middleware_1 = require("../../../middleware/auth.middleware");
const validate_middleware_1 = require("../../../middleware/validate.middleware");
const skill_schemas_1 = require("../schemas/skill.schemas");
exports.skillRouter = (0, express_1.Router)();
exports.skillRouter.post('/', auth_middleware_1.authenticate, (0, validate_middleware_1.validateRequest)(skill_schemas_1.createSkillSchema), skill_controller_1.createSkillController);
exports.skillRouter.get('/', auth_middleware_1.authenticate, skill_controller_1.getSkillController);
exports.skillRouter.patch('/:id', auth_middleware_1.authenticate, (0, validate_middleware_1.validateRequest)(skill_schemas_1.updateSkillSchema), skill_controller_1.patchSkillController);
exports.skillRouter.delete('/:id', auth_middleware_1.authenticate, skill_controller_1.deleteSkillController);
//# sourceMappingURL=skill.routes.js.map