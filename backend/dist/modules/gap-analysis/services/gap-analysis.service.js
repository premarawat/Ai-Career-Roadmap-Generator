"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGapAnalysisById = exports.createGapAnalysis = void 0;
const GapAnalysis_model_1 = require("../models/GapAnalysis.model");
const computeMissingSkills = (current, target) => {
    const normalized = new Set(current.map((skill) => skill.toLowerCase().trim()));
    return target.filter((skill) => !normalized.has(skill.toLowerCase().trim()));
};
const computeReadiness = (current, target) => {
    if (target.length === 0)
        return 100;
    const covered = target.filter((skill) => current.some((item) => item.toLowerCase().trim() === skill.toLowerCase().trim()));
    return Math.round((covered.length / target.length) * 100);
};
const createGapAnalysis = async (userId, currentSkills, targetSkills) => {
    const missingSkills = computeMissingSkills(currentSkills, targetSkills);
    const readinessScore = computeReadiness(currentSkills, targetSkills);
    const priorityAreas = missingSkills.slice(0, 5);
    return GapAnalysis_model_1.GapAnalysisModel.create({
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
exports.createGapAnalysis = createGapAnalysis;
const getGapAnalysisById = async (userId, id) => {
    return GapAnalysis_model_1.GapAnalysisModel.findOne({ _id: id, userId });
};
exports.getGapAnalysisById = getGapAnalysisById;
//# sourceMappingURL=gap-analysis.service.js.map