import OpenAI from 'openai';
import { env } from '../../config/env';
import { logger } from '../../logging/logger';

export interface AiResponse<T> {
  data: T;
  model: string;
  promptVersion: string;
  confidence?: number;
}

const client = new OpenAI({ apiKey: env.openai.apiKey });

export const generateAiResponse = async <T>(prompt: string, promptVersion: string): Promise<AiResponse<T>> => {
  logger.info('Calling OpenAI API', { promptVersion, model: env.openai.model });

  const completion = await client.responses.create({
    model: env.openai.model,
    input: prompt,
    max_output_tokens: 800,
    temperature: 0.7
  });
  const outputText = completion.output_text || '';

  return {
    data: JSON.parse(outputText) as T,
    model: env.openai.model,
    promptVersion,
    confidence: undefined
  };
};
