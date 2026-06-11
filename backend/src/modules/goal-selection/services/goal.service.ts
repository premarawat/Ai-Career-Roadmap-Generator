import { CareerGoalModel, ICareerGoal } from '../models/CareerGoal.model';

export const createCareerGoal = async (userId: string, payload: Partial<ICareerGoal>): Promise<ICareerGoal> => {
  return CareerGoalModel.create({ ...payload, userId, createdBy: userId, updatedBy: userId });
};

export const getCareerGoals = async (userId: string): Promise<ICareerGoal[]> => {
  return CareerGoalModel.find({ userId });
};

export const updateCareerGoal = async (userId: string, id: string, payload: Partial<ICareerGoal>): Promise<ICareerGoal | null> => {
  const goal = await CareerGoalModel.findOne({ _id: id, userId });
  if (!goal) return null;
  Object.assign(goal, payload, { updatedBy: userId, version: goal.version + 1 });
  return goal.save();
};

export const deleteCareerGoal = async (userId: string, id: string): Promise<boolean> => {
  const result = await CareerGoalModel.findOneAndDelete({ _id: id, userId });
  return Boolean(result);
};
