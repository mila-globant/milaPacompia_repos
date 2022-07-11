import { injectable, inject } from 'tsyringe'
import { IMetricsDTO, IMetricsInteractor } from '../../core/interactors/metrics'

@injectable()
export class MetricsGetByTribe {
  constructor (
    @inject('MetricsInteractor') private readonly metricsInteractor: IMetricsInteractor
  ) {}

  public async execute (id: number): Promise<IMetricsDTO[]> {
    return this.metricsInteractor.getByTribe(id)
  }
}
