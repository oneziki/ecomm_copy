import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./navigationbar.scss";
import logo from "./logo.png";

function Navigationbar() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Container id="navcontainer">
        <Row>
          <Col xs={3} md={3} className="d-flex logo">
            <div id="flashlogo">
              <img src={logo} alt="" />
            </div>
          </Col>
          <Col xs={12} md={7} className="d-flex aa">
            <a href="/discover" className="sparkle u-hover--sparkle">
              Discover
            </a>
            <a href="/latest-deals" className="sparkle u-hover--sparkle">
              Latest Deals
            </a>
            <a href="/cart" id="price" className="sparkle u-hover--sparkle">
              <b>Cart R500</b>
            </a>
            <a href="" id="searchglass" className="sparkle u-hover--sparkle">
              <i class="bi bi-search"></i>
            </a>
            <a href="" className="sparkle u-hover--sparkle">
              <i class="bi bi-bag" style={{ fontSize: 25 }}></i>
            </a>
          </Col>
          <Col xs={8} md={2} className="d-flex bb">
            <a href="" className="sparkle u-hover--sparkle">
              Rusty
            </a>
            <a href="" className="sparkle u-hover--sparkle">
              <i class="bi bi-person-circle" style={{ fontSize: 25 }}></i>
            </a>
            <a href="/logout" id="logout" className="sparkle u-hover--sparkle">
              Log Out
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Navigationbar;
