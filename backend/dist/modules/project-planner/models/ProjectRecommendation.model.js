"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRecommendationModel = void 0;
const mongoose_1 = require("mongoose");
const ProjectRecommendationSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    careerGoal: { type: String, required: true },
    skillLevel: { type: String, required: true },
    roadmapStage: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    suggestions: [String],
    status: { type: String, default: 'active' },
    createdBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
}, { timestamps: true });
exports.ProjectRecommendationModel = (0, mongoose_1.model)('ProjectRecommendation', ProjectRecommendationSchema);
//# sourceMappingURL=ProjectRecommendation.model.js.map