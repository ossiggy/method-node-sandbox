import { Router, Request, Response } from 'express';
import { method } from '../../config';

const reversal_router = Router();

reversal_router.get('/:paymentId', async (req: Request, res: Response) => {
  try {
    const reversal = await method.payments(req.params.paymentId).reversals.list();
    res.json(reversal);
  } catch (err) {
    console.error('Error listing reversals', req.params.paymentId, err);
    res.json(err);
  }
});


reversal_router.get('/:paymentId/:id', async (req: Request, res: Response) => {
  try {
    const reversal = await method.payments(req.params.paymentId).reversals.get(req.params.id);
    res.json(reversal);
  } catch (err) {
    console.error('Error getting reversal', req.params.paymentId, req.params.id, err);
    res.json(err);
  }
});

reversal_router.put('/:paymentId/:id', async (req: Request, res: Response) => {
  try {
    const reversal = await method.payments(req.params.paymentId).reversals.update(req.params.id, { status: 'pending' });
    res.json(reversal);
  } catch (err) {
    console.error('Error updating reversal. Payment:', req.params.paymentId, 'Reversal:', req.params.id, err);
    res.json(err);
  }
});

export { reversal_router };
