import type { Config } from '@jest/types'
const { defaults } = require('jest-config')


process.env.STAGE = 'test'

const config: Config.InitialOptions = {
  testTimeout: 15000,
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['./test'],
  collectCoverageFrom: [
    'src/**'
  ],
  setupFiles: ['./jest.setup.ts'],
}

export default config