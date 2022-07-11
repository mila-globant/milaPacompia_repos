import { injectable } from 'tsyringe'
import { Repository } from 'typeorm'
import { Tribe } from '../../../core/entities/tribe'
import { ITribeDTO, ITribeInteractor } from '../../../core/interactors/tribe'
import { AppDataSource } from './data-source'

@injectable()
export class TribeInteractorDatabase implements ITribeInteractor {
  static repository: Repository<Tribe> = AppDataSource.getRepository(Tribe)

  constructor () {}

  async getById (id: number): Promise<ITribeDTO> {
    const response = await TribeInteractorDatabase.repository.findOneOrFail({ where: { id }})
    return {
      id: response.id,
      name: response.name,
      status: response.status,
      idOrganization: response.idOrganization.id
    }
  }
}
