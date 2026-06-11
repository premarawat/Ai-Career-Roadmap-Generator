"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfileByUserId = exports.createOrUpdateProfile = void 0;
const CareerProfile_model_1 = require("../models/CareerProfile.model");
const createOrUpdateProfile = async (userId, payload) => {
    const existing = await CareerProfile_model_1.CareerProfileModel.findOne({ userId });
    if (existing) {
        Object.assign(existing, payload, { updatedBy: userId, version: existing.version + 1 });
        return existing.save();
    }
    return CareerProfile_model_1.CareerProfileModel.create({ ...payload, userId, createdBy: userId, updatedBy: userId });
};
exports.createOrUpdateProfile = createOrUpdateProfile;
const getProfileByUserId = async (userId) => {
    return CareerProfile_model_1.CareerProfileModel.findOne({ userId });
};
exports.getProfileByUserId = getProfileByUserId;
//# sourceMappingURL=career-profile.service.js.map