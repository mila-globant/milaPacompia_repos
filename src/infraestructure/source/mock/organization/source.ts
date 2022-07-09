import { injectable } from 'tsyringe'
import { IOrganizationInput, IOrganizationDTO, IOrganizationInteractor } from "../../../../core/interactors/organization";

@injectable()
export class OrganizationInteractorMock implements IOrganizationInteractor {
  constructor () {}

  async create (data: IOrganizationInput): Promise<number> {
    return 1
  }

  async getById (id: number): Promise<IOrganizationDTO> {
    return {
      id,
      name: 'name',
      status: 605
    }
  }

  getAll: () => Promise<IOrganizationDTO[]>

  update: (data: IOrganizationDTO) => Promise<IOrganizationDTO>

  delete: (id: number) => Promise<boolean>
}
