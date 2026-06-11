"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProgressSchema = exports.createProgressSchema = void 0;
const zod_1 = require("zod");
exports.createProgressSchema = zod_1.z.object({
    body: zod_1.z.object({
        completedSkills: zod_1.z.array(zod_1.z.string().min(1)),
        completedMilestones: zod_1.z.array(zod_1.z.string().min(1)),
        completedProjects: zod_1.z.array(zod_1.z.string().min(1)),
        completedCertifications: zod_1.z.array(zod_1.z.string().min(1))
    })
});
exports.updateProgressSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string().min(1)
    }),
    body: zod_1.z.object({
        completedSkills: zod_1.z.array(zod_1.z.string().min(1)).optional(),
        completedMilestones: zod_1.z.array(zod_1.z.string().min(1)).optional(),
        completedProjects: zod_1.z.array(zod_1.z.string().min(1)).optional(),
        completedCertifications: zod_1.z.array(zod_1.z.string().min(1)).optional()
    })
});
//# sourceMappingURL=progress.schemas.js.map