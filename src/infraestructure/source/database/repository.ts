import { injectable } from 'tsyringe'
import { Repository } from 'typeorm'
import { Repository as RepositoryEntity } from '../../../core/entities/repository'
import { IRepositoryDTO, IRepositoryInteractor } from '../../../core/interactors/repository'
import { AppDataSource } from './data-source'

@injectable()
export class RepositoryInteractorDatabase implements IRepositoryInteractor {
  static repository: Repository<RepositoryEntity> = AppDataSource.getRepository(RepositoryEntity)

  constructor () {}
  check: () => Promise<IRepositoryDTO[]>
}
