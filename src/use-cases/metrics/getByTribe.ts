import { injectable, inject } from 'tsyringe'
import { IMetricsInteractor } from '../../core/interactors/metrics'
import { IOrganizationInteractor } from '../../core/interactors/organization'
import { IRepositoryInteractor } from '../../core/interactors/repository'
import { ITribeInteractor } from '../../core/interactors/tribe'

interface Response {
  id: number
  coverage: string
  bugs: number
  vulnerabilities: number
  hotspots: number
  codeSmells: number
  state: string
  name: string
  tribe: string
  organization: string
  verificationState: string
}

@injectable()
export class MetricsGetByTribe {
  constructor (
    @inject('MetricsInteractor') private readonly metricsInteractor: IMetricsInteractor,
    @inject('RepositoryInteractor') private readonly repositoryInteractor: IRepositoryInteractor,
    @inject('TribeInteractor') private readonly tribeInteractor: ITribeInteractor,
    @inject('OrganizationInteractor') private readonly organizationInteractor: IOrganizationInteractor
  ) {}

  public async execute (id: number): Promise<Response[]> {
    const metrics = await this.metricsInteractor.getByTribe(id)

    /* Get repository data */
    const withReposPromises = metrics.map(async (item) => {
      const repository = await this.repositoryInteractor.getById(item.idRepository)
      return {
        id: item.idRepository,
        coverage: `${item.coverage}%`,
        codeSmells: item.codeSmells,
        bugs: item.bugs,
        vulnerabilities: item.vulnerabilities,
        hotspots: item.hotspot,
        state: repository.state === 'E' ? 'Habilitado' : 'Deshabilitado',
        verificationState: 'Verificado',
        name: repository.name,
        tribe: repository.idTribe
      }
    })
    const withRepos = await Promise.all(withReposPromises)

    /* Get tribe data */
    const withTribePromises = withRepos.map(async (item) => {
      const tribe = await this.tribeInteractor.getById(item.tribe)
      return {
        ...item,
        tribe: tribe.name,
        organization: tribe
      }
    })
    const withTribe = await Promise.all(withTribePromises)

    /* Get organization data */
    const withOrganizationPromises = withTribe.map(async (item) => {
      const organization = await this.organizationInteractor.getById(item.organization.id)
      return {
        ...item,
        organization: organization.name
      }
    })
    const withOrganization = await Promise.all(withOrganizationPromises)

    return withOrganization
  }
}
