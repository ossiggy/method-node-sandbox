import { Router, Request, Response } from 'express';
import { method } from '../../config';

const entity_sync_router = Router();

entity_sync_router.get('/:ent_id', async (req: Request, res: Response) => {
  try {
    const sync = await method.entities(req.params.ent_id).syncs.get();
    res.json(sync);
  } catch (err) {
    console.error('Error getting sync', req.params.ent_id, err);
    res.json(err);
  }
});

entity_sync_router.post('/:ent_id', async (req: Request, res: Response) => {
  try {
    /**
     * req.body:
     * {
     *  types: "capabilities" | "accounts"
     * }
     */
    const sync = await method.entities(req.params.ent_id).syncs.create(req.body.types);
    res.json(sync);
  } catch (err) {
    console.error('Error creating sync', req.params.ent_id, err);
    res.json(err);
  }
});

export { entity_sync_router }