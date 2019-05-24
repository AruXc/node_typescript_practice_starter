import * as path from 'path'

import * as express from 'express'
import * as bodyParser from 'body-parser'

import { adminRoutes } from './routes/admin'
import shopRoutes from './routes/shop'
import { getErrorPage } from '@/controllers/error'

const app: express.Application = express()
const port = process.env.PORT || 4000

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.resolve(__dirname, 'assets')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(getErrorPage)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`)
})
