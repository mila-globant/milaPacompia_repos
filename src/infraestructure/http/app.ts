import express from 'express'
import * as bodyParser from 'body-parser'
import router from '../routes'
import { AppDataSource } from '../source/database/data-source'
import { populateData } from '../source/database/init'

async function main() {
  await AppDataSource.initialize().then(async () => {
    console.log('Data Source has been initialized!')
    await populateData()
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err)
  })

  const api = express()

  api.listen(3000, () => {
    console.log(`server running : http://localhost:3000`)
  })

  api.use(bodyParser.json())
  api.use('/api', router)

  return api
}

export default main()
