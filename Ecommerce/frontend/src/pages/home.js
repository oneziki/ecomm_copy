//Libraries
import React from "react";
import Page from "react-page-loading";
// Components
import Footer from "../components/footer/footer";
import Shopbybrand from "../components/shopbybrand/shopbybrand";
import Whatshot from "../components/whatshot/whatshot";
import Navigationbar from "../components/navigationbar/navigationbar";
import Landing from "../components/landing/landing";
import SearchBar from "../components/searchbar/SearchBar";
import "../components/products-header/ProductsHeader.scss";
import AllProducts from "../components/all-products/AllProducts";


// import BookData from "./Data.json";

function Home() {
  return (
    <div>
      <Page loader={"spin"} color={"#b2fa00"} size={4} duration={1}>
      <Navigationbar size="2" />
      <div className="maincont">
        <Landing />
      </div>
      <div className="sticky-top mobilesearch" style={{ paddingTop: 75 }}>
        <SearchBar />
      </div>
      <AllProducts />
      <Whatshot />
      <Shopbybrand />
      <Footer />
      </Page>
    </div>
  );
}

export default Home;
