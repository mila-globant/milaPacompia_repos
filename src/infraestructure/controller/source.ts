import { container } from 'tsyringe'
import { IRepositoryInteractor } from '../../core/interactors/repository'
import { RepositoryInteractorMock } from '../source/mock/repository/source'

container.register<IRepositoryInteractor>('RepositoryInteractor', RepositoryInteractorMock)