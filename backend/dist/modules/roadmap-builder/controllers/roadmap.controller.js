"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchRoadmapController = exports.getRoadmapController = exports.generateRoadmapController = void 0;
const roadmap_service_1 = require("../services/roadmap.service");
const response_helper_1 = require("../../../common/helpers/response.helper");
const generateRoadmapController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const roadmap = await (0, roadmap_service_1.generateRoadmap)(req.user.id, req.body.careerGoal, req.body.currentSkills, req.body.targetSkills);
        return (0, response_helper_1.sendCreated)(res, roadmap, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.generateRoadmapController = generateRoadmapController;
const getRoadmapController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const roadmap = await (0, roadmap_service_1.getRoadmap)(req.user.id, req.params.id);
        if (!roadmap) {
            return (0, response_helper_1.sendError)(res, 'NOT_FOUND', 'Roadmap not found', res.locals.requestId, [], 404);
        }
        return (0, response_helper_1.sendSuccess)(res, roadmap, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.getRoadmapController = getRoadmapController;
const patchRoadmapController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const roadmap = await (0, roadmap_service_1.updateRoadmap)(req.user.id, req.params.id, req.body);
        if (!roadmap) {
            return (0, response_helper_1.sendError)(res, 'NOT_FOUND', 'Roadmap not found', res.locals.requestId, [], 404);
        }
        return (0, response_helper_1.sendSuccess)(res, roadmap, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.patchRoadmapController = patchRoadmapController;
//# sourceMappingURL=roadmap.controller.js.map