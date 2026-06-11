"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MentorCommentModel = void 0;
const mongoose_1 = require("mongoose");
const MentorCommentSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    mentorId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    roadmapId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Roadmap', required: true },
    comment: { type: String, required: true },
    feedback: { type: String, required: true },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    statusReason: { type: String },
    createdBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
}, { timestamps: true });
exports.MentorCommentModel = (0, mongoose_1.model)('MentorComment', MentorCommentSchema);
//# sourceMappingURL=MentorComment.model.js.map