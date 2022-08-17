import React from 'react'
import products from '../data'
import { Link, useParams } from 'react-router-dom';

 const SingleProduct = () => {
    const {productId} = useParams();
    const product = products.find((product)=> product.id===productId);

    const {image,name} = product;
  return (
    <div>
        <h2>{productId}</h2>
        <h2>{name}</h2>
        <h2>{image}</h2>
        <Link to='/products'>Back to poducts</Link>
    </div>
  )
}
export default SingleProduct;