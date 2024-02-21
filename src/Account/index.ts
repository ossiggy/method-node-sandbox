import { Router, Request, Response } from 'express';
import { method } from '../../config';

const account_router = Router();

// List all accounts
account_router.get('/', async (req: Request, res: Response) => {
  try {
    const account = await method.accounts.list();
    res.json(account);
  } catch (err) {
    console.error('Error getting account list', err);
    res.json(err)
  }
});

// Retrieve an account (id should be acc_id)
account_router.get('/:acc_id', async (req: Request, res: Response) => {
  try {
    const account = await method.accounts.get(req.params.acc_id);
    res.json(account);
  } catch (err) {
    console.error('Error getting account', req.params.acc_id, err);
    res.json(err)
  }
});

// Create an account
account_router.post('/', async (req: Request, res: Response) => {
  try {
    /**
     * Req body example:
       {
          holder_id: 'ent_y1a9e1fbnJ1f3',
          ach: {
            routing: '367537407',
            number: '57838927',
            type: 'checking',
          },
        }
    */
    const account = await method.accounts.create(req.body);
    res.json(account);
  } catch (err) {
    console.error('Error creating account', req.body.holder_id, err);
    res.json(err)
  }
});

// Update an account's information
account_router.put('/:acc_id', async (req: Request, res: Response) => {
  try {
    const account = await method.accounts.update(req.params.acc_id, req.body);
    res.json(account);
  } catch (err) {
    console.error('Error updating account', req.params.acc_id, err);
    res.json(err)
  }
});

account_router.get('/:acc_id/payment_history', async (req: Request, res: Response) => {
  try {
    const account = await method.accounts.getPaymentHistory(req.params.acc_id);
    res.json(account);
  } catch (err) {
    console.error('Error getting payment history', req.params.acc_id, err);
    res.json(err)
  }
});

account_router.get('/:acc_id/details', async (req: Request, res: Response) => {
  try {
    const account = await method.accounts.getDetails(req.params.acc_id);
    res.json(account);
  } catch (err) {
    console.error('Error getting account details', req.params.acc_id, err);
    res.json(err);
  }
});

account_router.post('/bulk_sync', async (req: Request, res: Response) => {
  try {
    /**
     * req.body:
     * { acc_ids: ["acc_123", "acc_456"]] }
     */
    const account = await method.accounts.bulkSync(req.body.acc_ids);
    res.json(account);
  } catch (err) {
    console.error('Error syncing accounts', err);
    res.json(err)
  }
});

account_router.post('/sync', async (req: Request, res: Response) => {
  try {
    /**
     * req.body:
     * { acc_ids: ["acc_123", "acc_456"]] }
     */
    const account = await method.accounts.sync(req.body.acc_ids);
    res.json(account);
  } catch (err) {
    console.error('Error syncing account', err);
    res.json(err)
  }
});

account_router.post('/bulk_sensitive', async (req: Request, res: Response) => {
  try {
    /**
     * req.body:
     * { 
     *    acc_ids: ["acc_123", "acc_456"]],
     *    
     * }
     */
    const account = await method.accounts.bulkSensitive(req.body.acc_ids, req.body.fields);
    res.json(account);
  } catch (err) {
    console.error('Error getting bulk sensitive info', err);
    res.json(err)
  }
});

account_router.post('/:acc_id/sensitive', async (req: Request, res: Response) => {
  try {
    const account = await method.accounts.sensitive(req.params.acc_id);
    res.json(account);
  } catch (err) {
    console.error('Error getting sensitive info', err);
    res.json(err)
  }
});

account_router.post('/:acc_id/auto_syncs', async (req: Request, res: Response) => {
  try {
    const account = await method.accounts.enrollAutoSyncs(req.params.acc_id);
    res.json(account);
  } catch (err) {
    console.error('Error creating auto syncs', err);
    res.json(err)
  }
});

account_router.delete('/:acc_id/auto_syncs', async (req: Request, res: Response) => {
  try {
    const account = await method.accounts.unenrollAutoSyncs(req.params.acc_id);
    res.json(account);
  } catch (err) {
    console.error('Error unenrolling auto syncs', err);
    res.json(err)
  }
});

account_router.post('/:acc_id/withdraw_consent', async (req: Request, res: Response) => {
  try {
    const account = await method.accounts.withdrawConsent(req.params.acc_id);
    res.json(account);
  } catch (err) {
    console.error('Error withdrawing consent', err);
    res.json(err);
  }
});

account_router.post('/:acc_id/payoffs', async (req: Request, res: Response) => {
  try {
    const payoff = await method.accounts.createPayoff(req.params.acc_id);
    res.json(payoff);
  } catch (err) {
    console.error('Error creating payoffs', err);
    res.json(err);
  }
});

account_router.get('/:acc_id/payoffs/:pyf_id', async (req: Request, res: Response) => {
  try {
    const payoff = await method.accounts.getPayoff(req.params.acc_id, req.params.pyf_id);
    res.json(payoff);
  } catch (err) {
    console.error('Error getting payoff', req.params.pyf_id, err);
    res.json(err);
  }
});

export { account_router };