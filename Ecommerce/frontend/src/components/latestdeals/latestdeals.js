import React from "react";
import { Container, Col, Row, Button, Card } from "react-bootstrap";
import "./latestdeals.scss";

import image1 from "./01.png";
import image2 from "./02.png";
import image3 from "./03.png";
import image4 from "./04.png";
import image5 from "./05.png";

function latestdeals() {

  return (
    <Container fluid className="latestdeals">
      <Container className="p-0 m-auto">
        <Row>
          <Col className="title">
            <h1>Latest Deals</h1>
          </Col>
        </Row>

        <Row className="hotcards mb-3">
          <Col className="colcard" lg={3} sm={2}>
            <Card>
              <Card.Img className="img" variant="top" src={image1} />
              <Card.Body className="cbody">
                <h6>Razor Gold</h6>
                <h4>Razor Gold</h4>
                <h5>FROM</h5>
                <h2>
                  R250{" "}
                  <span>
                    <s>R300</s>
                  </span>
                </h2>
              </Card.Body>
            </Card>
          </Col>
          <Col className="colcard" lg={3} sm={2}>
            <Card>
              <Card.Img className="img" variant="top" src={image2} />
              <Card.Body className="cbody">
                <h6>Steam</h6>
                <h4>Steam</h4>
                <h5>FROM</h5>
                <h2>
                  R100{" "}
                  <span>
                    <s>R200</s>
                  </span>
                </h2>
              </Card.Body>
            </Card>
          </Col>
          <Col className="colcard" lg={3} sm={2}>
            <Card>
              <Card.Img className="img" variant="top" src={image3} />
              <Card.Body className="cbody">
                <h6>Uber Eats</h6>
                <h4>Uber Eats</h4>
                <h5>FROM</h5>
                <h2>
                  R250{" "}
                  <span>
                    <s>R3 0</s>
                  </span>
                </h2>
              </Card.Body>
            </Card>
          </Col>
          <Col className="colcard" lg={3} sm={2}>
            <Card>
              <Card.Img className="img" variant="top" src={image4} />
              <Card.Body className="cbody">
                <h6>Uber</h6>
                <h4>Uber</h4>
                <h5>FROM</h5>
                <h2>
                  R250{" "}
                  <span>
                    <s>R3 00</s>
                  </span>
                </h2>
              </Card.Body>
            </Card>
          </Col>
          <Col className="colcard" lg={3} sm={2}>
            <Card>
              <Card.Img className="img" variant="top" src={image5} />
              <Card.Body className="cbody">
                <h6>Playstation</h6>
                <h4>PlayStation Store</h4>
                <h5>FROM</h5>
                <h2>
                  R250{" "}
                  <span>
                    <s>R3 00</s>
                  </span>
                </h2>
              </Card.Body>
            </Card>
          </Col>

        </Row>
        <Row>
          <Col className="shopall">
            <Button>
              Shop All Deals <i class="bi bi-arrow-right-short"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default latestdeals;
