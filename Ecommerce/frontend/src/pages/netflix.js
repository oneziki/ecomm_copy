import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import StyledCard from "../components/Card";


function Netflix(props) {
  const { products } = props;
  return (
    <Container className="latestdeals">
      <Row className="hotcards">
        <Col className="title">
          <h1>Latest Deals</h1>
        </Col>
      </Row>
      <Row className="hotcards">
        <Col className="colcard">{" "}
        {products.map((product) => (
          <StyledCard
            key={product.id}
            product={product}
            image={product.image}
            priceoff={product.price}
            title={product.title}
            name={product.name}
            price={product.price}
          />
        ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Netflix;
