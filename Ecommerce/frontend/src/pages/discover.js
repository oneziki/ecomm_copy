import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import StyledCard from "../components/Card";

const Discover = (props, params) => {
  const token = "8737d39f-3336-3ffd-8e1a-f664b2bb759c";
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.flash-internal.flash-group.com/ecommerceManagement/1.0.0/api/product/",
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((res) => res.json())
      .then((json) => setResult(json));
  }, []);

  const cardStyle = {
    listStyle: "none",
    margin: 5,
    paddingLeft: 0,
    minWidth: 240,
  };

  return (
    <>
      <div className="latestdeals container my-5">
        <h1>All Products</h1>
        <Row className="hotcards">
          <Col className="colcard">
            {(result?.result || []).map((item) => (
              <div key={item.productCode} style={cardStyle}>
                <a href={`/itemDetail/${item.productCode}/${item.value}/${item.vendor}/${"img"}`}>
                  {" "}
                  <StyledCard
                    key={item.productCode}
                    name={item.vendor}
                    title={item.description}
                    price={item.value}
                    img={"this is an image"}
                  />
                </a>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Discover;
