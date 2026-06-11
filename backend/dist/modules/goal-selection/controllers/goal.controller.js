"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeGoal = exports.patchGoal = exports.listGoals = exports.createGoal = void 0;
const goal_service_1 = require("../services/goal.service");
const response_helper_1 = require("../../../common/helpers/response.helper");
const createGoal = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const goal = await (0, goal_service_1.createCareerGoal)(req.user.id, req.body);
        return (0, response_helper_1.sendCreated)(res, goal, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.createGoal = createGoal;
const listGoals = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const goals = await (0, goal_service_1.getCareerGoals)(req.user.id);
        return (0, response_helper_1.sendSuccess)(res, goals, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.listGoals = listGoals;
const patchGoal = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const goal = await (0, goal_service_1.updateCareerGoal)(req.user.id, req.params.id, req.body);
        if (!goal) {
            return (0, response_helper_1.sendError)(res, 'NOT_FOUND', 'Goal not found', res.locals.requestId, [], 404);
        }
        return (0, response_helper_1.sendSuccess)(res, goal, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.patchGoal = patchGoal;
const removeGoal = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const deleted = await (0, goal_service_1.deleteCareerGoal)(req.user.id, req.params.id);
        if (!deleted) {
            return (0, response_helper_1.sendError)(res, 'NOT_FOUND', 'Goal not found', res.locals.requestId, [], 404);
        }
        return (0, response_helper_1.sendSuccess)(res, { message: 'Goal deleted successfully' }, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.removeGoal = removeGoal;
//# sourceMappingURL=goal.controller.js.map