import dotenv from 'dotenv';
import { Method, Environments } from 'method-node';

dotenv.config();

export const PORT = process.env.PORT || '8080';
export const METHOD_API_KEY = process.env.METHOD_API_KEY || '';

export const method = new Method({
  apiKey: METHOD_API_KEY,
  env: Environments.dev,
});
