import * as express from 'express'

const getErrorPage = (req: express.Request, res: express.Response) => {
  res.status(404).render('404', { pageTitle: '404 Page Not Found', path: null })
}

export { getErrorPage }
