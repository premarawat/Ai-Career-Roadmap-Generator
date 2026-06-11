"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchCareerProfile = exports.fetchCareerProfile = exports.createCareerProfile = void 0;
const career_profile_service_1 = require("../services/career-profile.service");
const response_helper_1 = require("../../../common/helpers/response.helper");
const createCareerProfile = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const profile = await (0, career_profile_service_1.createOrUpdateProfile)(req.user.id, req.body);
        return (0, response_helper_1.sendCreated)(res, profile, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.createCareerProfile = createCareerProfile;
const fetchCareerProfile = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const profile = await (0, career_profile_service_1.getProfileByUserId)(req.user.id);
        return (0, response_helper_1.sendSuccess)(res, profile, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.fetchCareerProfile = fetchCareerProfile;
const patchCareerProfile = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const profile = await (0, career_profile_service_1.createOrUpdateProfile)(req.user.id, req.body);
        return (0, response_helper_1.sendSuccess)(res, profile, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.patchCareerProfile = patchCareerProfile;
//# sourceMappingURL=career-profile.controller.js.map