"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectRedis = exports.redisClient = void 0;
const redis_1 = require("redis");
const env_1 = require("./env");
exports.redisClient = (0, redis_1.createClient)({
    socket: {
        host: env_1.env.redis.host,
        port: env_1.env.redis.port
    },
    password: env_1.env.redis.password
});
const connectRedis = async () => {
    exports.redisClient.on('error', (error) => {
        console.error('Redis client error', error);
    });
    await exports.redisClient.connect();
};
exports.connectRedis = connectRedis;
//# sourceMappingURL=redis.js.map