import { injectable, inject } from 'tsyringe'
import { z } from 'zod'
import { IOrganizationDTO, IOrganizationInteractor } from '../../core/interactors/organization'

export const Request = z.object({
  id: z.number().int(),
  name: z.string().max(50),
  status: z.number().int()
})

@injectable()
export class OrganizationUpdate {
  constructor (
    @inject('OrganizationInteractor') private readonly organizationInteractor: IOrganizationInteractor
  ) {}

  async execute (input: z.infer<typeof Request>): Promise<IOrganizationDTO> {
    const data = Request.parse(input)
    return this.organizationInteractor.update({
      id: data.id,
      name: data.name,
      status: data.status
    })
  }
}
