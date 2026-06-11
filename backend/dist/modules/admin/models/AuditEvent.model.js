"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditEventModel = void 0;
const mongoose_1 = require("mongoose");
const AuditEventSchema = new mongoose_1.Schema({
    action: { type: String, required: true },
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    role: { type: String, required: true },
    ip: { type: String, required: true },
    metadata: { type: mongoose_1.Schema.Types.Mixed },
    status: { type: String, default: 'active' },
    createdBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
}, { timestamps: true });
exports.AuditEventModel = (0, mongoose_1.model)('AuditEvent', AuditEventSchema);
//# sourceMappingURL=AuditEvent.model.js.map