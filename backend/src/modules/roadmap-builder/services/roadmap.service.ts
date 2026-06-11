import { RoadmapModel, IRoadmap } from '../models/Roadmap.model';
import { generateAiResponse } from '../../../integrations/ai/openai.service';

export const generateRoadmap = async (userId: string, careerGoal: string, currentSkills: string[], targetSkills: string[]): Promise<IRoadmap> => {
  const prompt = `Create a JSON roadmap for a user with the career goal "${careerGoal}". Current skills: ${JSON.stringify(currentSkills)}. Target skills: ${JSON.stringify(targetSkills)}.`;
  const aiResult = await generateAiResponse<{ learningPath: string[]; weeklyPlan: Array<{ week: number; tasks: string[] }>; milestones: Array<{ title: string; description: string; dueWeek: number; completed: boolean }>; projectRecommendations: string[] }>(prompt, 'roadmap-v1');

  return RoadmapModel.create({
    userId,
    careerGoal,
    learningPath: aiResult.data.learningPath,
    weeklyPlan: aiResult.data.weeklyPlan,
    milestones: aiResult.data.milestones,
    projectRecommendations: aiResult.data.projectRecommendations,
    aiMetadata: {
      promptVersion: 'roadmap-v1',
      model: aiResult.model,
      confidence: aiResult.confidence
    },
    createdBy: userId,
    updatedBy: userId
  });
};

export const getRoadmap = async (userId: string, id: string): Promise<IRoadmap | null> => {
  return RoadmapModel.findOne({ _id: id, userId });
};

export const updateRoadmap = async (userId: string, id: string, payload: Partial<IRoadmap>): Promise<IRoadmap | null> => {
  const roadmap = await RoadmapModel.findOne({ _id: id, userId });
  if (!roadmap) return null;
  Object.assign(roadmap, payload, { updatedBy: userId, version: roadmap.version + 1 });
  return roadmap.save();
};
