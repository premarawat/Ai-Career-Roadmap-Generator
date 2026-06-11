"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSkill = exports.updateSkill = exports.getSkills = exports.createSkill = void 0;
const Skill_model_1 = require("../models/Skill.model");
const createSkill = async (userId, payload) => {
    return Skill_model_1.SkillModel.create({ ...payload, userId, createdBy: userId, updatedBy: userId });
};
exports.createSkill = createSkill;
const getSkills = async (userId) => {
    return Skill_model_1.SkillModel.find({ userId });
};
exports.getSkills = getSkills;
const updateSkill = async (userId, id, payload) => {
    const skill = await Skill_model_1.SkillModel.findOne({ _id: id, userId });
    if (!skill)
        return null;
    Object.assign(skill, payload, { updatedBy: userId, version: skill.version + 1 });
    return skill.save();
};
exports.updateSkill = updateSkill;
const deleteSkill = async (userId, id) => {
    const result = await Skill_model_1.SkillModel.findOneAndDelete({ _id: id, userId });
    return Boolean(result);
};
exports.deleteSkill = deleteSkill;
//# sourceMappingURL=skill.service.js.map