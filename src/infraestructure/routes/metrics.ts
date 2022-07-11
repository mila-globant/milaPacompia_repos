import express from 'express'
import { Response, Request } from 'express'
import { container } from 'tsyringe';
import { MetricsGetByTribe } from '../../use-cases/metrics/getByTribe';

const router = express.Router();

interface QueryParams {
  tribe: string
}

router.get('/', async (req: Request<{}, {}, {}, QueryParams>, res: Response) => {
  const useCase = container.resolve(MetricsGetByTribe)
  const id = parseInt(req.query.tribe)
  if (isNaN(id)) {
    res.sendStatus(404)
  }
  const data =  await useCase.execute(id)
  res.send(data)
});

export default router
