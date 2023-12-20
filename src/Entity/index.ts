import { Router, Request, Response } from 'express';
import { method } from '../../config';

const entity_router = Router();

entity_router.post('/', async(req: Request, res: Response) => {
  try {
    const entity = await method.entities.create(req.body);
    res.status(201).json(entity);
  } catch (err) {
    console.error('Error updating Entity:', err);
    res.json(err);
  }
})

entity_router.put('/:id', async(req: Request, res: Response) => {
  try {
    const entity = await method.entities.update(req.params.id, req.body);
    res.status(201).json(entity);
  } catch (err) {
    console.error('Error updating Entity:', req.params.id, err);
    res.json(err);
  }
});

entity_router.get('/:id',  async(req: Request, res: Response) => {
  try {
    const entity = await method.entities.get(req.params.id);
    res.status(201).json(entity);
  } catch (err) {
    console.error('Error getting Entity:', req.params.id, err);
    res.json(err);
  }
});

entity_router.get('/', async(req: Request, res: Response) => {
  try {
    const entity = await method.entities.list();
    res.status(201).json(entity);
  } catch (err) {
    console.error('Error getting Entity:', req.params.id, err);
    res.json(err);
  }
});