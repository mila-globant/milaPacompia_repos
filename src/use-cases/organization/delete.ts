import { injectable, inject } from 'tsyringe'
import {  IOrganizationInteractor } from '../../core/interactors/organization'

@injectable()
export class OrganizationDelete {
  constructor (
    @inject('OrganizationInteractor') private readonly organizationInteractor: IOrganizationInteractor
  ) {}

  async execute (id: number): Promise<boolean> {
    return this.organizationInteractor.delete(id)
  }
}
