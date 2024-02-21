import dotenv from 'dotenv';
import { Method, Environments } from 'method-node';

dotenv.config();

export const ENVIRONMENT = process.env.ENVIRONMENT || 'dev';
export const PORT = process.env.PORT || '8080';
export const METHOD_API_KEY = process.env.METHOD_API_KEY || '';

const retryTime = 5000;

export const method = new Method({
  apiKey: METHOD_API_KEY,
  env: Environments[ENVIRONMENT as keyof typeof Environments],
  onRequest: (event) => {
    console.log('onRequest', event);
  },
  onResponse: (event, res) => {
    console.log('onResponse event:', event);
    console.log('OnResponse response body:', res.data);
    return res;
  },
  axiosRetryConfig: {
    retries: 1,
    shouldResetTimeout: false,
    retryDelay: (retryDelayTime=retryTime) => retryDelayTime,
    retryCondition: (err) => {
      if (err) false
      return true
    },
    onRetry: (e) => {
      console.log('onRetry', e);
    }
  }
});
