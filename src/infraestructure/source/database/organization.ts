import { injectable } from 'tsyringe'
import { Repository } from 'typeorm'
import { Organization } from '../../../core/entities/organization'
import { IOrganizationInput, IOrganizationDTO, IOrganizationInteractor } from "../../../core/interactors/organization"
import { AppDataSource } from './data-source'

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

  async getAll (): Promise<IOrganizationDTO[]> {
    const response = await OrganizationInteractorDatabase.repository.find()
    return response as IOrganizationDTO[]
  }

  async update (data: IOrganizationDTO): Promise<IOrganizationDTO> {
    await OrganizationInteractorDatabase.repository.update(data.id, { name: data.name, status: data.status })
    return await this.getById(data.id)
  }

  delete: (id: number) => Promise<boolean>
}
