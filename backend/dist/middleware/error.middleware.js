"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const logger_1 = require("../logging/logger");
const response_helper_1 = require("../common/helpers/response.helper");
const errorMiddleware = (err, req, res, next) => {
    logger_1.logger.error(err.stack ?? err.message);
    return (0, response_helper_1.sendError)(res, err.code ?? 'INTERNAL_SERVER_ERROR', err.message ?? 'An unexpected error occurred', res.locals.requestId ?? '', err.details ?? [], err.status ?? 500);
};
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map