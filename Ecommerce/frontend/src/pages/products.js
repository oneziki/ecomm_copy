import React, { useState, useEffect } from "react";
import StyledCard from "../components/Card";
import { Row, Col, Container } from "react-bootstrap";
import Navigationbar from "../components/navigationbar/navigationbar";
import ProductsHeader from "../components/products-header/ProductsHeader";
import Shopbybrand from "../components/shopbybrand/shopbybrand";
import Footer from "../components/footer/footer";
import AllProducts from "../components/all-products/AllProducts";

const Products = (props) => {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch(`https://fortnite-api.theapinetwork.com/items/popular`)
      .then((res) => {
        return res.json();
      })
      .then((_data) => {
        // console.log(_data);
        setData(_data.entries[1].entries);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    apiGet();
  }, []);

  console.log(data);


  return (
    <div>
      <div
        className="productDetails"
        style={{
          display: "block",
          background: "black",
          borderRadius: " 0 0 30px 30px",
          padding: 20,
        }}
      >
        <Navigationbar />
        <ProductsHeader />
      </div>
      <div>
        <AllProducts />
      </div>
      <div>
        <Shopbybrand />
        <Footer />
      </div>
    </div>
  );
};

export default Products;
