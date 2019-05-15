import * as express from 'express'
import * as path from 'path'
import rootDir from '@/util/path'

const shopRoutes: express.Router = express.Router()
shopRoutes.get('/', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

export default shopRoutes 