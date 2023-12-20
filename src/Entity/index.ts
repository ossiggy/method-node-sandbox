import { Router, Request, Response } from 'express';
import { method } from '../../config';

const entity_router = Router();

entity_router.post('/', async(req: Request, res: Response) => {
  try {
    const entity = await method.entities.create(req.body);
    res.json(entity);
  } catch (err) {
    console.error('Error creating Entity:', err);
    res.json(err);
  }
})

entity_router.put('/:id', async(req: Request, res: Response) => {
  try {
    const entity = await method.entities.update(req.params.id, req.body);
    res.json(entity);
  } catch (err) {
    console.error('Error updating Entity:', req.params.id, err);
    res.json(err);
  }
});

entity_router.get('/:id',  async(req: Request, res: Response) => {
  try {
    const entity = await method.entities.get(req.params.id);
    res.json(entity);
  } catch (err) {
    console.error('Error getting Entity:', req.params.id, err);
    res.json(err);
  }
});

entity_router.get('/', async(req: Request, res: Response) => {
  try {
    const entity = await method.entities.list();
    res.json(entity);
  } catch (err) {
    console.error('Error getting Entities:', err);
    res.json(err);
  }
});

entity_router.post('/:id/create_auth_session', async(req: Request, res: Response) => {
  try {
    const token = await method.entities.createAuthSession(req.params.id);
    res.json(token);
  } catch (err) {
    console.error('Error creating auth session:', req.params.id, err);
    res.json(err);
  }
});

entity_router.post('/:id/credit_scores', async(req: Request, res: Response) => {
  try {
    const credit_score = await method.entities.createCreditScores(req.params.id);
    res.json(credit_score);
  } catch (err) {
    console.error('Error creating credit score:', req.params.id, err);
    res.json(err);
  }
});

entity_router.get('/:id/credit_scores/:crs_id', async(req: Request, res:Response) => {
  try {
    const credit_score = await method.entities.getCreditScores(req.params.id, req.params.crs_id);
    res.json(credit_score);
  } catch (err) {
    console.error('Error getting credit score', req.params.crs_id, err);
    res.json(err);
  }
});

entity_router.get('/:id/sensitive', async (req: Request, res: Response) => {
  try {
    const fields = await method.entities.getSensitiveFields(req.params.id);
    res.json(fields);
  } catch (err) {
    console.error('Error getting sensitive fields', err);
    res.json(err)
  }
});

entity_router.post('/:id/consent', async (req: Request, res: Response) => {
  try {
    const consent = await method.entities.withdrawConsent(req.params.id);
    res.json(consent);
  } catch (err) {
    console.error('Error withdrawing consent', req.params.id, err);
    res.json(err);
  }
});

export { entity_router };