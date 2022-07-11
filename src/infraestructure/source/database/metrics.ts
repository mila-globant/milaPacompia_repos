import { injectable } from 'tsyringe'
import { In, MoreThan, MoreThanOrEqual, Repository } from 'typeorm'
import { Metrics } from '../../../core/entities/metrics'
import { Repository as RepositoryEntity } from '../../../core/entities/repository'
import { IMetricsDTO, IMetricsInteractor } from '../../../core/interactors/metrics'
import { AppDataSource } from './data-source'

@injectable()
export class MetricsInteractorDatabase implements IMetricsInteractor {
  static repository: Repository<Metrics> = AppDataSource.getRepository(Metrics)
  

  constructor () {}

  async getByTribe (idTribe: number): Promise<IMetricsDTO[]> {
    const repositorySource: Repository<RepositoryEntity> = AppDataSource.getRepository(RepositoryEntity)
    const repositories = await repositorySource.find({
      where: {
        idTribe: { id: idTribe },
        create_time: MoreThanOrEqual('2022-01-01 00:00:00'),
        state: 'E'
      }
    })
    const response = await MetricsInteractorDatabase.repository.find({
      where: {
        idRepository: In(repositories.map((item) => item.id)),
        coverage: MoreThan(75)
      }
    })
    return response as IMetricsDTO[]
  }
}
