"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoadmapModel = void 0;
const mongoose_1 = require("mongoose");
const RoadmapSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    careerGoal: { type: String, required: true },
    learningPath: [String],
    weeklyPlan: [
        {
            week: Number,
            tasks: [String]
        }
    ],
    milestones: [
        {
            title: String,
            description: String,
            dueWeek: Number,
            completed: Boolean
        }
    ],
    projectRecommendations: [String],
    aiMetadata: {
        promptVersion: String,
        model: String,
        confidence: Number
    },
    status: { type: String, default: 'active' },
    createdBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
}, { timestamps: true });
exports.RoadmapModel = (0, mongoose_1.model)('Roadmap', RoadmapSchema);
//# sourceMappingURL=Roadmap.model.js.map