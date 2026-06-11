"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNotificationReadSchema = void 0;
const zod_1 = require("zod");
exports.updateNotificationReadSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string().min(1)
    })
});
//# sourceMappingURL=notification.schemas.js.map