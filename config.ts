import dotenv from 'dotenv';
import { Method, Environments } from 'method-node';

dotenv.config();

export const PORT = process.env.PORT || '8080';
export const METHOD_API_KEY = process.env.METHOD_API_KEY || '';

const retryDelayTime = 500;

export const method = new Method({
  apiKey: METHOD_API_KEY,
  env: Environments.dev,
  onRequest: (e) => {
    console.log('onRequest', e);
  },
  onResponse: (e, res) => {
    console.log('onResponse', e);
  },
  axiosRetryConfig: {
    retries: 1,
    shouldResetTimeout: false,
    retryDelay: (retryDelayTime) => retryDelayTime,
    retryCondition: (err) => false,
    onRetry: (err) => {
      console.log('onRetry', err);
    }
  }
});
