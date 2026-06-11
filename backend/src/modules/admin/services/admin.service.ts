import { UserModel } from '../../../auth/models/User.model';
import { AuditEventModel } from '../models/AuditEvent.model';
import { AnalyticsEventModel } from '../models/AnalyticsEvent.model';

export const getUsers = async () => UserModel.find();

export const updateUser = async (id: string, payload: Partial<any>, updatedBy: string | null) => {
  const user = await UserModel.findById(id);
  if (!user) return null;
  Object.assign(user, payload, { updatedBy, version: user.version + 1 });
  return user.save();
};

export const removeUser = async (id: string): Promise<boolean> => {
  const result = await UserModel.findByIdAndDelete(id);
  return Boolean(result);
};

export const getAuditEvents = async () => AuditEventModel.find().sort({ createdAt: -1 });

export const getAnalyticsEvents = async () => AnalyticsEventModel.find().sort({ createdAt: -1 });
