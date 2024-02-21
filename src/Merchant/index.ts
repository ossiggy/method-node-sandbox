import { Router, Request, Response } from 'express';
import { method } from '../../config';

const merchant_router = Router();

merchant_router.get('/:mch_id', async (req: Request, res: Response) => {
  try {
    const merchant = await method.merchants.get(req.params.mch_id);
    res.json(merchant);
  } catch (err) {
    console.error('Error getting merchant', req.params.mch_id, err);
    res.json(err);
  }
});

merchant_router.post('/', async (req: Request, res: Response) => {
  try {
    /**
     * req.body:
      {
        name?: string,
        'provider_id.plaid'?: string,
        'provider_id.mx'?: string,
        'provider_id.finicity'?: string,
      }
     */
    const opts = req.body || {};
    const merchant_list = await method.merchants.list(opts);
    res.json(merchant_list);
  } catch (err) {
    console.error('Error getting list of merchants', err);
    res.json(err);
  }
});

export { merchant_router };