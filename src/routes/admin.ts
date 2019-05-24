import * as express from 'express'
import { getAddProducts, setAddProducts } from '@/controllers/products'


const adminRoutes: express.Router = express.Router()
adminRoutes.get('/add-product', getAddProducts)

adminRoutes.post('/add-product', setAddProducts)

export { adminRoutes }
