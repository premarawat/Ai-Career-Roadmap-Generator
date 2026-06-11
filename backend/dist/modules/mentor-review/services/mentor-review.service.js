"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMentorReview = exports.getMentorReviews = exports.createMentorReview = void 0;
const MentorComment_model_1 = require("../models/MentorComment.model");
const createMentorReview = async (userId, payload) => {
    return MentorComment_model_1.MentorCommentModel.create({ ...payload, userId, createdBy: userId, updatedBy: userId });
};
exports.createMentorReview = createMentorReview;
const getMentorReviews = async (userId) => {
    return MentorComment_model_1.MentorCommentModel.find({ userId });
};
exports.getMentorReviews = getMentorReviews;
const updateMentorReview = async (userId, id, payload) => {
    const review = await MentorComment_model_1.MentorCommentModel.findOne({ _id: id, userId });
    if (!review)
        return null;
    Object.assign(review, payload, { updatedBy: userId, version: review.version + 1 });
    return review.save();
};
exports.updateMentorReview = updateMentorReview;
//# sourceMappingURL=mentor-review.service.js.map