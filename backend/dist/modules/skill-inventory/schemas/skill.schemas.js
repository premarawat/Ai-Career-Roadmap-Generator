"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSkillSchema = exports.createSkillSchema = void 0;
const zod_1 = require("zod");
exports.createSkillSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1),
        level: zod_1.z.string().min(1),
        category: zod_1.z.string().optional(),
        evidenceUrl: zod_1.z.string().url().optional()
    })
});
exports.updateSkillSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string().min(1)
    }),
    body: zod_1.z.object({
        name: zod_1.z.string().min(1).optional(),
        level: zod_1.z.string().min(1).optional(),
        category: zod_1.z.string().optional(),
        evidenceUrl: zod_1.z.string().url().optional()
    })
});
//# sourceMappingURL=skill.schemas.js.map