"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectsController = exports.createProjectController = void 0;
const project_service_1 = require("../services/project.service");
const response_helper_1 = require("../../../common/helpers/response.helper");
const createProjectController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const project = await (0, project_service_1.createProjectRecommendation)(req.user.id, req.body.careerGoal, req.body.skillLevel, req.body.roadmapStage);
        return (0, response_helper_1.sendCreated)(res, project, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.createProjectController = createProjectController;
const getProjectsController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const projects = await (0, project_service_1.getProjectRecommendations)(req.user.id);
        return (0, response_helper_1.sendSuccess)(res, projects, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.getProjectsController = getProjectsController;
//# sourceMappingURL=project.controller.js.map