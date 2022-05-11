import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./navigationbar.scss";
import logo from "./logo.png";
import logoWhite from "./logoWhite.png";
import menu from "./hamburger.png";

function Navigationbar(props) {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };


  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"} style={{borderBottom: 'solid 0.5px #55585E', backgroundColor: props.bgcolor }}>
      <Container id="navcontainer">
        <Row>
          <Col xs={3} md={3} className="d-flex logo">
            <div>
              <a href="/">              
              <img  className="menuicon" src={menu} alt="" href="/"/>
              </a>            
            </div>
            <div id="flashlogo">
              <a href="/">              
              <img className="image1" src={logo} alt="" href="/"/>
              <img className="image2" src={logoWhite} alt="" href="/"/>
              </a>            
            </div>
          </Col>
          
          <Col xs={12} md={7} className="d-flex aa" style={{borderTop: 'solid 0.5px #55585E'}}>
            <a href="/products" className="sparkle u-hover--sparkle">
              <span style={{color: props.navcolor}}>Discover</span>
            </a>
            <a href="/latest-deals" className="sparkle u-hover--sparkle">
            <span style={{color: props.navcolor}}>Latest Deals</span>
            </a>
            <Link to="/cart" id="price" className="sparkle u-hover--sparkle"><span style={{color: props.navcolor}}><b>Cart</b></span></Link>
            <a href="/" id="searchglass" className="sparkle u-hover--sparkle">
              <i class="bi bi-search"></i>
            </a>
            <a href="/">
              <span>
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="32" height="32" rx="16" fill="#DCF1BD" />
                  <path
                    d="M22.8644 12.0996H10.6519L10.3175 10.9322C10.1701 10.405 9.85628 9.93854 9.42208 9.60159C8.98788 9.26465 8.45625 9.07495 7.90538 9.0604L7.0135 9.00002C6.76296 8.99851 6.52072 9.08921 6.33356 9.25462C6.1464 9.42002 6.02757 9.64841 6.00002 9.89569C5.9985 10.1445 6.08985 10.385 6.25642 10.5708C6.423 10.7567 6.653 10.8747 6.90204 10.902L7.84457 10.9624C7.98799 10.964 8.12693 11.0121 8.24034 11.0993C8.35375 11.1865 8.43542 11.308 8.47293 11.4455L8.65535 12.0895L10.4492 18.2987L11.2702 21.1467C11.4427 21.7535 11.8105 22.2876 12.3174 22.6674C12.8243 23.0471 13.4425 23.2518 14.0775 23.25H19.8341C20.0943 23.2503 20.3447 23.1512 20.5334 22.9732C20.722 22.7953 20.8345 22.552 20.8475 22.2939C20.8345 22.0359 20.722 21.7926 20.5334 21.6147C20.3447 21.4367 20.0943 21.3376 19.8341 21.3379H14.0775C13.863 21.3343 13.6551 21.2631 13.4839 21.1347C13.3127 21.0063 13.187 20.8273 13.1248 20.6234L23.2597 17.8258C23.472 17.7536 23.6569 17.6183 23.7892 17.4383C23.9216 17.2583 23.995 17.0422 23.9995 16.8194V13.2066C24.0039 13.0583 23.9773 12.9108 23.9215 12.7732C23.8658 12.6356 23.782 12.5109 23.6754 12.407C23.5688 12.303 23.4418 12.2221 23.3023 12.1692C23.1627 12.1163 23.0137 12.0926 22.8644 12.0996Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
            <span id="lineseperate" style={{borderLeft: 'solid 1px grey', height: 30, marginLeft: 20}}>
            </span>
          </Col>
          
          <Col xs={8} md={2} className="d-flex bb m-0 p-0">

            <Link
              className="btn btn-outline-light btn-lg"
              role="button"
              to="/login"
           style={{background: 'transparent', border: 'none'}} >
              <a href="/" className="sparkle "style={{padding: 0,}} >Log in</a>
            </Link>

            <Link
              className="btn btn-outline-light btn-lg"
              role="button"
              to="/login" style={{background: '#97E128', border: 'none'}}
            >
              Sign Up
            </Link>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Navigationbar;
