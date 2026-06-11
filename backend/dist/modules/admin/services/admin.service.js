"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnalyticsEvents = exports.getAuditEvents = exports.removeUser = exports.updateUser = exports.getUsers = void 0;
const User_model_1 = require("../../../auth/models/User.model");
const AuditEvent_model_1 = require("../models/AuditEvent.model");
const AnalyticsEvent_model_1 = require("../models/AnalyticsEvent.model");
const getUsers = async () => User_model_1.UserModel.find();
exports.getUsers = getUsers;
const updateUser = async (id, payload, updatedBy) => {
    const user = await User_model_1.UserModel.findById(id);
    if (!user)
        return null;
    Object.assign(user, payload, { updatedBy, version: user.version + 1 });
    return user.save();
};
exports.updateUser = updateUser;
const removeUser = async (id) => {
    const result = await User_model_1.UserModel.findByIdAndDelete(id);
    return Boolean(result);
};
exports.removeUser = removeUser;
const getAuditEvents = async () => AuditEvent_model_1.AuditEventModel.find().sort({ createdAt: -1 });
exports.getAuditEvents = getAuditEvents;
const getAnalyticsEvents = async () => AnalyticsEvent_model_1.AnalyticsEventModel.find().sort({ createdAt: -1 });
exports.getAnalyticsEvents = getAnalyticsEvents;
//# sourceMappingURL=admin.service.js.map