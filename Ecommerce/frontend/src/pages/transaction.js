import React, { useState, useEffect } from "react";
import TransactionHeader from "../components/transactionHeader/transactionHeader";

function Transaction({ response }) {
  let currentUrl = new URL(window.location);
  let transactionId = currentUrl.searchParams.get("transactionId");

  const token = "2c506c6b-d880-36bb-bdba-a035d1464b35";
  const [loading, setLoading] = useState(true);
  const [transaction, setTransaction] = useState();

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.flash-internal.flash-group.com/ecommerceManagement/1.0.0/api/transaction/${transactionId}`,
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setTransaction(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [] );

  if (loading) {
    return null; // or loading spinner/etc
  }

  return (
    <>
      <div className="" style={{ height: "100%" }}>
        {transaction ? (
          <div>
            <TransactionHeader transaction={transaction} />
          </div>
        ) : (
          <div>No transaction data</div>
        )}
      </div>
    </>
  );
}

export default Transaction;
