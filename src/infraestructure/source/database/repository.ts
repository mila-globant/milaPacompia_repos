import { injectable } from 'tsyringe'
import { Repository } from 'typeorm'
import { Repository as RepositoryEntity } from '../../../core/entities/repository'
import { IRepositoryCodesDTO, IRepositoryDTO, IRepositoryInteractor } from '../../../core/interactors/repository'
import { AppDataSource } from './data-source'

@injectable()
export class RepositoryInteractorDatabase implements IRepositoryInteractor {
  static repository: Repository<RepositoryEntity> = AppDataSource.getRepository(RepositoryEntity)

  constructor () {}
  async check (): Promise<IRepositoryCodesDTO[]> {
    return []
  }

  async getById (id: number): Promise<IRepositoryDTO> {
    const response = await RepositoryInteractorDatabase.repository.findOneOrFail({ where: { id }})
    return {
      ...response,
      idTribe: response.idTribe.id
    }
  }
}
