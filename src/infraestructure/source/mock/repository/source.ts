import { injectable } from 'tsyringe'
import { IRepositoryCodesDTO, IRepositoryDTO, IRepositoryInteractor } from "../../../../core/interactors/repository";
import repositoriesData from './data/repositories.json'

@injectable()
export class RepositoryInteractorMock implements IRepositoryInteractor {
  constructor () {}

  async check (): Promise<IRepositoryCodesDTO[]> {
    return repositoriesData
  }

  getById: (id: number) => Promise<IRepositoryDTO>
}
