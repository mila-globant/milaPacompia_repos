import express from 'express'
import repositoryRouter from './repository'

const router = express.Router();
router.use('/repository', repositoryRouter)

export default router
