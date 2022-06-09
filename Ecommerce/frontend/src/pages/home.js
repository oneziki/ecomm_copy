//Libraries
import React from "react";
import Page from "react-page-loading";
import { BrowserRouter, Link, generatePath } from "react-router-dom";

// Components
import Footer from "../components/footer/footer";
import Shopbybrand from "../components/shopbybrand/shopbybrand";
import Whatshot from "../components/whatshot/whatshot";
import Navigationbar from "../components/navigationbar/navigationbar";
import Landing from "../components/landing/landing";
import SearchBar from "../components/searchbar/SearchBar";
import "../components/products-header/ProductsHeader.scss";

function Home({ products, countCartItem }) {

  // console.log(products);
  return (
    <div>
      <Page loader={"spin"} color={"#b2fa00"} size={4} duration={1}>
        <Navigationbar countCartItem={countCartItem} />
        <div className="maincont">
          <Landing />
        </div>
        <div className="sticky-top mobilesearch" style={{ paddingTop: 75 }}>
          <SearchBar />
        </div>
        <div className="container" style={{marginTop: "70px", marginBottom: "70px"}}>
          {/* <span style={{ fontSize: 12, fontWeight: 700 }}>Vouchers</span>
            <br />
            <span style={{ fontSize: 40, fontWeight: 700 }}>All Products</span> */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              maxWidth: 1800,
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {products.map((item) => (
              <li
                key={item.ProductCode}
                style={{ paddingBottom: 15, maxWidth: 240, float: "" }}
              >
                <Link
                  to={generatePath(
                    "/itemDetail/:ProductCode/:FaceValue/:Vendor/",
                    {
                      ProductCode: item.ProductCode,
                      FaceValue: item.FaceValue,
                      Vendor: item.Vendor,
                      Vat: item.Vat,
                    }
                  )}
                >
                  <div
                    className="card"
                    style={{
                      margin: 0,
                      borderRadius: 25,
                      backgroundColor: "white",
                    }}
                  >
                    <img
                      src={item.Logo}
                      className="card-img-top"
                      alt="..."
                      style={{ width: "390px !important", borderRadius: 25 }}
                    />
                    <div style={{ marginTop: "10px", margin: 20 }}>
                      <p color="black">{item.Vendor}</p>
                      <h6 style={{ fontSize: 19, fontWeight: 600, color: "black" }}>
                        {item.Description}
                      </h6>
                      <h2 style={{ fontSize: 26, fontWeight: 700, color: "black" }}>
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
        <Whatshot />
        <Shopbybrand />
        <Footer />
      </Page>
    </div>
  );
}

export default Home;
