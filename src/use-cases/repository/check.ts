import { injectable, inject } from 'tsyringe'
import { IRepositoryCodesDTO, IRepositoryInteractor } from '../../core/interactors/repository'

@injectable()
export class RepositoryCheck {
  constructor (
    @inject('RepositoryInteractor') private readonly repositoryInteractor: IRepositoryInteractor
  ) {}

  public async execute (): Promise<IRepositoryCodesDTO[]> {
    return this.repositoryInteractor.check()
  }
}
