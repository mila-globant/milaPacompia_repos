import { injectable } from 'tsyringe'
import { IRepositoryDTO, IRepositoryInteractor } from "../../../../core/interactors/repository";
import repositoriesData from './data/repositories.json'

@injectable()
export class RepositoryInteractorMock implements IRepositoryInteractor {
  constructor () {}

  async check (): Promise<IRepositoryDTO[]> {
    return repositoriesData
  }
}
