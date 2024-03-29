import { Router, Request, Response } from 'express';
import { method } from '../../config';

const report_router = Router();

report_router.get('/:rpt_id', async (req: Request, res: Response) => {
  try {
    const report = await method.reports.get(req.params.rpt_id);
    res.json(report);
  } catch (err) {
    console.error('Error getting report', req.params.rpt_id, err);
    res.json(err);
  }
});

report_router.post('/:rpt_id', async (req: Request, res: Response) => {
  try {
    /**
     * req.body:
     * {
     *  type: 'payments.created.current'
        | 'payments.created.previous'
        | 'payments.updated.current'
        | 'payments.updated.previous'
        | 'ach.pull.upcoming'
        | 'ach.pull.previous'
        | 'ach.pull.nightly'
        | 'ach.reversals.nightly'
     * }
     */
    const report = await method.reports.create(req.body);
    res.json(report);
  } catch (err) {
    console.error('Error getting report', req.params.rpt_id, err);
    res.json(err);
  }
});

report_router.get('/:rpt_id/download', async (req: Request, res: Response) => {
  try {
    const report = await method.reports.download(req.params.rpt_id);
    res.send(report);
  } catch (err) {
    console.error('Error downloading report', req.params.rpt_id, err)
    res.json(err);
  }
});

export { report_router };