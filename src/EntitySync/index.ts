import { Router, Request, Response } from 'express';
import { method } from '../../config';

const entity_sync_router = Router();

entity_sync_router.get('/:id', async (req: Request, res: Response) => {
  try {
    const sync = await method.entities(req.params.id).syncs().get();
    res.json(sync);
  } catch (err) {
    console.error('Error getting sync', req.params.id, err);
    res.json(err);
  }
});

entity_sync_router.post('/:id', async (req: Request, res: Response) => {
  try {
    /**
     * req.body:
     * {
     *  types: "capabilities" | "accounts"
     * }
     */
    const sync = await method.entities(req.params.id).syncs.create(req.body);
    res.json(sync);
  } catch (err) {
    console.error('Error creating sync', req.params.id, err);
    res.json(err);
  }
});

export { entity_sync_router }