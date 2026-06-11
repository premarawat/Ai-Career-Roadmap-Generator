"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatZodError = void 0;
const formatZodError = (error) => {
    return {
        code: 'VALIDATION_ERROR',
        message: 'Input validation failed',
        details: error.errors.map((issue) => ({ path: issue.path.join('.'), message: issue.message }))
    };
};
exports.formatZodError = formatZodError;
//# sourceMappingURL=zod.helper.js.map