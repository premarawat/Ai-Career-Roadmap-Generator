"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCareerGoal = exports.updateCareerGoal = exports.getCareerGoals = exports.createCareerGoal = void 0;
const CareerGoal_model_1 = require("../models/CareerGoal.model");
const createCareerGoal = async (userId, payload) => {
    return CareerGoal_model_1.CareerGoalModel.create({ ...payload, userId, createdBy: userId, updatedBy: userId });
};
exports.createCareerGoal = createCareerGoal;
const getCareerGoals = async (userId) => {
    return CareerGoal_model_1.CareerGoalModel.find({ userId });
};
exports.getCareerGoals = getCareerGoals;
const updateCareerGoal = async (userId, id, payload) => {
    const goal = await CareerGoal_model_1.CareerGoalModel.findOne({ _id: id, userId });
    if (!goal)
        return null;
    Object.assign(goal, payload, { updatedBy: userId, version: goal.version + 1 });
    return goal.save();
};
exports.updateCareerGoal = updateCareerGoal;
const deleteCareerGoal = async (userId, id) => {
    const result = await CareerGoal_model_1.CareerGoalModel.findOneAndDelete({ _id: id, userId });
    return Boolean(result);
};
exports.deleteCareerGoal = deleteCareerGoal;
//# sourceMappingURL=goal.service.js.map