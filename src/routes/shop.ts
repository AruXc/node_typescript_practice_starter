import * as express from 'express'
// import * as path from 'path'
// import rootDir from '@/util/path'
import { products } from './admin'

const shopRoutes: express.Router = express.Router()

shopRoutes.get('/', (req: express.Request, res: express.Response) => {
  const productsTemp = products
  res.render('shop', { prods: productsTemp, pageTitle: 'Shop', path: '/' })
})


export default shopRoutes 