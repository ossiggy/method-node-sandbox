import { Router, Request, Response } from 'express';
import { method } from '../../config';

const bin_router = Router();

bin_router.get("/:bin", async(req: Request, res: Response) => {
  try {
    const bin = await method.bins.get(req.params.bin);
    res.json(bin);
  } catch (err) {
    console.error('Error getting bin', req.params.id, err);
    res.json(err)
  }
})

export { bin_router };