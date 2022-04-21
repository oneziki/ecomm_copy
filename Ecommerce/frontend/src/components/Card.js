import React from "react";
import { Card } from "react-bootstrap";
import "../components/latestdeals/latestdeals.scss"

function StyledCard(props) {
  // const imgStyle = {
  //   maxWidth: 240
  // }

  return (
    <Card style={{}} className="card">
      <p>{props.img}</p>
      {/* <img className="img" variant="top" src={props.image} style={imgStyle} /> */}
      <Card.Body className="cbody">
        <h6>{props.name}</h6>
        <h4>{props.title}</h4>
        <h5>FROM</h5>
        <h2>
          {props.price}{" "}
          <span>
            <s>{props.priceoff}</s>
          </span>
        </h2>
      </Card.Body>
    </Card>
  );
}

export default StyledCard;


