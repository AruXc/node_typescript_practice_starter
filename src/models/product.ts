import * as fs from 'fs'
import * as path from 'path'

import rootDir from '@/util/path'

const p = path.join(rootDir, 'data', 'products.json')

const getProductsFromFile = (cb: any) => {
  fs.readFile(p, (err, data: any) => {
    if (err) {
      return cb([])
    } else {
      cb(JSON.parse(data))
    }
  })
}
class Product {
  title: string
  constructor(t: string) {
    this.title = t
  }
  save() {
    getProductsFromFile((products: any) => {
      products.push(this)
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err)
      })
    })
  }
  static fetchAll(cb: any) {
    getProductsFromFile(cb)
  }
}

export { Product }
