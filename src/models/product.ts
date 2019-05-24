import * as fs from 'fs'
import * as path from 'path'

import rootDir from '@/util/path'

class Product {
  title: string
  constructor(t: string) {
    this.title = t
  }
  save() {
    const p = path.join(rootDir, 'data', 'products.json')
    fs.readFile(p, (err, data: any) => {
      let products: any[] = []
      if (!err) {
        products = JSON.parse(data)
      }
      products.push(this)
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err)
      })
    })
  }
  static fetchAll(cb: any) {
    const p = path.join(rootDir, 'data', 'products.json')
    fs.readFile(p, (err, data: any) => {
      if (err) {
        cb([])
      }
      cb(JSON.parse(data))
    })
  }
}

export { Product }
