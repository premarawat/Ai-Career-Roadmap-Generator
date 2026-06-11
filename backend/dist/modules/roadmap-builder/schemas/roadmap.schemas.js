"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRoadmapSchema = exports.roadmapIdSchema = exports.createRoadmapSchema = void 0;
const zod_1 = require("zod");
exports.createRoadmapSchema = zod_1.z.object({
    body: zod_1.z.object({
        careerGoal: zod_1.z.string().min(1),
        currentSkills: zod_1.z.array(zod_1.z.string().min(1)),
        targetSkills: zod_1.z.array(zod_1.z.string().min(1))
    })
});
exports.roadmapIdSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string().min(1)
    })
});
exports.updateRoadmapSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string().min(1)
    }),
    body: zod_1.z.object({
        milestones: zod_1.z.array(zod_1.z.object({
            title: zod_1.z.string().min(1),
            description: zod_1.z.string().min(1),
            dueWeek: zod_1.z.number().int(),
            completed: zod_1.z.boolean()
        })).optional(),
        projectRecommendations: zod_1.z.array(zod_1.z.string()).optional()
    })
});
//# sourceMappingURL=roadmap.schemas.js.map