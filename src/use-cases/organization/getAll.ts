import { injectable, inject } from 'tsyringe'
import { IOrganizationDTO, IOrganizationInteractor } from '../../core/interactors/organization'

@injectable()
export class OrganizationAll {
  constructor (
    @inject('OrganizationInteractor') private readonly organizationInteractor: IOrganizationInteractor
  ) {}

  async execute (): Promise<IOrganizationDTO[]> {
    return this.organizationInteractor.getAll()
  }
}
