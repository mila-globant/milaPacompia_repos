import express from 'express'
import { Response, Request } from 'express'
import { container } from 'tsyringe'
import { OrganizationCreate, Request as organizationSchema } from '../../use-cases/organization/create'
import { OrganizationDelete } from '../../use-cases/organization/delete'
import { OrganizationAll } from '../../use-cases/organization/getAll'
import { OrganizationById } from '../../use-cases/organization/getById'
import { OrganizationUpdate } from '../../use-cases/organization/update'
import { validate } from '../utils/validate'

const router = express.Router()

router.post('/', validate(organizationSchema), async (req: Request, res: Response) => {
  const createUseCase = container.resolve(OrganizationCreate)
  const id =  await createUseCase.execute(req.body)
  const getUseCase = container.resolve(OrganizationById)
  const data =  await getUseCase.execute(id)
  res.send(data)
})

router.get('/', async (req: Request, res: Response) => {
  const useCase = container.resolve(OrganizationAll)
  const data =  await useCase.execute()
  res.send(data)
})

router.put('/:id', validate(organizationSchema), async (req: Request, res: Response) => {
  const useCase = container.resolve(OrganizationUpdate)
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.sendStatus(404)
  }
  const data =  await useCase.execute({ ...req.body, id })
  res.send(data)
})

router.delete('/:id', validate(organizationSchema), async (req: Request, res: Response) => {
  const useCase = container.resolve(OrganizationDelete)
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.sendStatus(404)
  }
  const isDeleted = await useCase.execute(id)
  res.sendStatus(isDeleted ? 204 : 404)
})

export default router
