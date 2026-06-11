"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendError = exports.sendCreated = exports.sendSuccess = void 0;
const sendSuccess = (res, data, requestId) => {
    const payload = {
        data,
        meta: {
            requestId,
            timestamp: new Date().toISOString()
        },
        error: null
    };
    return res.status(200).json(payload);
};
exports.sendSuccess = sendSuccess;
const sendCreated = (res, data, requestId) => {
    const payload = {
        data,
        meta: {
            requestId,
            timestamp: new Date().toISOString()
        },
        error: null
    };
    return res.status(201).json(payload);
};
exports.sendCreated = sendCreated;
const sendError = (res, code, message, requestId, details = [], status = 400) => {
    const payload = {
        data: null,
        meta: {
            requestId,
            timestamp: new Date().toISOString()
        },
        error: {
            code,
            message,
            details
        }
    };
    return res.status(status).json(payload);
};
exports.sendError = sendError;
//# sourceMappingURL=response.helper.js.map