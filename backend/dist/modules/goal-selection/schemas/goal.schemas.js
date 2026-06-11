"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGoalSchema = exports.createGoalSchema = void 0;
const zod_1 = require("zod");
exports.createGoalSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1),
        description: zod_1.z.string().min(1),
        targetRole: zod_1.z.string().min(1),
        timeline: zod_1.z.string().min(1)
    })
});
exports.updateGoalSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string().min(1)
    }),
    body: zod_1.z.object({
        title: zod_1.z.string().min(1).optional(),
        description: zod_1.z.string().min(1).optional(),
        targetRole: zod_1.z.string().min(1).optional(),
        timeline: zod_1.z.string().min(1).optional()
    })
});
//# sourceMappingURL=goal.schemas.js.map