import { SkillModel, ISkill } from '../models/Skill.model';

export const createSkill = async (userId: string, payload: Partial<ISkill>): Promise<ISkill> => {
  return SkillModel.create({ ...payload, userId, createdBy: userId, updatedBy: userId });
};

export const getSkills = async (userId: string): Promise<ISkill[]> => {
  return SkillModel.find({ userId });
};

export const updateSkill = async (userId: string, id: string, payload: Partial<ISkill>): Promise<ISkill | null> => {
  const skill = await SkillModel.findOne({ _id: id, userId });
  if (!skill) return null;
  Object.assign(skill, payload, { updatedBy: userId, version: skill.version + 1 });
  return skill.save();
};

export const deleteSkill = async (userId: string, id: string): Promise<boolean> => {
  const result = await SkillModel.findOneAndDelete({ _id: id, userId });
  return Boolean(result);
};
