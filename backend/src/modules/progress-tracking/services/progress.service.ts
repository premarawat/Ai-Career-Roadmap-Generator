import { ProgressUpdateModel, IProgressUpdate } from '../models/ProgressUpdate.model';

export const createProgressUpdate = async (userId: string, payload: Partial<IProgressUpdate>): Promise<IProgressUpdate> => {
  return ProgressUpdateModel.create({ ...payload, userId, createdBy: userId, updatedBy: userId });
};

export const getProgressUpdates = async (userId: string): Promise<IProgressUpdate[]> => {
  return ProgressUpdateModel.find({ userId });
};

export const updateProgressUpdate = async (userId: string, id: string, payload: Partial<IProgressUpdate>): Promise<IProgressUpdate | null> => {
  const update = await ProgressUpdateModel.findOne({ _id: id, userId });
  if (!update) return null;
  Object.assign(update, payload, { updatedBy: userId, version: update.version + 1 });
  return update.save();
};
