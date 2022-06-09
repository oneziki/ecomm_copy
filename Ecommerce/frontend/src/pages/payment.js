import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";


function Payment({ response }) {


  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = `${response.result.details.scriptUrl}`;
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);  

  return (
    <>
      <div>
        <b>{response.result.transactionId}</b>
        <b>{response.status}</b>
        <form
          action={response.result.details.flashUrl}
          class="paymentWidgets"
          data-brands="VISA MASTER AMEX"
        ></form>
      </div>
    </>
  );
}

export default Payment;
