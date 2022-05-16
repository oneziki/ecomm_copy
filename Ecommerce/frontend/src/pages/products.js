import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Link,
  generatePath,
} from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Navigationbar from "../components/navigationbar/navigationbar";
import ProductsHeader from "../components/products-header/ProductsHeader";
import Shopbybrand from "../components/shopbybrand/shopbybrand";
import Footer from "../components/footer/footer";

const Products = ({ products, countCartItem }) => {

  return (
    <>
      <div style={{ background: "white", display: "flow-root" }}>
        <div
          className="productDetails"
          style={{
            display: "block",
            background: "black",
            borderRadius: " 0 0 30px 30px",
            padding: 20,
            marginBottom: 30,
          }}
        >
          <Navigationbar countCartItem={countCartItem} />
          <ProductsHeader />
        </div>
        <div className="container" style={{ paddingTop: "", display: "" }}>
          <div>
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
              {products.map((item) => (
                <li
                  key={item.productCode}
                  style={{ padding: 0, width: 240, margin: 9, float: "left" }}
                >
                  <Link
                    to={generatePath(
                      "/itemDetail/:ProductCode/:FaceValue/:Vendor/",
                      {
                        ProductCode: item.ProductCode,
                        FaceValue: item.FaceValue,
                        // Vendor: item.Vendor.replaceAll(/\W/g, "")
                        Vendor: item.Vendor,
                        Vat: item.Vat,
                      }
                    )}
                  >
                    <div
                      className="card"
                      style={{ margin: 0, borderRadius: 25 }}
                    >
                      <img
                        src={item.Logo}
                        className="card-img-top"
                        alt="..."
                        style={{ width: "390px !important", borderRadius: 25 }}
                      />
                      <div style={{ marginTop: "10px", margin: 20 }}>
                        <span>{item.Vendor}</span>
                        <h6 style={{ fontSize: 19, fontWeight: 600 }}>
                          {item.Description}
                        </h6>
                        <h2 style={{ fontSize: 26, fontWeight: 700 }}>
                          R {item.FaceValue}{" "}
                          <span style={{ display: "none" }}>{item.Vat} </span>
                        </h2>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div style={{ display: "flex !important" }}>
        <Shopbybrand />
        <Footer />
      </div>
    </>
  );
};

export default Products;
