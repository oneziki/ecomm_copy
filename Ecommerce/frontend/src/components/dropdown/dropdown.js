import React from "react";
import "./dropdown.scss";
import { Dropdown, Row, Col, Button, Card } from "react-bootstrap";

function dropdown() {
  const myCard = {};
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          <span>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z"
                fill="url(#paint0_linear_1995_82573)"
              />
              <path
                d="M9.32471 14.2066V9.9376C9.32471 8.43089 10.8495 7.53403 12.0694 8.25152L15.5595 10.404L19.0496 12.5564C20.2694 13.3098 20.2694 15.1752 19.0496 15.8927L15.5595 18.0451L12.0694 20.1976C10.8495 20.9151 9.32471 19.9823 9.32471 18.5115V14.2066Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1995_82573"
                  x1="14"
                  y1="0"
                  x2="14"
                  y2="28"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#DF537B" />
                  <stop offset="1" stop-color="#D7285A" />
                </linearGradient>
              </defs>
            </svg>
          </span>

          <span className="name">Choose Category</span>
          <i class="bi bi-chevron-down"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Row className="pt-4">
            <Col>
              <p className="myStyle">Choose a category</p>
            </Col>
          </Row>
          <Row className="d-flex">
            <Col id="first-col">
              <Dropdown.Item href="#/action-1">
                <Card className="card-first">
                  <Card.Body className="p-0 d-flex">
                    <div>
                      <svg
                        width="68"
                        height="65"
                        viewBox="0 0 68 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 8C0 3.58172 3.58172 0 8 0H60C64.4183 0 68 3.58172 68 8V56.3334C68 60.7516 64.4183 64.3334 60 64.3334H8C3.58172 64.3334 0 60.7516 0 56.3334V8Z"
                          fill="#115DA5"
                        />
                        <g filter="url(#filter0_d_1995_82443)">
                          <g filter="url(#filter1_d_1995_82443)">
                            <path
                              d="M45.5432 20.4167H22.6136C16.1331 20.5046 10.9663 26.1291 11.7544 32.8082C12.2799 37.9933 16.571 42.1238 21.7378 42.651C26.0289 43.0026 29.7946 40.9813 31.9839 37.8175C32.3342 37.2902 32.9473 36.9387 33.5603 36.9387H34.4213C35.0343 36.9387 35.6473 37.2902 35.9976 37.8175C38.0118 40.8055 41.4272 42.8268 45.368 42.7389C51.1479 42.651 56.052 37.8175 56.3147 32.0172C56.5774 25.6897 51.6733 20.5925 45.5432 20.4167Z"
                              fill="url(#paint0_linear_1995_82443)"
                            />
                          </g>
                          <g filter="url(#filter2_i_1995_82443)">
                            <path
                              d="M45.0196 33.8128C44.6087 35.1531 43.1704 35.8748 41.8349 35.5655C40.4993 35.1531 39.7802 33.7097 40.0884 32.3695C40.4993 31.0292 41.9376 30.3075 43.2731 30.6168C44.6087 30.9261 45.4306 32.4726 45.0196 33.8128ZM51.5946 30.3075C51.1837 31.6478 49.7454 32.3695 48.4098 32.0602C47.0743 31.6478 46.3552 30.2044 46.6634 28.8642C47.0743 27.5239 48.5126 26.8022 49.8481 27.1115C51.1837 27.5239 51.9028 28.9673 51.5946 30.3075Z"
                              fill="#0E4A84"
                            />
                          </g>
                          <g filter="url(#filter3_i_1995_82443)">
                            <path
                              d="M29.1464 32.0432C29.1464 32.7737 28.5224 33.2955 27.8984 33.2955H25.1944V36.0091C25.1944 36.7396 24.5704 37.2614 23.9464 37.2614H22.9065C22.1785 37.2614 21.6585 36.6353 21.6585 36.0091V33.2955H18.7465C18.0185 33.2955 17.4985 32.6694 17.4985 32.0432V30.9995C17.4985 30.2689 18.1225 29.7471 18.7465 29.7471H21.5545V26.9292C21.5545 26.1987 22.1785 25.6768 22.8025 25.6768H23.8424C24.5704 25.6768 25.0904 26.303 25.0904 26.9292V29.6427H27.991C28.7189 29.6427 29.1437 30.2689 29.1437 30.8951L29.1464 32.0432Z"
                              fill="#0E4A84"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_1995_82443"
                            x="9.5"
                            y="8.66669"
                            width="49"
                            height="49"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_1995_82443"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_1995_82443"
                              result="shape"
                            />
                          </filter>
                          <filter
                            id="filter1_d_1995_82443"
                            x="10.6748"
                            y="20.4167"
                            width="46.6499"
                            height="24.325"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_1995_82443"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_1995_82443"
                              result="shape"
                            />
                          </filter>
                          <filter
                            id="filter2_i_1995_82443"
                            x="40.0176"
                            y="27.0405"
                            width="11.6479"
                            height="9.09604"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="0.5" />
                            <feGaussianBlur stdDeviation="0.25" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_1995_82443"
                            />
                          </filter>
                          <filter
                            id="filter3_i_1995_82443"
                            x="17.4985"
                            y="25.6768"
                            width="11.6479"
                            height="12.0846"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="0.5" />
                            <feGaussianBlur stdDeviation="0.25" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_1995_82443"
                            />
                          </filter>
                          <linearGradient
                            id="paint0_linear_1995_82443"
                            x1="33.9998"
                            y1="20.4167"
                            x2="33.9998"
                            y2="42.7417"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="white" />
                            <stop offset="0.413716" stop-color="white" />
                            <stop offset="1" stop-color="#E8E8E8" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="card-text">
                      <span>Gaming</span>
                      <span>Steam, Playstation, Roblox...</span>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="card-second">
                  <Card.Body className="p-0 d-flex">
                    <div>
                      <svg
                        width="68"
                        height="65"
                        viewBox="0 0 68 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 8.33334C0 3.91506 3.58172 0.333344 8 0.333344H60C64.4183 0.333344 68 3.91507 68 8.33334V56.6667C68 61.085 64.4183 64.6667 60 64.6667H8C3.58172 64.6667 0 61.085 0 56.6667V8.33334Z"
                          fill="#D7285A"
                        />
                        <g filter="url(#filter0_d_1995_82456)">
                          <g filter="url(#filter1_d_1995_82456)">
                            <circle
                              cx="34"
                              cy="32.5"
                              r="17.625"
                              fill="url(#paint0_linear_1995_82456)"
                            />
                          </g>
                          <g filter="url(#filter2_i_1995_82456)">
                            <path
                              d="M27.5063 32.7879V26.8478C27.5063 24.7513 29.6334 23.5033 31.335 24.5017L36.2036 27.4967L41.0722 30.4917C42.7739 31.54 42.7739 34.1356 41.0722 35.134L36.2036 38.129L31.335 41.124C29.6334 42.1223 27.5063 40.8245 27.5063 38.7779V32.7879Z"
                              fill="#AC2048"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_1995_82456"
                            x="9.5"
                            y="9.00003"
                            width="49"
                            height="49"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_1995_82456"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_1995_82456"
                              result="shape"
                            />
                          </filter>
                          <filter
                            id="filter1_d_1995_82456"
                            x="15.375"
                            y="14.875"
                            width="37.25"
                            height="37.25"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_1995_82456"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_1995_82456"
                              result="shape"
                            />
                          </filter>
                          <filter
                            id="filter2_i_1995_82456"
                            x="27.5063"
                            y="24.1517"
                            width="14.8423"
                            height="18.3158"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_1995_82456"
                            />
                          </filter>
                          <linearGradient
                            id="paint0_linear_1995_82456"
                            x1="34"
                            y1="14.875"
                            x2="34"
                            y2="50.125"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="white" />
                            <stop offset="0.413716" stop-color="white" />
                            <stop offset="1" stop-color="#E8E8E8" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="card-text">
                      <span>Entertainment</span>
                      <span>Netflix and Spotify</span>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="card-last">
                  <Card.Body className="p-0 d-flex">
                    <div>
                      <svg
                        width="68"
                        height="65"
                        viewBox="0 0 68 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 8.66669C0 4.24841 3.58172 0.666687 8 0.666687H60C64.4183 0.666687 68 4.24841 68 8.66669V57C68 61.4183 64.4183 65 60 65H8C3.58172 65 0 61.4183 0 57V8.66669Z"
                          fill="#21B9A7"
                        />
                        <path
                          d="M27.5373 51.6334C29.8086 51.6334 31.6498 49.7921 31.6498 47.5209C31.6498 45.2496 29.8086 43.4084 27.5373 43.4084C25.266 43.4084 23.4248 45.2496 23.4248 47.5209C23.4248 49.7921 25.266 51.6334 27.5373 51.6334Z"
                          fill="#0B3E38"
                        />
                        <path
                          d="M45.1623 51.6334C47.4336 51.6334 49.2748 49.7921 49.2748 47.5209C49.2748 45.2496 47.4336 43.4084 45.1623 43.4084C42.891 43.4084 41.0498 45.2496 41.0498 47.5209C41.0498 49.7921 42.891 51.6334 45.1623 51.6334Z"
                          fill="#0B3E38"
                        />
                        <g filter="url(#filter0_d_1995_82469)">
                          <path
                            d="M18.8565 16.3834C20.877 16.3834 22.019 17.4489 23.0732 18.5144C23.8638 19.4023 25.0937 21.7997 25.6207 23.3979C25.7086 23.6643 25.9721 23.8419 26.2357 23.8419H49.2516C50.5694 23.8419 51.5357 25.1738 51.0964 26.4168L47.0555 37.9598C46.2648 40.2684 44.1565 41.7778 41.6968 41.7778H31.5943C29.0468 41.7778 26.8506 40.1796 26.06 37.7822L23.0732 29.1694C22.6339 27.9263 21.4919 24.8186 20.7891 23.2203C19.6471 21.0005 18.5051 20.379 17.5388 20.379H15.9575C14.9034 20.379 14.0249 19.4911 14.0249 18.3368C14.0249 17.2713 14.9034 16.3834 15.9575 16.3834H18.8565Z"
                            fill="url(#paint0_linear_1995_82469)"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_1995_82469"
                            x="13.0249"
                            y="16.3834"
                            width="39.1787"
                            height="27.3945"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_1995_82469"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_1995_82469"
                              result="shape"
                            />
                          </filter>
                          <linearGradient
                            id="paint0_linear_1995_82469"
                            x1="32.6144"
                            y1="16.3834"
                            x2="32.6144"
                            y2="41.7778"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="white" />
                            <stop offset="0.413716" stop-color="white" />
                            <stop offset="1" stop-color="#E8E8E8" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="card-text">
                      <span>Lifestyle</span>
                      <span>Uber and Uber Eats</span>
                    </div>
                  </Card.Body>
                </Card>
                <Col className="allproducts">
                  <Button id="seeall">
                    Shop All Products <i class="bi bi-arrow-right-short"></i>
                  </Button>
                </Col>
              </Dropdown.Item>
            </Col>
            <Col id="second-col">
              <Dropdown.Item href="#/action-1">
                <p className="myStyles">shop top brands</p>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <Card className="second-card">
                  <Card.Body className="p-0 d-flex">
                    <div></div>
                    <div className="">
                      <span>PUBG</span>
                    </div>
                  </Card.Body>
                </Card>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <Card className="second-card">
                  <Card.Body className="p-0 d-flex">
                    <div></div>
                    <div className="">
                      <span>Spotify Premium</span>
                    </div>
                  </Card.Body>
                </Card>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <Card className="second-card">
                  <Card.Body className="p-0 d-flex">
                    <div></div>
                    <div className="">
                      <span>Netflix</span>
                    </div>
                  </Card.Body>
                </Card>
                <Col className="allproducts">
                  <Button id="seeall">
                    Browse All Brands <i class="bi bi-arrow-right-short"></i>
                  </Button>
                </Col>
              </Dropdown.Item>
            </Col>
          </Row>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default dropdown;
