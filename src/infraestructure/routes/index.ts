import express from 'express'
import repositoryRouter from './repository'
import organizationRouter from './organization'

const router = express.Router();
router.use('/repository', repositoryRouter)
router.use('/organization', organizationRouter)

export default router
