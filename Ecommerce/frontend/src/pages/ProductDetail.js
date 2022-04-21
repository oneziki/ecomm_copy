import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Navigationbar from "../components/navigationbar/navigationbar";
import Footer from "../components/footer/footer";
import Ymal from "../components/you-might-also-like/ymal";
import Atc from "../components/buttons/atc";
import Gift from "../assets/images/Gift.png";
import "../pages/ProductDetails.scss";
import "bootstrap";

function ProductDetail(param, props) {
  // const { id } = useParams();

  // const productCode = props.match
  // useEffect(async () => {
  //   const fetchItem = await fetch(
  //     `api/products/products_by_id?id=${productCode}&type=single`
  //   );
  //   const item = await fetchItem.json();
  //   setItem(item.data);
  //   console.log(item.data["item"]);
  //   setIsLoading(false);
  // }, []);

  // const [item, setItem] = useState({});
  // const [loading, setIsLoading] = useState(true);

  // const productCode = props.match.params.productCode
  // useEffect(() => {
  //   Axios.get(`api/products/products_by_id?id=${productCode}&type=single`)
  // }, []);

  return (
    <>
      <Navigationbar bgcolor="white" navcolor="black" />
      <Container className="mainContainer">
        Product Details
        {/* <div className="containter productsDetails mb-4">
          <div class="row">
            <div className="col-md-12 pt-5 pb-5">
              <row>
                <ul className="breadcrumb">
                  <li className="itemStyle">
                    <a href="/" class="Active">
                      Discover
                    </a>
                    <span className="p-1">
                      <i class="bi bi-chevron-right"></i>
                    </span>
                  </li>
                  <li className="itemStyle">
                    <a href="/">Categories</a>
                    <span className="p-1">
                      <i class="bi bi-chevron-right"></i>
                    </span>
                  </li>
                  <li className="itemStyle">
                    <a href="/">Entertainment</a>
                  </li>
                </ul>
              </row>
            </div>
            <div className="col-md-6">
              {!loading && (
                <>
                  <img
                    src={item["item"].images.background}
                    alt=""
                    className="img"
                  />

                  <div className="productinfo">
                    <div className="py-2 mt-4">
                      <span className="h3Title">Details</span>
                      <p style={{ fontSize: 14, margin: 0, padding: 0 }}>
                        {item["item"].description}
                      </p>
                    </div>
                    <div className="py-2">
                      <span className="h3Title">
                        How to redeem your voucher
                      </span>
                      <p style={{ fontSize: 14, margin: 0, padding: 0 }}>
                        1. Sign in by going to store.playstation.com
                      </p>
                      <p style={{ fontSize: 14, margin: 0, padding: 0 }}>
                        2. Select Redeem codes from the menu.
                      </p>
                      <p style={{ fontSize: 14, margin: 0, padding: 0 }}>
                        3. Enter PIN found on your reciept and select Redeem
                      </p>
                    </div>
                    <div className="py-2">
                      <span className="h3Title">Terms & Conditions</span>

                      <p style={{ fontSize: 14, margin: 0, padding: 0 }}>
                        Valid for 12 months from date of purchase.
                      </p>
                      <p style={{ fontSize: 14, margin: 0, padding: 0 }}>
                        Valid for use in South Africa only. Product is none
                        returnable or refundable
                      </p>
                      <p style={{ fontSize: 14, margin: 0, padding: 0 }}>
                        For full T's & C's go to:{""}
                        <a
                          className={{ color: "#008FEB" }}
                          href="https://www.playstation.com/en-za/legal/sen-voucher-code-terms-and-conditions/"
                        >
                          {" "}
                          https://www.playstation.com/en-za/legal/sen-voucher-code-terms-and-conditions/
                        </a>
                      </p>
                    </div>
                    <div className="py-2">
                      <span className="h3Title">FAQ / Support</span>
                      <p style={{ fontSize: 14, margin: 0, padding: 0 }}>
                        Have some questions? Visit:{" "}
                        <a
                          className={{ color: "#008FEB" }}
                          href="https://www.playstation.com/en-za/support/"
                        >
                          {" "}
                          https://www.playstation.com/en-za/support/
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="col-md-6 p-3">
              <div className="secondDiv pt-2">
                <div className="p-4 mb-2">
                  <span className="s1">Digidev</span>
                  <span className="s2">
                    Share{" "}
                    <span>
                      <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.451 10.5429C10.9041 10.5377 10.3758 10.74 9.97365 11.1086L4.73634 8.06008C4.77709 7.89156 4.79938 7.71916 4.80282 7.54587C4.79938 7.37259 4.77709 7.20018 4.73634 7.03167L9.97365 4.01255C10.353 4.34984 10.8375 4.54704 11.3458 4.57101C11.8541 4.59498 12.3552 4.44427 12.7649 4.14419C13.1746 3.84411 13.468 3.41295 13.5958 2.92314C13.7236 2.43333 13.678 1.9147 13.4666 1.45439C13.2553 0.994083 12.891 0.620131 12.4351 0.395357C11.9792 0.170584 11.4594 0.108683 10.963 0.220054C10.4666 0.331425 10.0239 0.609281 9.70925 1.00695C9.39456 1.40461 9.22709 1.89786 9.23496 2.40383C9.2384 2.57711 9.26069 2.74952 9.30144 2.91803L4.06413 5.93715C3.74871 5.64348 3.35384 5.44792 2.9281 5.37453C2.50237 5.30113 2.06434 5.3531 1.66792 5.52404C1.27151 5.69499 0.933988 5.97745 0.6969 6.33667C0.459811 6.69588 0.333496 7.11619 0.333496 7.54587C0.333496 7.97555 0.459811 8.39586 0.6969 8.75508C0.933988 9.1143 1.27151 9.39675 1.66792 9.5677C2.06434 9.73864 2.50237 9.79061 2.9281 9.71722C3.35384 9.64382 3.74871 9.44826 4.06413 9.1546L9.3236 12.2104C9.28532 12.3668 9.26549 12.527 9.26451 12.6879C9.26454 13.1109 9.39034 13.5244 9.62607 13.8765C9.8618 14.2286 10.1969 14.5035 10.5894 14.6666C10.9818 14.8298 11.4139 14.874 11.8315 14.7936C12.2491 14.7132 12.6335 14.5118 12.9363 14.2147C13.2391 13.9177 13.4468 13.5382 13.5333 13.1241C13.6199 12.71 13.5814 12.2796 13.4226 11.8872C13.2639 11.4948 12.992 11.1578 12.6412 10.9186C12.2904 10.6795 11.8763 10.5487 11.451 10.5429Z"
                          fill="#008FEB"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
                <div className="px-4 mb-3 mde">
                  <h2 className="h2Title">PlayStation Plus Membership</h2>
                </div>
                <div className="px-4 mb-2">
                  <span className="s3">
                    <b>from</b>
                  </span>
                  {!loading && (
                    <h1 className="h1Title">
                      <b>R {item["item"].cost} </b>
                    </h1>
                  )}
                  {!loading && (
                    <span className="s4">
                      Product Codes: {props.productCode}{" "}
                    </span>
                  )}
                </div>
                <div className="details2">
                  <div className="p-4">
                    <span className="s5">choose an option</span>
                    <br />
                    <div className="pt-3">
                      <button className="b1">
                        <span className="s6">1 Month</span>
                      </button>
                      <button className="b1">
                        <span className="s6">3 Month</span>
                      </button>
                      <button className="b1">
                        <span className="s6">6 Month</span>
                      </button>
                    </div>
                  </div>
                  <div className="qualitySection">
                    <span className="s7">quantity</span>
                  </div>
                </div>
                <hr />
                <div className="p-4 mb-4">
                  <span className="s8">
                    <span>
                      <img src={Gift} alt="" />
                    </span>{" "}
                    Is this a gift?
                  </span>
                  <span className="float-right"></span>
                  <br />
                  <div className="mt-3">
                    <span className="s9">
                      Buying for yourself? We'll send this to your email
                      address.
                    </span>
                  </div>
                </div>
                <Atc />
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Details
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        With streaming movies, television, and original
                        programming, Netflix has something for everyone. Netflix
                        members can watch their favourite entertainment right at
                        home and on any device they want, with no commercials -
                        Ever. Netflix Gift Cards can be used to pay for an
                        existing membership or start a new one. When you give
                        the gift of Netflix, you’re giving the gift of a global
                        network filled with great stories that connect us all.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        How to redeem your voucher
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        1. Sign in by going to store.playstation.com <br />
                        2. Select Redeem codes from the menu. <br />
                        3. Enter PIN found on your receipt and select Redeem.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Terms & Conditions
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Valid for 12 months from date of purchase. Valid for use
                        in South Africa only. Product is non-returnable or
                        refundable. For full T's & C's go to:
                        https://www.playstation.com/en-za/legal/sen-voucher-code-terms-and-conditions/
                      </div>
                    </div>
                  </div>
                </div>
                <Ymal />
              </div>
            </div>
          </div>
        </div> */}
      </Container>
      <Footer />
    </>
  );
}

export default ProductDetail;
