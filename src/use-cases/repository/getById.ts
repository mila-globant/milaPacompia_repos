import { injectable, inject } from 'tsyringe'
import { IRepositoryDTO, IRepositoryInteractor } from '../../core/interactors/repository'

@injectable()
export class RepositoryById {
  constructor (
    @inject('RepositoryInteractor') private readonly tribeInteractor: IRepositoryInteractor
  ) {}

  async execute (id: number): Promise<IRepositoryDTO> {
    return this.tribeInteractor.getById(id)
  }
}
