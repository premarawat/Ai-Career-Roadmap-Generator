import { CareerProfileModel } from '../models/CareerProfile.model';
import { ICareerProfile } from '../models/CareerProfile.model';

export const createOrUpdateProfile = async (userId: string, payload: Partial<ICareerProfile>): Promise<ICareerProfile> => {
  const existing = await CareerProfileModel.findOne({ userId });
  if (existing) {
    Object.assign(existing, payload, { updatedBy: userId, version: existing.version + 1 });
    return existing.save();
  }

  return CareerProfileModel.create({ ...payload, userId, createdBy: userId, updatedBy: userId });
};

export const getProfileByUserId = async (userId: string): Promise<ICareerProfile | null> => {
  return CareerProfileModel.findOne({ userId });
};
