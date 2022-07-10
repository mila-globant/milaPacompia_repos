import { injectable } from 'tsyringe'
import { Repository } from 'typeorm';
import { Organization } from '../../../core/entities/organization';
import { IOrganizationInput, IOrganizationDTO, IOrganizationInteractor } from "../../../core/interactors/organization";
import { AppDataSource } from './data-source';

@injectable()
export class OrganizationInteractorDatabase implements IOrganizationInteractor {
  static repository: Repository<Organization> = AppDataSource.getRepository(Organization)

  constructor () {}

  async create (data: IOrganizationInput): Promise<number> {
    const item = new Organization()
    item.name = data.name
    item.status = data.status
    const response = await OrganizationInteractorDatabase.repository.save(item)
    return response.id
  }

  async getById (id: number): Promise<IOrganizationDTO> {
    return await OrganizationInteractorDatabase.repository.findOneOrFail({ where: { id }})
  }

  getAll: () => Promise<IOrganizationDTO[]>

  update: (data: IOrganizationDTO) => Promise<IOrganizationDTO>

  delete: (id: number) => Promise<boolean>
}
