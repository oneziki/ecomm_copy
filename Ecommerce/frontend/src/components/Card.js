import React from "react";
import { Card } from "react-bootstrap";
import "../components/latestdeals/latestdeals.scss";
import ItemDetail from "../pages/itemDetail";

function StyledCard(props) {
  // const imgStyle = {
  //   maxWidth: 240
  // }

  return (
    <Card style={{}} className="card">
      <p>{props.img}</p>
      {/* <img className="img" variant="top" src={props.image} style={imgStyle} /> */}
      <Card.Body className="cbody">
        {/* <h6>{item.vendor}</h6>
        <h4>title</h4>
        <h5>FROM</h5>
        <h2>
          {item.value}{" "}
          <span>
            <s>price off</s>
          </span>
        </h2> */}
      </Card.Body>
    </Card>
  );
}

export default StyledCard;


