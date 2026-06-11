"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProgressUpdate = exports.getProgressUpdates = exports.createProgressUpdate = void 0;
const ProgressUpdate_model_1 = require("../models/ProgressUpdate.model");
const createProgressUpdate = async (userId, payload) => {
    return ProgressUpdate_model_1.ProgressUpdateModel.create({ ...payload, userId, createdBy: userId, updatedBy: userId });
};
exports.createProgressUpdate = createProgressUpdate;
const getProgressUpdates = async (userId) => {
    return ProgressUpdate_model_1.ProgressUpdateModel.find({ userId });
};
exports.getProgressUpdates = getProgressUpdates;
const updateProgressUpdate = async (userId, id, payload) => {
    const update = await ProgressUpdate_model_1.ProgressUpdateModel.findOne({ _id: id, userId });
    if (!update)
        return null;
    Object.assign(update, payload, { updatedBy: userId, version: update.version + 1 });
    return update.save();
};
exports.updateProgressUpdate = updateProgressUpdate;
//# sourceMappingURL=progress.service.js.map