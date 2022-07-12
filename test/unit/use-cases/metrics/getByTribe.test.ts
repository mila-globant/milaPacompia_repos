import { container } from 'tsyringe'
import { mock, when, instance, verifyAll, It } from 'strong-mock'
import { OrganizationCreate } from '../../../../src/use-cases/organization/create'
import { IMetricsInteractor, IMetricsDTO } from '../../../../src/core/interactors/metrics'
import { IRepositoryInteractor } from '../../../../src/core/interactors/repository'
import { ITribeInteractor } from '../../../../src/core/interactors/tribe'
import { IOrganizationInteractor } from '../../../../src/core/interactors/organization'
import { MetricsGetByTribe } from '../../../../src/use-cases/metrics/getByTribe'

test('Metrics of registered tribe should be retrieved', async () => {
  const metricsInteractor = mock<IMetricsInteractor>()
  const repositoryInteractor = mock<IRepositoryInteractor>()
  const tribeInteractor = mock<ITribeInteractor>()
  const organizationInteractor = mock<IOrganizationInteractor>()
  const metrics: IMetricsDTO[] = [
    {
      idRepository: 201,
      coverage: 76,
      bugs: 0,
      vulnerabilities: 10,
      hotspot: 1,
      codeSmells: 0,
    },
    {
      idRepository: 202,
      coverage: 95,
      bugs: 0,
      vulnerabilities: 2,
      hotspot: 1,
      codeSmells: 0,
    } 
  ]
  when(metricsInteractor.getByTribe(4)).thenResolve(metrics)
  when(repositoryInteractor.getById(201)).thenResolve({
    id: 201,
    state: 'E',
    name: 'repo-name-201',
    idTribe: 4,
  })
  when(repositoryInteractor.getById(202)).thenResolve({
    id: 202,
    state: 'E',
    name: 'repo-name-202',
    idTribe: 4,
  })
  when(tribeInteractor.getById(4)).thenResolve({
    id: 4,
    name: 'tribe-name',
    status: 200,
    idOrganization: 101
  }).twice()
  when(organizationInteractor.getById(101)).thenResolve({
    id: 101,
    name: 'organization-name',
    status: 200
  }).twice()

  const scope = container.createChildContainer()
  scope.registerInstance<IMetricsInteractor>('MetricsInteractor', instance(metricsInteractor))
  scope.registerInstance<IRepositoryInteractor>('RepositoryInteractor', instance(repositoryInteractor))
  scope.registerInstance<ITribeInteractor>('TribeInteractor', instance(tribeInteractor))
  scope.registerInstance<IOrganizationInteractor>('OrganizationInteractor', instance(organizationInteractor))

  const application = scope.resolve(MetricsGetByTribe)
  const response = await application.execute(4)

  expect(response.length).toBe(metrics.length)
  verifyAll()
})
