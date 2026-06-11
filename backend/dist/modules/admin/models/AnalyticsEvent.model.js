"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsEventModel = void 0;
const mongoose_1 = require("mongoose");
const AnalyticsEventSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    eventType: { type: String, required: true },
    payload: { type: mongoose_1.Schema.Types.Mixed },
    status: { type: String, default: 'active' },
    createdBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
}, { timestamps: true });
exports.AnalyticsEventModel = (0, mongoose_1.model)('AnalyticsEvent', AnalyticsEventSchema);
//# sourceMappingURL=AnalyticsEvent.model.js.map