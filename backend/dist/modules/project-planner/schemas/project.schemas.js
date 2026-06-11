"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProjectSchema = void 0;
const zod_1 = require("zod");
exports.createProjectSchema = zod_1.z.object({
    body: zod_1.z.object({
        careerGoal: zod_1.z.string().min(1),
        skillLevel: zod_1.z.string().min(1),
        roadmapStage: zod_1.z.string().min(1)
    })
});
//# sourceMappingURL=project.schemas.js.map