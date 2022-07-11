import { container } from 'tsyringe'
import { IMetricsInteractor } from '../../core/interactors/metrics'
import { IOrganizationInteractor } from '../../core/interactors/organization'
import { IRepositoryInteractor } from '../../core/interactors/repository'
import { MetricsInteractorDatabase } from '../source/database/metrics'
import { OrganizationInteractorDatabase } from '../source/database/organization'
import { RepositoryInteractorMock } from '../source/mock/repository/source'

container.register<IRepositoryInteractor>('RepositoryInteractor', RepositoryInteractorMock)
container.register<IOrganizationInteractor>('OrganizationInteractor', OrganizationInteractorDatabase)
container.register<IMetricsInteractor>('MetricsInteractor', MetricsInteractorDatabase)
