"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const { combine, timestamp, printf, colorize, errors } = winston_1.format;
const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack ?? message}`;
});
exports.logger = (0, winston_1.createLogger)({
    level: 'info',
    format: combine(colorize({ all: true }), timestamp(), errors({ stack: true }), logFormat),
    transports: [new winston_1.transports.Console()]
});
//# sourceMappingURL=logger.js.map