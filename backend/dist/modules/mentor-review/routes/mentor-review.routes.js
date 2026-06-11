"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mentorReviewRouter = void 0;
const express_1 = require("express");
const mentor_review_controller_1 = require("../controllers/mentor-review.controller");
const auth_middleware_1 = require("../../../middleware/auth.middleware");
const validate_middleware_1 = require("../../../middleware/validate.middleware");
const mentor_review_schemas_1 = require("../schemas/mentor-review.schemas");
exports.mentorReviewRouter = (0, express_1.Router)();
exports.mentorReviewRouter.post('/', auth_middleware_1.authenticate, (0, validate_middleware_1.validateRequest)(mentor_review_schemas_1.createMentorReviewSchema), mentor_review_controller_1.createMentorReviewController);
exports.mentorReviewRouter.get('/', auth_middleware_1.authenticate, mentor_review_controller_1.getMentorReviewController);
exports.mentorReviewRouter.patch('/:id', auth_middleware_1.authenticate, (0, validate_middleware_1.validateRequest)(mentor_review_schemas_1.updateMentorReviewSchema), mentor_review_controller_1.patchMentorReviewController);
//# sourceMappingURL=mentor-review.routes.js.map