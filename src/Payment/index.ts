import { Router, Request, Response } from 'express';
import { method } from '../../config';

const payment_router = Router();

payment_router.get('/:id', async (req: Request, res: Response) => {
  try {
    const payment = await method.payments.get(req.params.id);
    res.json(payment);
  } catch (err) {
    console.error('Error getting payment', req.params.id, err);
    res.json(err);
  }
});

payment_router.post('/list', async (req: Request, res: Response) => {
  try {
    /**
     * req.body: 
      {  
        to_date?: string | null;
        from_date?: string | null;
        page?: number | string | null;
        page_limit?: number | string | null;
        page_cursor?: string | null;
        status?: string | null;
        type?: string | null;
        source?: string | null;
        destination?: string | null;
        reversal_id?: string | null;
        source_holder_id?: string;
        destination_holder_id?: string;
        acc_id?: string;
        holder_id?: string;
      }
     */
    const opts = req.body.opts || {}
    const payment = await method.payments.list(opts);
    res.json(payment);
  } catch (err) {
    console.error('Error getting payment list', err);
    res.json(err);
  }
});

payment_router.post('/', async (req: Request, res: Response) => {
  try {
    /**
     * req.body:
     * {
        amount: number;
        source: string;
        destination: string;
        description: string;
        metadata?: {};
        fee?: IPaymentFee;
     * }
     */
    const payment = await method.payments.create(req.body);
    res.json(payment);
  } catch (err) {
    console.error('Error creating payment', err);
    res.json(err)
  }
})

payment_router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const success = await method.payments.delete(req.params.id);
    res.json(success);
  } catch (err) {
    console.error('Error deleting payment', req.params.id, err);
    res.json(err);
  }
});

export { payment_router };