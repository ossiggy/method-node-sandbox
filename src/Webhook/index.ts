import { Router, Request, Response } from 'express';
import { method } from '../../config';

const webhook_router = Router();

webhook_router.get('/', async (req: Request, res: Response) => {
  try {
    const webhook = await method.webhooks.list();
    res.json(webhook);
  } catch (err) {
    console.error('Error getting all webhooks', err);
    res.json(err);
  }
});

webhook_router.get('/:whk_id', async (req: Request, res: Response) => {
  try {
    const webhook = await method.webhooks.get(req.params.whk_id);
    res.json(webhook);
  } catch (err) {
    console.error('Error getting webhook', req.params.whk_id, err);
    res.json(err);
  }
});

webhook_router.post('/', async (req: Request, res: Response) => {
  try {
  /**
   * example req.body
    {
      type: 'payment.update',
      url: 'https://api.example.app/webhook',
      auth_token: 'md7UqcTSmvXCBzPORDwOkE',
    }
  */
  const webhook = await method.webhooks.create(req.body);
  res.json(webhook);
  } catch (err) {
    console.error('Error creating webhook', err);
    res.json(err);
  }
})

webhook_router.delete('/:whk_id', async (req: Request, res: Response) => {
  try {
    const webhook = await method.webhooks.delete(req.params.whk_id);
    res.json(webhook);
  } catch (err) {
    console.error('Error deleting webhook', req.params.whk_id, err);
    res.json(err);
  }
});

export { webhook_router };