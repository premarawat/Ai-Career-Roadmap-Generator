import { GapAnalysisModel, IGapAnalysis } from '../models/GapAnalysis.model';

const computeMissingSkills = (current: string[], target: string[]): string[] => {
  const normalized = new Set(current.map((skill) => skill.toLowerCase().trim()));
  return target.filter((skill) => !normalized.has(skill.toLowerCase().trim()));
};

const computeReadiness = (current: string[], target: string[]): number => {
  if (target.length === 0) return 100;
  const covered = target.filter((skill) => current.some((item) => item.toLowerCase().trim() === skill.toLowerCase().trim()));
  return Math.round((covered.length / target.length) * 100);
};

export const createGapAnalysis = async (userId: string, currentSkills: string[], targetSkills: string[]): Promise<IGapAnalysis> => {
  const missingSkills = computeMissingSkills(currentSkills, targetSkills);
  const readinessScore = computeReadiness(currentSkills, targetSkills);
  const priorityAreas = missingSkills.slice(0, 5);

  return GapAnalysisModel.create({
    userId,
    currentSkills,
    targetSkills,
    missingSkills,
    readinessScore,
    priorityAreas,
    createdBy: userId,
    updatedBy: userId
  });
};

export const getGapAnalysisById = async (userId: string, id: string): Promise<IGapAnalysis | null> => {
  return GapAnalysisModel.findOne({ _id: id, userId });
};
