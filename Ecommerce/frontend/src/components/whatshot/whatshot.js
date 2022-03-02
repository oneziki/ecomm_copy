import React from "react";
import { Container, Col, Row, Button, Card } from "react-bootstrap";
import "./whatshot.scss";
// import background from "./01.png";

function whatshot() {
  const myBG = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1614294148960-9aa740632a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80')",
    height: "326px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Container fluid className="whatshot">
      <Container className="inner p-0 m-auto">
        <Row>
          <Col className="title">
            <h1>What's Hot</h1>
          </Col>
        </Row>

        <Row className="hotcards">
          <Col lg={4} sm={12}>
            <Card style={myBG}>
              <Card.Body className="m-3">
                <h2 className="title">For the gamers</h2>
                <Button className="purple-btn">Browse Gaming</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} sm={12}>
            <Card style={myBG}>
              <Card.Body className="m-3">
                <h2 className="title">Movie Night</h2>
                <Button className="pink-btn">See Entertainment</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} sm={12}>
            <Card style={myBG}>
              <Card.Body className="m-3">
                <h2 className="title">Start Living</h2>
                <Button className="orange-btn">Browse Lifestyle</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="shopall">
            <Button>
              Shop All Categories <i class="bi bi-arrow-right-short"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default whatshot;
