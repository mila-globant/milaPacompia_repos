import { container } from 'tsyringe'
import { mock, when, instance, verifyAll } from 'strong-mock'
import { IOrganizationInteractor } from '../../../../src/core/interactors/organization'
import { OrganizationCreate } from '../../../../src/use-cases/organization/create'

test('An organization should be created', async () => {
  const interactor = mock<IOrganizationInteractor>()
  when(interactor.create({ name: 'Globant', status: 604 })).thenResolve(101)

  const scope = container.createChildContainer()
  scope.registerInstance<IOrganizationInteractor>('OrganizationInteractor', instance(interactor))

  const application = scope.resolve(OrganizationCreate)
  const id = await application.execute({
    name: 'Globant',
    status: 604
  })

  expect(id).toBe(101)
  verifyAll()
})
