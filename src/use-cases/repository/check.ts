import { injectable, inject } from 'tsyringe'
import { IRepositoryDTO, IRepositoryInteractor } from '../../core/interactors/repository'

@injectable()
export class RepositoryCheck {
  constructor (
    @inject('RepositoryInteractor') private readonly repositoryInteractor: IRepositoryInteractor
  ) {}

  public async execute (): Promise<IRepositoryDTO[]> {
    return this.repositoryInteractor.check()
  }
}
