import React from "react";
import { Container, Col, Row, Button, Card } from "react-bootstrap";
import "./landing.scss";
import Slider from "../slider/slider";
import SliderCards from "../slider/SliderCards";
import ProductsHeader from "../products-header/ProductsHeader";


function Landing() {
  return (
    <Container fluid className="landing">
      <Container className="mainLanding">
        <Row>
          <Col>
           <ProductsHeader/>
          </Col>
        </Row>
        <Row id="scr">
          <Col id="sliderColum">
            <Slider/>
          </Col>
        </Row>
        <SliderCards />
      </Container>
    </Container>
  );
}

export default Landing;


