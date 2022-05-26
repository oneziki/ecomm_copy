import React, { useState } from "react";

function Checkout({ cart }) {

  console.log(cart.id);
  console.log(cart);
  const handleSubmit = () => {
    const token = "fb83b937-2739-3d6e-9519-09387b92dfae";
    const data = {
      transactionReference: "string",
      paymentMethod: "CreditCard",
      checkoutOrderUrl: "http://www.test.com/",
      user: {
        name: "string",
        msisdn: "+27610983142",
        email: "test@test.com",
      },
      payementMethodDetail: {
        RedirectUrl: "http://www.test.com",
        PurchaseEventWebhookUrl: "http://www.test.com",
      },

    //  This is the bundle object I to replace with the data coming from Props 
      bundle: [
        {
          "ProductCode": "317",
          "Amount": 5000,
          "CurrencyCode": "ZAR",
          "Quantity": 1    }
      ],
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };
    fetch(
      "https://api.flash-internal.flash-group.com/ecommerceManagement/1.0.0/api/checkout/",
      requestOptions
    )
      .then((response) => response.json())
      .then((res) => console.log(res));
  };

  return (
    <div className="App">
      <button type="submit" onClick={handleSubmit}>
        Post items
      </button>
      <div>
        <ul>
          {cart.map((item) => (
            <li>{item.id}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Checkout;
