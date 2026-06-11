"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNotification = exports.markNotificationRead = exports.getNotificationsForUser = void 0;
const Notification_model_1 = require("../models/Notification.model");
const getNotificationsForUser = async (userId) => {
    return Notification_model_1.NotificationModel.find({ userId }).sort({ createdAt: -1 });
};
exports.getNotificationsForUser = getNotificationsForUser;
const markNotificationRead = async (userId, id) => {
    const notification = await Notification_model_1.NotificationModel.findOne({ _id: id, userId });
    if (!notification)
        return null;
    notification.read = true;
    notification.updatedBy = userId;
    notification.version += 1;
    return notification.save();
};
exports.markNotificationRead = markNotificationRead;
const createNotification = async (userId, type, title, message, metadata) => {
    return Notification_model_1.NotificationModel.create({
        userId,
        type,
        title,
        message,
        metadata,
        createdBy: userId,
        updatedBy: userId
    });
};
exports.createNotification = createNotification;
//# sourceMappingURL=notification.service.js.map