import { Router } from 'express';
import { account_router } from './Account';
import { account_sync_router } from './AccountSync';
import { bin_router } from './Bin';
import { connection_router } from './Connection';
import { element_router } from './Element';

const api_router = Router();

api_router
  .use('/account', account_router)
  .use('/account_sync', account_sync_router)
  .use('/bin', bin_router)
  .use('/connection', connection_router)
  .use('/element', element_router)

  export { api_router };