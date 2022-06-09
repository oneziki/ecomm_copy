import React, { useState, useEffect } from "react";
import  { BrowserRouter, Link, generatePath } from "react-router-dom";
import Navigationbar from "../components/navigationbar/navigationbar";
import ProductsHeader from "../components/products-header/ProductsHeader";
import Shopbybrand from "../components/shopbybrand/shopbybrand";
import Footer from "../components/footer/footer";

const Products = ({ products, countCartItem }) => {

  console.log(products);

  return (
    <>
      <div style={{ background: "transparent", display: "flow-root" }}>
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
        <div className="container">
          <div>
            <span style={{ fontSize: 12, fontWeight: 700 }}>Vouchers</span>
            <br />
            <span style={{ fontSize: 40, fontWeight: 700,  }}>All Products</span>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                paddingTop: 50,
                maxWidth: 1800,
                margin: "0 auto",
                display: "flex", 
                flexWrap: "wrap",
                justifyContent: "start"
              }}
            >
              {products.map((item) => (
                <li
                  key={item.ProductCode}
                  style={{ paddingBottom: 15, maxWidth: 240, float: "", display: "flex", margin: "9px" }}
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
                      style={{ margin: 0, borderRadius: 25, backgroundColor: "#white" }}
                    >
                      <img
                        src={item.Logo}
                        className="card-img-top"
                        alt="..."
                        style={{ width: "390px !important", borderRadius: 25 }}
                      />
                      <div style={{ marginTop: "10px", margin: 20 }}>
                        <p style={{color: "black"}}>{item.Vendor}</p>
                        <h6 style={{ fontSize: 19, fontWeight: 600, color: "black" }}>
                          {item.Description}
                        </h6>
                        <h2 style={{ fontSize: 26, fontWeight: 700, color: "black" }}>
                          R {item.FaceValue}{" "}
                          <span style={{ display: "none", color: "black" }}>{item.Vat} </span>
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
      <div style={{ display: "flex !important", background: "white", marginTop: 65 }}>
        <Shopbybrand />
        <Footer />
      </div>
    </>
  );
};

export default Products;
