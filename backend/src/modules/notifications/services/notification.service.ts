import { NotificationModel, INotification } from '../models/Notification.model';

export const getNotificationsForUser = async (userId: string): Promise<INotification[]> => {
  return NotificationModel.find({ userId }).sort({ createdAt: -1 });
};

export const markNotificationRead = async (userId: string, id: string): Promise<INotification | null> => {
  const notification = await NotificationModel.findOne({ _id: id, userId });
  if (!notification) return null;
  notification.read = true;
  notification.updatedBy = userId;
  notification.version += 1;
  return notification.save();
};

export const createNotification = async (userId: string, type: string, title: string, message: string, metadata?: Record<string, unknown>): Promise<INotification> => {
  return NotificationModel.create({
    userId,
    type,
    title,
    message,
    metadata,
    createdBy: userId,
    updatedBy: userId
  });
};
