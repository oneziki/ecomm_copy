import React from 'react'

function Products(props) {

    const {product} = props;
  return (
    <div>Products
        <img src={product.img} alt="" />
        <p>{product.name}</p>
    </div>
  )
}

export default Products