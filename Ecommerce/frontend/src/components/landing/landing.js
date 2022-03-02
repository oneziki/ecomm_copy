import React from "react";
import { Container, Col, Row, Button, Card } from "react-bootstrap";
import "./landing.scss";
import Slider from "../slider/slider";
import Dropdown from "../dropdown/dropdown";
import SearchBar from "../searchbar/SearchBar";
import BookData from "../../Data.json";
import Roblox from '../landing/Roblox.png';
import Minecraft from '../landing/Minecraft.png';
import Ghostwire from '../landing/Ghostwire.png';
import Valve from '../landing/Valve.png';

function Landing() {
  return (
    <Container fluid className="landing">
      <Container className="mainLanding">
        <Row>
          <Col>
            <h1 id="heading">
              Get your <span>game on</span>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
          <SearchBar placeholder="Search Products" data={BookData}/>
          </Col>
        </Row>
        <Row id="">
          <Col id="sliderColum">
            <Slider/>
          </Col>
        </Row>
        <Row id="cards">
          <Col xs={6} md={3}>
            <a href="">
              <div class="card">
                <img
                  src={Roblox}
                />
                <div className="card-body">
                  <p className="card-text">Roblox</p>
                  <h5 className="card-title">Roblox now on sale this week</h5>
                </div>
              </div>
            </a>
          </Col>
          <Col xs={6} md={3}>
          <a href="">
              <div class="card">
                <img
                  src={Valve}
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">Valve</p>
                  <h5 className="card-title">Steam Autumn Sale</h5>
                </div>
              </div>
            </a>
          </Col>
          <Col xs={6} md={3}>
          <a href="">
              <div class="card">
                <img
                  src={Minecraft}
                />
                <div className="card-body">
                  <p className="card-text">Minecraft</p>
                  <h5 className="card-title">Limited Edition Mincract Tokens</h5>
                </div>
              </div>
            </a>
          </Col>
          <Col xs={6} md={3}>
          <a href="">
              <div class="card">
                <img
                  src={Ghostwire}
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">Playstation</p>
                  <h5 className="card-title">Ghostwire New Release</h5>
                </div>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Landing;


