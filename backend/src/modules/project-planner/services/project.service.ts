import { z } from 'zod';
import { ProjectRecommendationModel, IProjectRecommendation } from '../models/ProjectRecommendation.model';
import { generateAiResponse } from '../../../integrations/ai/openai.service';

const projectRecommendationSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  suggestions: z.array(z.string().min(1))
});

const projectRecommendationsSchema = z.array(projectRecommendationSchema);

export const createProjectRecommendation = async (
  userId: string,
  careerGoal: string,
  skillLevel: string,
  roadmapStage: string
): Promise<IProjectRecommendation> => {
  const prompt = `Generate a JSON array of project recommendations for a learner targeting ${careerGoal} at skill level ${skillLevel} during the ${roadmapStage} stage.`;
  const aiResult = await generateAiResponse<unknown>(prompt, 'project-recommendation-v1');
  const parsed = projectRecommendationsSchema.parse(aiResult.data);
  const recommendation = parsed[0];

  return ProjectRecommendationModel.create({
    userId,
    careerGoal,
    skillLevel,
    roadmapStage,
    title: recommendation.title,
    description: recommendation.description,
    suggestions: recommendation.suggestions,
    createdBy: userId,
    updatedBy: userId,
    aiMetadata: {
      promptVersion: 'project-recommendation-v1',
      model: aiResult.model,
      confidence: aiResult.confidence
    }
  } as unknown as IProjectRecommendation);
};

export const getProjectRecommendations = async (userId: string): Promise<IProjectRecommendation[]> => {
  return ProjectRecommendationModel.find({ userId });
};
