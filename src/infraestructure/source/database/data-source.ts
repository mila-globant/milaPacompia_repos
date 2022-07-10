

import { DataSource } from 'typeorm'
import { URL } from 'url'
import { Metrics } from '../../../core/entities/metrics'
import { Organization } from '../../../core/entities/organization'
import { Repository } from '../../../core/entities/repository'
import { Tribe } from '../../../core/entities/tribe'
import { Config } from '../../config'

const dbUrl = new URL(Config.databaseUrl)
const routingId = dbUrl.searchParams.get('options')
dbUrl.searchParams.delete('options')

export const AppDataSource = new DataSource({
  type: 'cockroachdb',
  url: dbUrl.toString(),
  ssl: true,
  extra: {
    options: routingId
  },
  synchronize: true,
  entities: [Organization, Tribe, Repository, Metrics]
})
