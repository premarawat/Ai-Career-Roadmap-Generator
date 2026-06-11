"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.careerProfileSchema = void 0;
const zod_1 = require("zod");
exports.careerProfileSchema = zod_1.z.object({
    body: zod_1.z.object({
        education: zod_1.z.array(zod_1.z.object({
            institution: zod_1.z.string().min(1),
            degree: zod_1.z.string().min(1),
            field: zod_1.z.string().min(1),
            startYear: zod_1.z.number().int(),
            endYear: zod_1.z.number().int().optional()
        })),
        skills: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string().min(1), level: zod_1.z.string().min(1) })),
        certifications: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string().min(1),
            issuer: zod_1.z.string().min(1),
            earnedAt: zod_1.z.string().transform((value) => new Date(value)),
            evidenceUrl: zod_1.z.string().url().optional()
        })),
        interests: zod_1.z.array(zod_1.z.string().min(1)),
        experience: zod_1.z.array(zod_1.z.object({
            company: zod_1.z.string().min(1),
            role: zod_1.z.string().min(1),
            duration: zod_1.z.string().min(1),
            description: zod_1.z.string().optional()
        }))
    })
});
//# sourceMappingURL=career-profile.schemas.js.map