import React from 'react'
import { products } from '../data'
import { SingleProducts } from './SingleProducts'

export const Products = () => {
  console.log(products)
  return (
    <div className="container">
      <div className="d-flex justify-content-center gap-3 flex-wrap bg-light">
        <h3 className='w-100 m-2'>Our Products</h3>
        {products.map(obj=><SingleProducts key={obj.id} {...obj} />)} {/**minden objektumot átadok a singleproduct-nak, s ezt fogadja is a komponens */}
      </div>
    </div>
  )
}

