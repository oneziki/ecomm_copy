import React from "react";
import "bootstrap";

function testCart({ cartItems }) {
  return (
    <>
      <div>
        Cart Item
        {cartItems.length === 0 && <div> No items in cart</div>}
      </div>
      <div>
        {cartItems.map((item) =>(
          <div key={item.id}>
            {item.value}
          </div>
        ))}
      </div>
    </>
  );
}

export default testCart;
