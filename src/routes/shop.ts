import * as express from 'express'
import { products } from './admin'

const shopRoutes: express.Router = express.Router()

shopRoutes.get('/', (req: express.Request, res: express.Response) => {
  const productsTemp = products
  res.render('shop', {
    prods: productsTemp,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCss: true,
    layout: false
  })
})

export default shopRoutes
