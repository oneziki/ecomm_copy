import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button, Card } from "react-bootstrap";
import "./ProductsHeader.scss";
import SearchBar from "../searchbar/SearchBar";
import BookData from "../../Data.json";

export default function ProductsHeader() {
  const placeholderText = ["game on", "movie fix", "right here", "right now"];
  const [state, setState] = useState(0);

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      setState(function (prev) {
        if (prev === 2) {
          setState(0);
        } else {
          setState(prev + 1);
        }
      });
    }, 2000);

    return () => {
      interval && clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div>
      <Container fluid className="landing">
        <Container className="mainLanding">
          <Row style={{paddingTop: 20}}>
            <Col>
              <h1 id="heading">
                Get your <span>{placeholderText[state]}</span>
              </h1>
            </Col>
          </Row>
          <Row className="searchbar" style={{paddingTop: "20px"}}>
            <Col>
              <SearchBar placeholder="Search Products" data={BookData} />
            </Col>
          </Row>
        </Container>
      </Container>
      </div>
    </>
  );
}