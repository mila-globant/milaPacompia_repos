

import { DataSource } from 'typeorm'
import { URL } from 'url'
import { Organization } from '../../../core/entities/organization'
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
  entities: [Organization]
})
