import { Router } from 'express';
import { account_router } from './Account';
import { account_sync_router } from './AccountSync';
import { bin_router } from './Bin';
import { element_router } from './Element';
import { entity_router } from './Entity';
import { entity_sync_router } from './EntitySync';
import { health_check_router } from './HealthCheck';
import { merchant_router } from './Merchant';
import { payment_router } from './Payment';

const api_router = Router();

api_router
  .use('/account', account_router)
  .use('/account_sync', account_sync_router)
  .use('/bin', bin_router)
  .use('/element', element_router)
  .use('/entity', entity_router)
  .use('entity_sync', entity_sync_router)
  .use('/health_check', health_check_router)
  .use('/merchants', merchant_router)
  .use('/payments', payment_router)

  export { api_router };