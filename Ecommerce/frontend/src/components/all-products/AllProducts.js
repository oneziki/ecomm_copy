import React, { useState, useEffect } from "react";
import StyledCard from "../Card";
import { Row, Col } from "react-bootstrap";
import Discover from "../../pages/discover";



const AllProducts = (props) => {
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
    <Discover/>
  );
};

export default AllProducts;
