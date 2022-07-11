import { Metrics } from "../../../../core/entities/metrics"
import { Organization } from "../../../../core/entities/organization"
import { Repository } from "../../../../core/entities/repository"
import { Tribe } from "../../../../core/entities/tribe"
import { AppDataSource } from "../data-source"
import data from './data/bulk-01.json'

export const populateData = async (): Promise<void> => {
  const organization = await AppDataSource.getRepository(Organization).save(data.organization)

  const tribe = await AppDataSource.getRepository(Tribe).save({
    ...data.tribe,
    idOrganization: organization
  })

  const metricsArray = data.metrics.map((item, index) => {
    const m = new Metrics()
    m.idRepository = index + 1
    m.coverage = item.coverage
    m.bugs = item.bugs
    m.vulnerabilities = item.vulnerabilities
    m.hotspot = item.hotspot
    m.codeSmells = item.codeSmells
    return m
  })

  const repositories = await AppDataSource.getRepository(Repository).save([
    {
      ...data.repositories[0],
      idTribe: tribe,
      metrics: await AppDataSource.manager.save(metricsArray[0])
    },
    {
      ...data.repositories[1],
      idTribe: tribe,
      metrics: await AppDataSource.manager.save(metricsArray[1])
    },
    {
      ...data.repositories[2],
      idTribe: tribe,
      metrics: await AppDataSource.manager.save(metricsArray[2])
    },
    {
      ...data.repositories[3],
      idTribe: tribe,
      metrics: await AppDataSource.manager.save(metricsArray[3])
    }
  ])
}
