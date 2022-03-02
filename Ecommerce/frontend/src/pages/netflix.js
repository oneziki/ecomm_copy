import React from 'react';
import Product from '../components/Products';


function Netflix(props) {

  const {products} = props;
  return (
    <div>
      <h2>Netflix</h2>
    {products.map((product) => (
      <Product key={product.id} product={product}></Product>
    ))}
    </div>
  )
}

export default Netflix;