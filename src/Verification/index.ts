import { Router, Request, Response } from 'express';
import { method } from '../../config';

const verification_router = Router();

verification_router.get('/:acc_id', async (req: Request, res: Response) => {
  try {
    const verification = await method.accounts(req.params.acc_id).verification.get();
    res.json(verification);
  } catch (err) {
    console.error('Error getting verification for account', req.params.acc_id, err);
    res.json(err)
  }
});

verification_router.post('/:acc_id', async (req: Request, res: Response) => {
  try {
    /**
     * for full list of create body examples, see the README of the Method Node library -> https://github.com/MethodFi/method-node?tab=readme-ov-file#ach-verification
     */
    const verification = await method.accounts(req.params.acc_id).verification.create(req.body);
    res.json(verification);
  } catch (err) {
    console.error('Error creating verification for account', req.params.acc_id, err);
    res.json(err)
  }
})

verification_router.put('/:acc_id', async (req: Request, res: Response) => {
  try {
    /**
     * example req.body:
      {
        micro_deposits: {
          amounts: [10, 4],
        },
      }
     */
    const verification = await method.accounts(req.params.acc_id).verification.update(req.body);
    res.json(verification);
  } catch (err) {
    console.error('Error updating verification for account', req.params.acc_id, err);
    res.json(err)
  }
})

export { verification_router };