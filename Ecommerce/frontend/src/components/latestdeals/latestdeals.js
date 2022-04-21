import { Container, Col, Row } from "react-bootstrap";
import StyledCard from "../Card";
import Airtime from "../../Airtime.json";
import BlackButton from "../buttons/blackButton";
import image1 from "./01.png";

function latestdeals(props) {
  return (
    <Container className="latestdeals">
      <Row className="hotcards">
        <Col className="title">
          <h1>Latest Deals</h1>
        </Col>
      </Row>
      <Row className="hotcards">
        <Col className="colcard">
          {Airtime.map((post) => {
            return (
              <StyledCard
                image={image1}
                priceoff={post.priceoff}
                title={post.title}
                F
                name={post.name}
                price={post.price}
              />
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col className="shopall">
          <a href="/products">
            <BlackButton />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
export default latestdeals;
