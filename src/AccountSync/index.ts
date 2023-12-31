import { Router, Request, Response } from 'express';
import { method } from '../../config';

const account_sync_router = Router();

account_sync_router.post("/:id", async(req: Request, res: Response) => {
  try {
    const account = await method.accounts(req.params.id).syncs.create();
    res.json(account);
  } catch (err) {
    console.error('Error creating account sync', req.params.id, err);
    res.json(err)
  }
})

export { account_sync_router };