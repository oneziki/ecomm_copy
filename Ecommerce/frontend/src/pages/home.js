import React from "react";
// Components
import Footer from "../components/footer/footer";
import Shopbybrand from "../components/shopbybrand/shopbybrand";
import Whatshot from "../components/whatshot/whatshot";
import Latestdeals from "../components/latestdeals/latestdeals";
import Navigationbar from "../components/navigationbar/navigationbar";
import Landing from "../components/landing/landing";
import SearchBar from "../components/searchbar/SearchBar";
// import BookData from "./Data.json";

function Home() {
  return (
    <div>
      <Navigationbar />
      <Landing />
      <SearchBar/>
      <Latestdeals />
      <Whatshot />
      <Shopbybrand />
      <Footer />
    </div>
  );
}

export default Home;
