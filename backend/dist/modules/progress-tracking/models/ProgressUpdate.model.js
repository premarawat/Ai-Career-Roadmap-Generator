"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressUpdateModel = void 0;
const mongoose_1 = require("mongoose");
const ProgressUpdateSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    completedSkills: [String],
    completedMilestones: [String],
    completedProjects: [String],
    completedCertifications: [String],
    status: { type: String, default: 'active' },
    createdBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
}, { timestamps: true });
exports.ProgressUpdateModel = (0, mongoose_1.model)('ProgressUpdate', ProgressUpdateSchema);
//# sourceMappingURL=ProgressUpdate.model.js.map