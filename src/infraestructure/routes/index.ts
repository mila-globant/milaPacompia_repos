import express from 'express'
import repositoryRouter from './repository'
import organizationRouter from './organization'
import metricsRouter from './metrics'

const router = express.Router();
router.use('/repository', repositoryRouter)
router.use('/organization', organizationRouter)
router.use('/metrics', metricsRouter)

export default router
