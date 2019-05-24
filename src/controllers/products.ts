import * as express from 'express'
import { Product } from '@/models/product'


const getAddProducts = (req: express.Request, res: express.Response) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCss: true,
    productCss: true,
    activeAddProduct: true,
    layout: false
  })
}

const setAddProducts =  (req: express.Request, res: express.Response) => {
  const product = new Product(req.body.title)
  product.save()
  res.redirect('/')
}

const getProducts =  (req: express.Request, res: express.Response) => {
  Product.fetchAll((products: any[]) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCss: true,
      layout: false
    })
  })
}


export {
  getAddProducts,
  setAddProducts,
  getProducts
}