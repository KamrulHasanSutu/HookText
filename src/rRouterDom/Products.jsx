import React from 'react'
import products from '../data'
import { Link } from 'react-router-dom'

 const Products = () => {
  return (
    <div>
      <h2>Products page</h2>
      {products.map((product)=> {
          return (
            <article key={product.id} >
              <h5>{product.name}</h5>
            <Link to={`/products/${product.id}`}>More info</Link>
            </article>
          );
      })}
    </div>
  )
}
export default Products