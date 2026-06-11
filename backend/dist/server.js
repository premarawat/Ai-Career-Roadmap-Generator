"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const db_1 = require("./config/db");
const redis_1 = require("./config/redis");
const logger_1 = require("./logging/logger");
const env_1 = require("./config/env");
const startServer = async () => {
    try {
        await (0, db_1.connectDatabase)();
        await (0, redis_1.connectRedis)();
        app_1.app.listen(env_1.env.port, () => {
            logger_1.logger.info(`Server listening on http://localhost:${env_1.env.port}`);
        });
    }
    catch (error) {
        logger_1.logger.error('Failed to start application', error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=server.js.map