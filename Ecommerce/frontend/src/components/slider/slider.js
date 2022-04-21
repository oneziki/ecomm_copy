import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./slider.scss";
import icon1 from "../slider/icon1.png";
import image1 from "../slider/image1.png";
import image2 from "../slider/image2.png";
import image3 from "../slider/image3.png";
import image4 from "../slider/image4.png";
import OnOffer from '../slider/OnOffer';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <OnOffer/>
      <Carousel autoPlay id="were" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="img-slide d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <span>
              <img style={{ height: 50, width: 50 }} src={icon1} alt="" />
            </span>
            <br />
            <span className="cardtitle"
            >
              STEAM AUTUMN SALE
            </span>{" "}
            <br />
            <span style={{ fontSize: 20, fontWeight: 400 }}>
              1 MARCH - 31 MAY{" "}
            </span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-slide d-block w-100"
            src={image2}
            alt="First slide"
          />
          <Carousel.Caption>
            <span>
              <img style={{ height: 50, width: 50 }} src={icon1} alt="" />
            </span>
            <br />
            <span
             className="cardtitle"
            >
              STEAM AUTUMN SALE
            </span>{" "}
            <br />
            <span style={{ fontSize: 20, fontWeight: 400 }}>
              1 MARCH - 31 MAY{" "}
            </span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-slide d-block w-100"
            src={image3}
            alt="First slide"
          />
          <Carousel.Caption>
            <span>
              <img style={{ height: 50, width: 50 }} src={icon1} alt="" />
            </span>
            <br />
            <span
              className="cardtitle"
            >
              STEAM AUTUMN SALE
            </span>{" "}
            <br />
            <span style={{ fontSize: 20, fontWeight: 400 }}>
              1 MARCH - 31 MAY{" "}
            </span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-slide d-block w-100"
            src={image4}
            alt="First slide"
          />
          <Carousel.Caption>
            <span>
              <img style={{ height: 50, width: 50 }} src={icon1} alt="" />
            </span>
            <br />
            <span
              className="cardtitle"
            >
              STEAM AUTUMN SALE
            </span>{" "}
            <br />
            <span style={{ fontSize: 20, fontWeight: 400 }}>
              1 MARCH - 31 MAY{" "}
            </span>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
