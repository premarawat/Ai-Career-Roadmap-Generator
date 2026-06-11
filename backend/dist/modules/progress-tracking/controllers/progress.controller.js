"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchProgressController = exports.getProgressController = exports.createProgressController = void 0;
const progress_service_1 = require("../services/progress.service");
const response_helper_1 = require("../../../common/helpers/response.helper");
const createProgressController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const progress = await (0, progress_service_1.createProgressUpdate)(req.user.id, req.body);
        return (0, response_helper_1.sendCreated)(res, progress, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.createProgressController = createProgressController;
const getProgressController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const progress = await (0, progress_service_1.getProgressUpdates)(req.user.id);
        return (0, response_helper_1.sendSuccess)(res, progress, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.getProgressController = getProgressController;
const patchProgressController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const progress = await (0, progress_service_1.updateProgressUpdate)(req.user.id, req.params.id, req.body);
        if (!progress) {
            return (0, response_helper_1.sendError)(res, 'NOT_FOUND', 'Progress entry not found', res.locals.requestId, [], 404);
        }
        return (0, response_helper_1.sendSuccess)(res, progress, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.patchProgressController = patchProgressController;
//# sourceMappingURL=progress.controller.js.map