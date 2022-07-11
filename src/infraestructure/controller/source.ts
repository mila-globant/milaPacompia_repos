import { container } from 'tsyringe'
import { IMetricsInteractor } from '../../core/interactors/metrics'
import { IOrganizationInteractor } from '../../core/interactors/organization'
import { IRepositoryInteractor } from '../../core/interactors/repository'
import { ITribeInteractor } from '../../core/interactors/tribe'
import { MetricsInteractorDatabase } from '../source/database/metrics'
import { OrganizationInteractorDatabase } from '../source/database/organization'
import { RepositoryInteractorDatabase } from '../source/database/repository'
import { TribeInteractorDatabase } from '../source/database/tribe'

container.register<IRepositoryInteractor>('RepositoryInteractor', RepositoryInteractorDatabase)
container.register<IOrganizationInteractor>('OrganizationInteractor', OrganizationInteractorDatabase)
container.register<IMetricsInteractor>('MetricsInteractor', MetricsInteractorDatabase)
container.register<ITribeInteractor>('TribeInteractor', TribeInteractorDatabase)
