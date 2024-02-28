import { Router, Request, Response } from 'express';
import { method } from '../../config';

const element_router = Router();

element_router.get('/:ent_id', async(req: Request, res: Response) => {
  try {
    const token = await method.elements.getSessionResults(req.params.ent_id);
    res.json(token);
  } catch (err) {
    console.error('Error getting session results', err);
    res.json(err);
  }
});

element_router.post('/', async (req: Request, res: Response) => {
  try {
    console.log('creating token', req.body)
    /**
     * req.body:
     * {
        entity_id: entityId,
        team_name: 'Demo Auth App',
        type: 'auth',
        auth: {}
      }
     * 
     */
    const token = await method.elements.createToken(req.body);
    res.json(token);
  } catch (err) {
    console.error('Error creating element token', err);
    res.json(err);
  }
});

element_router.post('/exchange_one', async (req: Request, res: Response) => {
  try {
    /**
     * req.body:
     * { 
     *    token: "1234567",
     * }
     */
    const token = await method.elements.exchangePublicAccountToken(req.body.token);
    res.json(token);
  } catch (err) {
    console.error('Error exchanging token', err);
    res.json(err);
  }
});

element_router.post('/exchange_many', async (req: Request, res: Response) => {
  try {
    /**
     * req.body:
     * { 
     *    tokens: ["1234567", "8901234"],
     * }
     */
    const tokens = await method.elements.exchangePublicAccountTokens(req.body.tokens);
    res.json(tokens);
  } catch (err) {
    console.error('Error exchanging tokens', err);
    res.json(err);
  }
});

export { element_router };