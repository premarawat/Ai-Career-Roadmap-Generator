"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGapAnalysisController = exports.createGapAnalysisController = void 0;
const gap_analysis_service_1 = require("../services/gap-analysis.service");
const response_helper_1 = require("../../../common/helpers/response.helper");
const createGapAnalysisController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const analysis = await (0, gap_analysis_service_1.createGapAnalysis)(req.user.id, req.body.currentSkills, req.body.targetSkills);
        return (0, response_helper_1.sendCreated)(res, analysis, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.createGapAnalysisController = createGapAnalysisController;
const getGapAnalysisController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const analysis = await (0, gap_analysis_service_1.getGapAnalysisById)(req.user.id, req.params.id);
        if (!analysis) {
            return (0, response_helper_1.sendError)(res, 'NOT_FOUND', 'Gap analysis not found', res.locals.requestId, [], 404);
        }
        return (0, response_helper_1.sendSuccess)(res, analysis, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.getGapAnalysisController = getGapAnalysisController;
//# sourceMappingURL=gap-analysis.controller.js.map