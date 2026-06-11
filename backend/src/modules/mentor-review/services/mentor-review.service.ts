import { MentorCommentModel, IMentorComment } from '../models/MentorComment.model';

export const createMentorReview = async (userId: string, payload: Partial<IMentorComment>): Promise<IMentorComment> => {
  return MentorCommentModel.create({ ...payload, userId, createdBy: userId, updatedBy: userId });
};

export const getMentorReviews = async (userId: string): Promise<IMentorComment[]> => {
  return MentorCommentModel.find({ userId });
};

export const updateMentorReview = async (userId: string, id: string, payload: Partial<IMentorComment>): Promise<IMentorComment | null> => {
  const review = await MentorCommentModel.findOne({ _id: id, userId });
  if (!review) return null;
  Object.assign(review, payload, { updatedBy: userId, version: review.version + 1 });
  return review.save();
};
