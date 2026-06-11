"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSkillController = exports.patchSkillController = exports.getSkillController = exports.createSkillController = void 0;
const skill_service_1 = require("../services/skill.service");
const response_helper_1 = require("../../../common/helpers/response.helper");
const createSkillController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const skill = await (0, skill_service_1.createSkill)(req.user.id, req.body);
        return (0, response_helper_1.sendCreated)(res, skill, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.createSkillController = createSkillController;
const getSkillController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const skills = await (0, skill_service_1.getSkills)(req.user.id);
        return (0, response_helper_1.sendSuccess)(res, skills, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.getSkillController = getSkillController;
const patchSkillController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const skill = await (0, skill_service_1.updateSkill)(req.user.id, req.params.id, req.body);
        if (!skill) {
            return (0, response_helper_1.sendError)(res, 'NOT_FOUND', 'Skill not found', res.locals.requestId, [], 404);
        }
        return (0, response_helper_1.sendSuccess)(res, skill, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.patchSkillController = patchSkillController;
const deleteSkillController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const removed = await (0, skill_service_1.deleteSkill)(req.user.id, req.params.id);
        if (!removed) {
            return (0, response_helper_1.sendError)(res, 'NOT_FOUND', 'Skill not found', res.locals.requestId, [], 404);
        }
        return (0, response_helper_1.sendSuccess)(res, { message: 'Skill removed' }, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.deleteSkillController = deleteSkillController;
//# sourceMappingURL=skill.controller.js.map