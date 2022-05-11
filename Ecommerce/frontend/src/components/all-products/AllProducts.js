import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Link,
  generatePath,
} from "react-router-dom";

const AllProducts = (products) => {
  return (
    <div className="row inner p-0 m-auto container mb-5" style={{ paddingTop: "", display: "" }}>
      <span style={{ fontSize: 12, fontWeight: 700 }}>Vouchers</span>
      <br />
      <span style={{ fontSize: 40, fontWeight: 700 }}>All Products</span>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          maxWidth: 1800,
          margin: "0 auto",
        }}
      >
        {products.products.products.map((item) => (
          <li
            key={item.productCode}
            style={{ padding: 0, width: 240, margin: 9, float: "left" }}
          >
            <Link
              to={generatePath("/itemDetail/:productCode/:value/:vendor", item)}
            >
              <div className="card" style={{ margin: 0, borderRadius: 25 }}>
                <img
                  src="..."
                  className="card-img-top"
                  alt="..."
                  style={{ width: "390px !important" }}
                />
                <div style={{ marginTop: "10px", margin: 20 }}>
                  <span>title here..</span>
                  <h6 style={{ fontSize: 19, fontWeight: 600 }}>
                    {item.vendor}
                  </h6>
                  <h2 style={{ fontSize: 26, fontWeight: 700 }}>
                    {item.value}{" "}
                  </h2>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
