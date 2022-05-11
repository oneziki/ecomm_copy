import React from "react";
import "bootstrap";
import { useParams } from "react-router-dom";

function ItemDetailOld({ handleClick, products }) {
  const { productCode, vendor, value } = useParams();
  // const item = { productCode, vendor, value };
  const item = products.find((item) => item.productCode === productCode);

  return (
    <div>
      <p>product id: {item.productCode}</p>
      <p>Description: {item.value}</p>
      <p>vendor: {item.vendor}</p>
      <button onClick={() => handleClick(item)}>Add to Cart</button>
    </div>
  );
}

export default ItemDetailOld;
