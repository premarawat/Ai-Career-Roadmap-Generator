"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAiResponse = void 0;
const openai_1 = __importDefault(require("openai"));
const env_1 = require("../../config/env");
const logger_1 = require("../../logging/logger");
const client = new openai_1.default({ apiKey: env_1.env.openai.apiKey });
const generateAiResponse = async (prompt, promptVersion) => {
    logger_1.logger.info('Calling OpenAI API', { promptVersion, model: env_1.env.openai.model });
    const completion = await client.responses.create({
        model: env_1.env.openai.model,
        input: prompt,
        max_output_tokens: 800,
        temperature: 0.7
    });
    const outputText = completion.output_text || '';
    return {
        data: JSON.parse(outputText),
        model: env_1.env.openai.model,
        promptVersion,
        confidence: undefined
    };
};
exports.generateAiResponse = generateAiResponse;
//# sourceMappingURL=openai.service.js.map