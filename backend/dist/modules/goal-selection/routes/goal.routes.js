"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goalRouter = void 0;
const express_1 = require("express");
const goal_controller_1 = require("../controllers/goal.controller");
const auth_middleware_1 = require("../../../middleware/auth.middleware");
const validate_middleware_1 = require("../../../middleware/validate.middleware");
const goal_schemas_1 = require("../schemas/goal.schemas");
exports.goalRouter = (0, express_1.Router)();
exports.goalRouter.post('/', auth_middleware_1.authenticate, (0, validate_middleware_1.validateRequest)(goal_schemas_1.createGoalSchema), goal_controller_1.createGoal);
exports.goalRouter.get('/', auth_middleware_1.authenticate, goal_controller_1.listGoals);
exports.goalRouter.patch('/:id', auth_middleware_1.authenticate, (0, validate_middleware_1.validateRequest)(goal_schemas_1.updateGoalSchema), goal_controller_1.patchGoal);
exports.goalRouter.delete('/:id', auth_middleware_1.authenticate, goal_controller_1.removeGoal);
//# sourceMappingURL=goal.routes.js.map