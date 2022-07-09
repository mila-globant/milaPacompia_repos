import express from 'express';
import { Request, Response } from 'express'
import * as bodyParser from 'body-parser'
import router from '../routes'

const api = express();

api.listen(3000, () => {
  console.log(`server running : http://localhost:3000`);
});

api.use(bodyParser.json());
api.use('/api', router)

export default api;
