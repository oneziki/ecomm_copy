import React from "react";
import "../components/latestdeals/latestdeals.scss";
import { Row, Col } from "react-bootstrap";
import Ghostwire from "../components/landing/Ghostwire.png";

function StyledCard(props) {
  return (
    <>
      <div className="container" style={{ padding: "30px 0px" }}>
        <Row>
          <Col xs={6} md={3}>
            <a href="">
              <div
                class="card"
                style={{
                  flexDirection: "row",
                  alignText: "center",
                  textAlign: "left",
                  borderRadius: "20px",
                  width: "455px",
                }}
              >
                <img
                  src={Ghostwire}
                  className=""
                  style={{
                    margin: "30px 15px",
                    width: "40%",
                    borderRadius: "20px",
                  }}
                />
                <div className="card-body" style={{ padding: "1rem 0rem" }}>
                  <p className="">Playstation</p>
                  <p className="">Ghostwire New Release</p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default StyledCard;
