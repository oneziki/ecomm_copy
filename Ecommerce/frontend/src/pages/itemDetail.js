import React from "react";
import "bootstrap";
import { useParams } from "react-router-dom";

function ItemDetail({handleAddProduct}) {
  const params = useParams();
  let productCode = params.productCode; // <-- access `productCode` param
  let vendor = params.vendor; // <-- access `vendor` param
  let value = params.value; // <-- access `value` param
  let img = params.img;
  let productItem = {productCode, value, vendor};
  console.log(params);

  return (
    <>
      <div>
        <p>product id: {productCode}</p>
        <p>price: {value}</p>
        <p>vendor: {vendor}</p>
        <p>{img}</p>
        
      </div>
      <button onClick={() => handleAddProduct(productItem)}>Add to Cart</button>
    </>
  );
}

export default ItemDetail;
