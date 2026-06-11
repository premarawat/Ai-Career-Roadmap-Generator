"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CareerProfileModel = void 0;
const mongoose_1 = require("mongoose");
const CareerProfileSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    education: [
        {
            institution: { type: String, required: true },
            degree: { type: String, required: true },
            field: { type: String, required: true },
            startYear: { type: Number, required: true },
            endYear: { type: Number }
        }
    ],
    skills: [{ name: String, level: String }],
    certifications: [
        {
            name: String,
            issuer: String,
            earnedAt: Date,
            evidenceUrl: String
        }
    ],
    interests: [String],
    experience: [
        {
            company: String,
            role: String,
            duration: String,
            description: String
        }
    ],
    status: { type: String, default: 'active' },
    createdBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
}, { timestamps: true });
exports.CareerProfileModel = (0, mongoose_1.model)('CareerProfile', CareerProfileSchema);
//# sourceMappingURL=CareerProfile.model.js.map