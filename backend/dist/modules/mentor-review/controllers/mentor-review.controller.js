"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchMentorReviewController = exports.getMentorReviewController = exports.createMentorReviewController = void 0;
const mentor_review_service_1 = require("../services/mentor-review.service");
const response_helper_1 = require("../../../common/helpers/response.helper");
const createMentorReviewController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const review = await (0, mentor_review_service_1.createMentorReview)(req.user.id, req.body);
        return (0, response_helper_1.sendCreated)(res, review, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.createMentorReviewController = createMentorReviewController;
const getMentorReviewController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const reviews = await (0, mentor_review_service_1.getMentorReviews)(req.user.id);
        return (0, response_helper_1.sendSuccess)(res, reviews, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.getMentorReviewController = getMentorReviewController;
const patchMentorReviewController = async (req, res, next) => {
    try {
        if (!req.user) {
            return (0, response_helper_1.sendError)(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
        }
        const review = await (0, mentor_review_service_1.updateMentorReview)(req.user.id, req.params.id, req.body);
        if (!review) {
            return (0, response_helper_1.sendError)(res, 'NOT_FOUND', 'Mentor review not found', res.locals.requestId, [], 404);
        }
        return (0, response_helper_1.sendSuccess)(res, review, res.locals.requestId);
    }
    catch (error) {
        return next(error);
    }
};
exports.patchMentorReviewController = patchMentorReviewController;
//# sourceMappingURL=mentor-review.controller.js.map