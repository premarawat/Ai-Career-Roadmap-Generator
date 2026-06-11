"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectRecommendations = exports.createProjectRecommendation = void 0;
const zod_1 = require("zod");
const ProjectRecommendation_model_1 = require("../models/ProjectRecommendation.model");
const openai_service_1 = require("../../../integrations/ai/openai.service");
const projectRecommendationSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    description: zod_1.z.string().min(1),
    suggestions: zod_1.z.array(zod_1.z.string().min(1))
});
const projectRecommendationsSchema = zod_1.z.array(projectRecommendationSchema);
const createProjectRecommendation = async (userId, careerGoal, skillLevel, roadmapStage) => {
    const prompt = `Generate a JSON array of project recommendations for a learner targeting ${careerGoal} at skill level ${skillLevel} during the ${roadmapStage} stage.`;
    const aiResult = await (0, openai_service_1.generateAiResponse)(prompt, 'project-recommendation-v1');
    const parsed = projectRecommendationsSchema.parse(aiResult.data);
    const recommendation = parsed[0];
    return ProjectRecommendation_model_1.ProjectRecommendationModel.create({
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
    });
};
exports.createProjectRecommendation = createProjectRecommendation;
const getProjectRecommendations = async (userId) => {
    return ProjectRecommendation_model_1.ProjectRecommendationModel.find({ userId });
};
exports.getProjectRecommendations = getProjectRecommendations;
//# sourceMappingURL=project.service.js.map