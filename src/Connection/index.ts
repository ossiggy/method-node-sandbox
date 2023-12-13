import { Router, Request, Response } from 'express';
import { method } from '../../config';

const connection_router = Router();

connection_router.get('/', async (req: Request, res: Response) => {
  try {
    const connections = await method.connections.list();
    res.status(200).json(connections);
  } catch (err) {
    console.error('Error getting connections:', err);
    res.json(err);
  }
});

connection_router.get('/:id', async (req: Request, res: Response) => {
  try {
    const connection = await method.connections.get(req.params.id);
    res.status(200).json(connection);
  } catch (err) {
    console.error('Error getting connection:', req.params.id, err);
    res.json(err);
  }
});

connection_router.put('/:id', async (req: Request, res: Response) => {
  try {
    const connection = await method.connections.update(req.params.id, req.body);
    res.status(200).json(connection);
  } catch (err) {
    console.error('Error updating connection:', req.params.id, err);
    res.json(err);
  }
})

export { connection_router };