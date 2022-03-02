import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./slider.scss";

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);

};

  return (
    <Carousel id="were" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="img-slide d-block w-100"
          src="https://images.unsplash.com/photo-1614294148960-9aa740632a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;
