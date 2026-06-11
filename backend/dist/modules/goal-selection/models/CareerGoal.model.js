"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CareerGoalModel = void 0;
const mongoose_1 = require("mongoose");
const CareerGoalSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    targetRole: { type: String, required: true },
    timeline: { type: String, required: true },
    status: { type: String, default: 'active' },
    createdBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
}, { timestamps: true });
exports.CareerGoalModel = (0, mongoose_1.model)('CareerGoal', CareerGoalSchema);
//# sourceMappingURL=CareerGoal.model.js.map