import { injectable, inject } from 'tsyringe'
import { IOrganizationDTO, IOrganizationInteractor } from '../../core/interactors/organization'

@injectable()
export class OrganizationById {
  constructor (
    @inject('OrganizationInteractor') private readonly organizationInteractor: IOrganizationInteractor
  ) {}

  async execute (id: number): Promise<IOrganizationDTO> {
    return this.organizationInteractor.getById(id)
  }
}
