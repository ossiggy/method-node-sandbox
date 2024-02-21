import { Router, Request, Response } from 'express';
import { method } from '../../config';

const reversal_router = Router();

reversal_router.get('/:pmt_id', async (req: Request, res: Response) => {
  try {
    const reversal = await method.payments(req.params.pmt_id).reversals.list();
    res.json(reversal);
  } catch (err) {
    console.error('Error listing reversals', req.params.pmt_id, err);
    res.json(err);
  }
});


reversal_router.get('/:pmt_id/:rvs_id', async (req: Request, res: Response) => {
  try {
    const reversal = await method.payments(req.params.pmt_id).reversals.get(req.params.rvs_id);
    res.json(reversal);
  } catch (err) {
    console.error('Error getting reversal', req.params.pmt_id, req.params.rvs_id, err);
    res.json(err);
  }
});

reversal_router.put('/:pmt_id/:rvs_id', async (req: Request, res: Response) => {
  try {
    const reversal = await method.payments(req.params.pmt_id).reversals.update(req.params.rvs_id, { status: 'pending' });
    res.json(reversal);
  } catch (err) {
    console.error('Error updating reversal. Payment:', req.params.pmt_id, 'Reversal:', req.params.rvs_id, err);
    res.json(err);
  }
});

export { reversal_router };
