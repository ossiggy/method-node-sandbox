import { Router, Request, Response } from 'express';
import { method } from '../../config';

const element_router = Router();

element_router.get('/:id', async(req: Request, res: Response) => {
  try {
    const token = await method.elements.getSessionResults(req.params.id);
    res.status(201).json(token);
  } catch (err) {
    console.error('Error getting session results', err);
    res.json(err);
  }
});

element_router.post('/', async (req: Request, res: Response) => {
  try {
    const token = await method.elements.createToken(req.body);
    res.status(201).json(token);
  } catch (err) {
    console.error('Error creating element token', err);
    res.json(err);
  }
});

element_router.post('/exchange_one', async (req: Request, res: Response) => {
  try {
    const token = await method.elements.exchangePublicAccountToken(req.body);
    res.status(201).json(token);
  } catch (err) {
    console.error('Error exchanging token', err);
    res.json(err);
  }
});

element_router.post('/exchange_many', async (req: Request, res: Response) => {
  try {
    const tokens = await method.elements.exchangePublicAccountTokens(req.body);
    res.status(201).json(tokens);
  } catch (err) {
    console.error('Error exchanging tokens', err);
    res.json(err);
  }
});

export { element_router };