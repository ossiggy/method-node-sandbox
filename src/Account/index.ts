import { Router, Request, Response } from 'express';
import { method } from '../../config';

const account_router = Router();

// List all accounts
account_router.get('/', async (req: Request, res: Response) => {
  try {
    const account = await method.accounts.list();
    res.status(200).json(account);
  } catch (err) {
    console.error('Error getting account list', err);
    res.json(err)
  }
});

// Retrieve an account (id should be acc_id)
account_router.get('/:id', async (req: Request, res: Response) => {
  try {
    const account = await method.accounts.get(req.params.id);
    res.status(200).json(account);
  } catch (err) {
    console.error('Error getting account', req.params.id, err);
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
    res.status(201).json(account);
  } catch (err) {
    console.error('Error creating account', req.body.holder_id, err);
    res.json(err)
  }
});

// Update an account's information
account_router.put('/:id', async (req: Request, res: Response) => {
  try {
    const account = await method.accounts.update(req.params.id, req.body);
    res.status(200).json(account);
  } catch (err) {
    console.error('Error updating account', req.params.id, err);
    res.json(err)
  }
});

account_router.get('/:id/payment_history', async (req: Request, res: Response) => {
  try {
    const account = await method.accounts.getPaymentHistory(req.params.id);
    res.status(200).json(account);
  } catch (err) {
    console.error('Error getting payment history', req.params.id, err);
    res.json(err)
  }
});

account_router.get('/:id/details', async (req: Request, res: Response) => {
  try {
    const account = await method.accounts.getDetails(req.params.id);
    res.status(200).json(account);
  } catch (err) {
    console.error('Error getting account details', req.params.id, err);
    res.json(err);
  }
});

account_router.post('/bulk_sync', async (req: Request, res: Response) => {
  try {
    /**
     * req.body:
     * { acc_ids: ["acc_123", "acc_456"]] }
     */
    const account = await method.accounts.bulkSync(req.body);
    res.status(200).json(account);
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
    const account = await method.accounts.sync(req.body);
    res.status(200).json(account);
  } catch (err) {
    console.error('Error syncing account', err);
    res.json(err)
  }
});

account_router.post('/bulk_sensitive', async (req: Request, res: Response) => {
  try {
    /**
     * req.body:
     * { acc_ids: ["acc_123", "acc_456"]] }
     */
    const account = await method.accounts.bulkSensitive(req.body);
    res.status(200).json(account);
  } catch (err) {
    console.error('Error syncing account', err);
    res.json(err)
  }
})

account_router.post('/:id/sensitive', async (req: Request, res: Response) => {
  try {
    const account = await method.accounts.sensitive(req.params.id);
    res.status(200).json(account);
  } catch (err) {
    console.error('Error syncing account', err);
    res.json(err)
  }
})

account_router.post('/:id/auto_syncs', async (req: Request, res: Response) => {
  try {
    const account = await method.accounts.enrollAutoSyncs(req.params.id);
    res.status(200).json(account);
  } catch (err) {
    console.error('Error syncing account', err);
    res.json(err)
  }
})

account_router.delete('/:id/auto_syncs', async (req: Request, res: Response) => {
  try {
    const account = await method.accounts.unenrollAutoSyncs(req.params.id);
    res.status(200).json(account);
  } catch (err) {
    console.error('Error syncing account', err);
    res.json(err)
  }
})

account_router.post('/:id/withdraw_consent', async (req: Request, res: Response) => {
  try {
    const account = await method.accounts.withdrawConsent(req.params.id);
    res.status(200).json(account);
  } catch (err) {
    console.error('Error syncing account', err);
    res.json(err)
  }
})

export { account_router };