import express from 'express'
import { Response, Request } from 'express'
import { container } from 'tsyringe';
import { RepositoryCheck } from '../../use-cases/repository/check';

const router = express.Router();

router.get('/check', async (req: Request, res: Response) => {
  const useCase = container.resolve(RepositoryCheck)
  const repositoriesList =  await useCase.execute()
  res.send({
    repositories: repositoriesList
  })
});

export default router
