import { Router, Request, Response } from 'express';
import { method } from '../../config';

const health_check_router = Router();

health_check_router.get('/', async (req: Request, res: Response) => {
  try {
    const ping = await method.ping();
    res.json(ping);
  } catch (err) {
    console.error('Error during health check', err);
    res.json(err);
  }
})

export { health_check_router }