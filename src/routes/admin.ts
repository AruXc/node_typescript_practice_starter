import * as express from 'express'
import * as path from 'path'
import rootDir from '@/util/path'

const adminRoutes: express.Router = express.Router() 
adminRoutes.get('/add-product', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

adminRoutes.post('/add-product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

export default adminRoutes 