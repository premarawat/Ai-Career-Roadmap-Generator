"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gapAnalysisIdSchema = exports.gapAnalysisCreateSchema = void 0;
const zod_1 = require("zod");
exports.gapAnalysisCreateSchema = zod_1.z.object({
    body: zod_1.z.object({
        currentSkills: zod_1.z.array(zod_1.z.string().min(1)),
        targetSkills: zod_1.z.array(zod_1.z.string().min(1))
    })
});
exports.gapAnalysisIdSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string().min(1)
    })
});
//# sourceMappingURL=gap-analysis.schemas.js.map