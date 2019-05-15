import * as path from 'path'

import * as express from 'express'
import * as bodyParser from 'body-parser'

import adminRoutes from './routes/admin'
import shopRoutes from './routes/shop'

const app: express.Application = express()
const port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, 'views', '404.html'))
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`)
})