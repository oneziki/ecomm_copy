import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./footer.scss";
import image1 from "./logo.png";

function footer() {

  return (
    <Container fluid className="mt-auto footer">
      <Container className="m-auto f-row">
        <Row>
          <Col>
            <img id="bottomLogo" src={image1} alt="" />
            <hr />
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Connect with us</p>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-youtube"></i>
          </Col>
        </Row>

        <Row>
          <Col id="terms">
            <a href="#">Help</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Condition</a>
            <hr className="ww"/>
          </Col>
        </Row>

        <Row>
          <Col id="footer-credits">
            <a href="">© Flash Group 2021 | All Rights Reserved</a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default footer;
