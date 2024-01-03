import dotenv from 'dotenv';
import { Method, Environments } from 'method-node';

dotenv.config();

export const PORT = process.env.PORT || '8080';
export const METHOD_API_KEY = process.env.METHOD_API_KEY || '';

const retryTime = 500;

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
    retryDelay: (retryDelayTime=retryTime) => retryDelayTime,
    retryCondition: (err) => {
      if (err) false
      return true
    },
    onRetry: (err) => {
      console.log('onRetry', err);
    }
  }
});
