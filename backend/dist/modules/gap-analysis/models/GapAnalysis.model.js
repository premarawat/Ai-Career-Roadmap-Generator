"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GapAnalysisModel = void 0;
const mongoose_1 = require("mongoose");
const GapAnalysisSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    currentSkills: [String],
    targetSkills: [String],
    missingSkills: [String],
    readinessScore: { type: Number, default: 0 },
    priorityAreas: [String],
    status: { type: String, default: 'active' },
    createdBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
}, { timestamps: true });
exports.GapAnalysisModel = (0, mongoose_1.model)('GapAnalysis', GapAnalysisSchema);
//# sourceMappingURL=GapAnalysis.model.js.map