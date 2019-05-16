import * as express from 'express'
// import * as path from 'path'
// import rootDir from '@/util/path'

const products: any[] = []

const adminRoutes: express.Router = express.Router() 
adminRoutes.get('/add-product', (req: express.Request, res: express.Response) => {
  res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' })
})

adminRoutes.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title })
  res.redirect('/')
})

export { 
  adminRoutes, 
  products 
}