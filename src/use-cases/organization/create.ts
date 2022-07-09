import { injectable, inject } from 'tsyringe'
import { z } from 'zod'
import { IOrganizationInteractor } from '../../core/interactors/organization'

export const Request = z.object({
  name: z.string().max(50),
  status: z.number().int()
})

@injectable()
export class OrganizationCreate {
  constructor (
    @inject('OrganizationInteractor') private readonly organizationInteractor: IOrganizationInteractor
  ) {}

  async execute (input: z.infer<typeof Request>): Promise<number> {
    const data = Request.parse(input)
    return this.organizationInteractor.create({
      name: data.name,
      status: data.status
    })
  }
}
