import express from 'express'
import { Response, Request } from 'express'
import { container } from 'tsyringe';
import { MetricsGetByTribe } from '../../use-cases/metrics/getByTribe';
import { RepositoryById } from '../../use-cases/repository/getById';
import { TribeById } from '../../use-cases/tribe/getById';

const router = express.Router();

interface QueryParams {
  tribe: string
}

router.get('/', async (req: Request<{}, {}, {}, QueryParams>, res: Response) => {
  const useCase = container.resolve(MetricsGetByTribe)
  const useCaseTribe = container.resolve(TribeById)
  
  const id = parseInt(req.query.tribe)
  if (isNaN(id)) {
    res.sendStatus(404)
  }
  try {
    await useCaseTribe.execute(id)
  } catch {
    res.status(404).send({ message: 'La Tribu no se encuentra registrada' })
  }
  try {
    const data =  await useCase.execute(id)
    if (data.length === 0) {
      res.status(400).send({ message: 'La Tribu no tiene repositorios que cumplan con la cobertura necesaria' })
    }
    res.send({
      repositories: data
    })
  } catch {}
});

export default router
