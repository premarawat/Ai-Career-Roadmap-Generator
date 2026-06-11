"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRoadmap = exports.getRoadmap = exports.generateRoadmap = void 0;
const Roadmap_model_1 = require("../models/Roadmap.model");
const openai_service_1 = require("../../../integrations/ai/openai.service");
const generateRoadmap = async (userId, careerGoal, currentSkills, targetSkills) => {
    const prompt = `Create a JSON roadmap for a user with the career goal "${careerGoal}". Current skills: ${JSON.stringify(currentSkills)}. Target skills: ${JSON.stringify(targetSkills)}.`;
    const aiResult = await (0, openai_service_1.generateAiResponse)(prompt, 'roadmap-v1');
    return Roadmap_model_1.RoadmapModel.create({
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
exports.generateRoadmap = generateRoadmap;
const getRoadmap = async (userId, id) => {
    return Roadmap_model_1.RoadmapModel.findOne({ _id: id, userId });
};
exports.getRoadmap = getRoadmap;
const updateRoadmap = async (userId, id, payload) => {
    const roadmap = await Roadmap_model_1.RoadmapModel.findOne({ _id: id, userId });
    if (!roadmap)
        return null;
    Object.assign(roadmap, payload, { updatedBy: userId, version: roadmap.version + 1 });
    return roadmap.save();
};
exports.updateRoadmap = updateRoadmap;
//# sourceMappingURL=roadmap.service.js.map