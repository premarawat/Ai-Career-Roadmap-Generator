"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMentorReviewSchema = exports.createMentorReviewSchema = void 0;
const zod_1 = require("zod");
exports.createMentorReviewSchema = zod_1.z.object({
    body: zod_1.z.object({
        mentorId: zod_1.z.string().min(1),
        roadmapId: zod_1.z.string().min(1),
        comment: zod_1.z.string().min(1),
        feedback: zod_1.z.string().min(1)
    })
});
exports.updateMentorReviewSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string().min(1)
    }),
    body: zod_1.z.object({
        feedback: zod_1.z.string().min(1).optional(),
        status: zod_1.z.enum(['pending', 'approved', 'rejected']).optional(),
        statusReason: zod_1.z.string().optional()
    })
});
//# sourceMappingURL=mentor-review.schemas.js.map