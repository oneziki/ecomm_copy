import React from "react";
import { Container, Col, Row, Button, Card } from "react-bootstrap";
import "./shopbybrand.scss";


import image1 from "./Brand Logos/RazerGoldLogo.png";
import image2 from "./Brand Logos/SteamLogo.png";
import image3 from "./Brand Logos/UberEatsLogo.png";
import image4 from "./Brand Logos/NetflixLogo.png";
import image5 from "./Brand Logos/PUBGLogo.png";
import image6 from "./Brand Logos/SpotifyPremiumLogo.png";

function shopbybrand() {
  return (
    <Container fluid className="shopbybrand">
      <Container className="m-auto">
        <Row>
          <Col className="title">
            <h1>Shop by Brand</h1>
          </Col>
        </Row>
        <Row className="allcards">
          <Col className="brand">
            <Card>
              <Card.Body>
                <img src={image1} alt="" />
              </Card.Body>
            </Card>
          </Col>  
          <Col className="brand">
            <Card>
              <Card.Body>
                <img src={image2} alt="" />
              </Card.Body>
            </Card>
          </Col>  
          <Col className="brand">
            <Card>
              <Card.Body>
                <img src={image3} alt="" />
              </Card.Body>
            </Card>
          </Col>  
          <Col className="brand">
            <Card>
              <Card.Body>
                <img src={image4} alt="" />
              </Card.Body>
            </Card>
          </Col>  
          <Col className="brand">
            <Card>
              <Card.Body>
                <img src={image5} alt="" />
              </Card.Body>
            </Card>
          </Col>  
          <Col className="brand">
            <Card>
              <Card.Body>
                <img src={image6} alt="" />
              </Card.Body>
            </Card>
          </Col>  
            
        </Row>
        <Row>
          <Col className="viewmore">
            <Button>See All Brands <i class="bi bi-arrow-right-short"></i></Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default shopbybrand;
