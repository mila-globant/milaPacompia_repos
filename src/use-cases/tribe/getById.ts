import { injectable, inject } from 'tsyringe'
import { ITribeDTO, ITribeInteractor } from '../../core/interactors/tribe'

@injectable()
export class TribeById {
  constructor (
    @inject('TribeInteractor') private readonly tribeInteractor: ITribeInteractor
  ) {}

  async execute (id: number): Promise<ITribeDTO> {
    return this.tribeInteractor.getById(id)
  }
}
