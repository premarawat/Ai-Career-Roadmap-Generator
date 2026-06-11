"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const roles_1 = require("../../common/constants/roles");
const UserSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: Object.values(roles_1.Roles) },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailVerified: { type: Boolean, default: false },
    refreshToken: { type: String, default: null },
    passwordResetToken: { type: String, default: null },
    passwordResetExpires: { type: Number, default: null },
    emailVerificationToken: { type: String, default: null },
    status: { type: String, default: 'active' },
    createdBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
}, { timestamps: true });
exports.UserModel = (0, mongoose_1.model)('User', UserSchema);
//# sourceMappingURL=User.model.js.map