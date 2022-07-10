import { container } from 'tsyringe'
import { IOrganizationInteractor } from '../../core/interactors/organization'
import { IRepositoryInteractor } from '../../core/interactors/repository'
import { OrganizationInteractorDatabase } from '../source/database/organization'
import { RepositoryInteractorMock } from '../source/mock/repository/source'

container.register<IRepositoryInteractor>('RepositoryInteractor', RepositoryInteractorMock)
container.register<IOrganizationInteractor>('OrganizationInteractor', OrganizationInteractorDatabase)
