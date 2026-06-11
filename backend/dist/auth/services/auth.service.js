"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmailToken = exports.resetPassword = exports.initiateForgotPassword = exports.refreshTokens = exports.logoutUser = exports.loginUser = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = require("jsonwebtoken");
const crypto_1 = __importDefault(require("crypto"));
const User_model_1 = require("../models/User.model");
const env_1 = require("../../config/env");
const signAccessToken = (payload) => {
    return (0, jsonwebtoken_1.sign)(payload, env_1.env.jwtAccessSecret, { expiresIn: env_1.env.accessTokenExpiresIn });
};
const signRefreshToken = (payload) => {
    return (0, jsonwebtoken_1.sign)(payload, env_1.env.jwtRefreshSecret, { expiresIn: env_1.env.refreshTokenExpiresIn });
};
const registerUser = async (input) => {
    const existingUser = await User_model_1.UserModel.findOne({ email: input.email });
    if (existingUser) {
        throw Object.assign(new Error('Email already in use'), { code: 'USER_EXISTS', status: 409 });
    }
    const hashedPassword = await bcryptjs_1.default.hash(input.password, 12);
    const user = await User_model_1.UserModel.create({
        email: input.email,
        password: hashedPassword,
        firstName: input.firstName,
        lastName: input.lastName,
        role: input.role,
        createdBy: input.createdBy ?? null,
        updatedBy: input.createdBy ?? null
    });
    const payload = { id: user.id, email: user.email, role: user.role };
    const accessToken = signAccessToken(payload);
    const refreshToken = signRefreshToken(payload);
    user.refreshToken = refreshToken;
    await user.save();
    return { accessToken, refreshToken };
};
exports.registerUser = registerUser;
const loginUser = async (email, password) => {
    const user = await User_model_1.UserModel.findOne({ email });
    if (!user) {
        throw Object.assign(new Error('Invalid credentials'), { code: 'INVALID_CREDENTIALS', status: 401 });
    }
    const isMatch = await bcryptjs_1.default.compare(password, user.password);
    if (!isMatch) {
        throw Object.assign(new Error('Invalid credentials'), { code: 'INVALID_CREDENTIALS', status: 401 });
    }
    const payload = { id: user.id, email: user.email, role: user.role };
    const accessToken = signAccessToken(payload);
    const refreshToken = signRefreshToken(payload);
    user.refreshToken = refreshToken;
    await user.save();
    return { accessToken, refreshToken };
};
exports.loginUser = loginUser;
const logoutUser = async (userId) => {
    await User_model_1.UserModel.findByIdAndUpdate(userId, { refreshToken: null, updatedBy: userId });
};
exports.logoutUser = logoutUser;
const refreshTokens = async (token) => {
    try {
        const decoded = (0, jsonwebtoken_1.verify)(token, env_1.env.jwtRefreshSecret);
        const user = await User_model_1.UserModel.findById(decoded.id);
        if (!user || user.refreshToken !== token) {
            throw new Error('Invalid refresh token');
        }
        const payload = { id: user.id, email: user.email, role: user.role };
        const accessToken = signAccessToken(payload);
        const refreshToken = signRefreshToken(payload);
        user.refreshToken = refreshToken;
        await user.save();
        return { accessToken, refreshToken };
    }
    catch (error) {
        throw Object.assign(new Error('Refresh token invalid or expired'), { code: 'INVALID_REFRESH_TOKEN', status: 401 });
    }
};
exports.refreshTokens = refreshTokens;
const initiateForgotPassword = async (email) => {
    const user = await User_model_1.UserModel.findOne({ email });
    if (!user) {
        throw Object.assign(new Error('User not found'), { code: 'USER_NOT_FOUND', status: 404 });
    }
    const resetToken = crypto_1.default.randomBytes(32).toString('hex');
    const resetHash = await bcryptjs_1.default.hash(resetToken, 10);
    user.set('passwordResetToken', resetHash);
    user.set('passwordResetExpires', Date.now() + 3600000);
    await user.save();
    return resetToken;
};
exports.initiateForgotPassword = initiateForgotPassword;
const resetPassword = async (token, password) => {
    const users = await User_model_1.UserModel.find({ passwordResetExpires: { $gt: Date.now() } });
    const user = users.find((item) => {
        const storedHash = item.get('passwordResetToken');
        return typeof storedHash === 'string' && bcryptjs_1.default.compareSync(token, storedHash);
    });
    if (!user) {
        throw Object.assign(new Error('Password reset invalid or expired'), { code: 'INVALID_RESET_TOKEN', status: 400 });
    }
    user.password = await bcryptjs_1.default.hash(password, 12);
    user.passwordResetToken = null;
    user.passwordResetExpires = null;
    user.updatedBy = user.id;
    await user.save();
};
exports.resetPassword = resetPassword;
const verifyEmailToken = async (token) => {
    const users = await User_model_1.UserModel.find();
    const user = users.find((item) => {
        const storedHash = item.get('emailVerificationToken');
        return typeof storedHash === 'string' && bcryptjs_1.default.compareSync(token, storedHash);
    });
    if (!user) {
        throw Object.assign(new Error('Email verification token invalid or expired'), { code: 'INVALID_VERIFICATION_TOKEN', status: 400 });
    }
    user.emailVerified = true;
    user.emailVerificationToken = null;
    user.updatedBy = user.id;
    await user.save();
};
exports.verifyEmailToken = verifyEmailToken;
//# sourceMappingURL=auth.service.js.map