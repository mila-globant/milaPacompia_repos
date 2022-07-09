import express from 'express'
import { Response, Request } from 'express'
import { container } from 'tsyringe';
import { OrganizationCreate, Request as organizationSchema } from '../../use-cases/organization/create'
import { OrganizationById } from '../../use-cases/organization/getById'
import { validate } from '../utils/validate'

const router = express.Router()

router.post('/', validate(organizationSchema), async (req: Request, res: Response) => {
  const createUseCase = container.resolve(OrganizationCreate)
  const id =  await createUseCase.execute(req.body)
  const getUseCase = container.resolve(OrganizationById)
  const data =  await getUseCase.execute(id)
  res.send(data)
})

export default router