import * as express from 'express'

import { getProducts } from '@/controllers/products'
const shopRoutes: express.Router = express.Router()

shopRoutes.get('/', getProducts)

export default shopRoutes
