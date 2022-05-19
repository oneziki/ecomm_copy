import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Link,
  generatePath,
} from "react-router-dom";
import Ymal from "../components/you-might-also-like/ymal";


function checkout({ cart, setCart, handleChange, countCartItem }) {


    const price = cart.reduce(
      (total, item) => total + item.amount * item.FaceValue,
      0
    );

    const orderTotal = cart.reduce((total, item) => +price + +item.Vat, 0);

    const vat = cart.reduce((total, item) => item.Vat, 12);

    function handleSubmit(e) {
      e.preventDefault()
      const {name, surname, cellphone, email } = e.target.elements;

      const data = {name: name.value, surname: surname.value, cellphone: cellphone.value, email: email.value, orderTotal, cart }

      console.log(data);
  }

console.log();

  return (
    <>
      <div class="container-fluid" style={{ height: "100vh" }}>
        <div class="row">
          <div class="col-md-9 px-5">
            <article>
              <div class="row">
                <div class="col-md-12 p-5">
                  <div className="py-4">
                    <Link to="/cart">
                      <span style={{ fontSize: 16, fontWeight: 700 }}>
                        <span>
                          <i class="bi bi-arrow-left-short"></i>
                        </span>
                        Back to Cart
                      </span>
                    </Link>

                    <br />
                    <span style={{ fontSize: 40, fontWeight: 700 }}>
                      Shipping Information
                    </span>
                  </div>

                  <div style={{margin: "100px 290px"}}>
                    <h2 style={{fontSize: 20, fontWeight: 700, width: "285px", lineHeight: "23px", paddingBottom: 16}}>Please provide your details to continue to payment</h2>
                    <form onSubmit={handleSubmit}>
                    <label for="staticEmail" className="col col-form-label" >First Name</label>
                    <input className="form-control form-control-lg" type="text" placeholder="Your name" id='name'/>
                    <label for="staticEmail" className="col-sm-2 col-form-label">Surname</label>
                    <input className="form-control form-control-lg" type="text" placeholder="Surname" id='surname'/>
                    <label for="staticEmail" className="col-sm-2 col-form-label">Cellphone</label>
                    <input className="form-control form-control-lg" type="text" placeholder="Cellphone" id='cellphone'/>
                    <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <input className="form-control form-control-lg" type="text" placeholder="Email" id='email'/>
                    <br />
                    <input                       
                        style={{
                        width: "100%",
                        height: 48,
                        fontWeight: 700,
                        borderRadius: 8,
                        border: "solid #97E128 1px",
                        padding: "auto",
                        backgroundColor: "#97E128",
                      }} type="submit" value="Confirm to payment"  />
                    </form>
                  </div>
                </div>
              </div>
              <div
                class="row position-fixed fixed-bottom"
                style={{ display: "contents" }}
              >
                <div class="col-md-12 p-5">
                  {/* <Ymal /> */}
                </div>
              </div>
            </article>
          </div>

          <div
            class="col-md-3 p-0"
            style={{ backgroundColor: "white", height: "" }}
          >
            <>
              <div class="row m-2">
                <div className="">
                  <Link to="/">
                    <span style={{ float: "right", marginTop: 25 }}>
                      <svg
                        width="38"
                        height="40"
                        viewBox="0 0 38 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.9728 40C29.4512 40 37.9456 31.0457 37.9456 20C37.9456 8.95431 29.4512 0 18.9728 0C8.49442 0 0 8.95431 0 20C0 31.0457 8.49442 40 18.9728 40Z"
                          fill="#EDEEF0"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M24.9962 27.4651L11.5303 13.9651L12.9585 12.5332L26.4244 26.0332L24.9962 27.4651Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M26.4244 13.9668L12.9585 27.4668L11.5303 26.0349L24.9962 12.5349L26.4244 13.9668Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
                <div class="col-md-12 pt-4">
                  <span style={{ fontSize: 20, fontWeight: 700 }}>Summary</span>
                </div>
                <div class="col-md-12 pt-5">
                  <div className="mt-2">
                    <span style={{ fontSize: 16 }}>Subtotal</span>
                    <span style={{ float: "right", fontSize: 16 }}>
                      R {price.toFixed(2)}
                    </span>
                  </div>
                  <div className="mt-3">
                    <span style={{ fontSize: 16 }}>VAT</span>
                    <span style={{ float: "right", fontSize: 16 }}>
                      R {vat}.00
                    </span>
                  </div>
                  <div className="mt-3">
                    <span style={{ fontSize: 16 }}>Order Total</span>
                    <span
                      style={{ float: "right", fontWeight: 600, fontSize: 16 }}
                    >
                      R {orderTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="col-md-12 m-0 p-0"
                style={{
                  height: 230,
                  position: "fixed",
                  bottom: 0,
                  width: "25%",
                }}
              >
                <div style={{padding: 20, background: "white", marginTop: -40}}>
                  <span>
                    {" "}
                    <span>logo</span> Secure checkout withh Peach Payment
                  </span>
                  <div className="m-auto">
                    <svg
                      width="242"
                      height="42"
                      viewBox="0 0 242 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="75.3333" height="42" rx="6" fill="#F2F3F5" />
                      <g clip-path="url(#clip0_2348_23409)">
                        <path
                          d="M54.926 34.6201V34.6923H54.9868C54.9993 34.6955 55.0124 34.6955 55.0248 34.6923C55.029 34.6887 55.0323 34.6844 55.0346 34.6795C55.0369 34.6745 55.0381 34.6692 55.0382 34.6638C55.0382 34.6586 55.0371 34.6535 55.0347 34.6488C55.0324 34.6442 55.029 34.6402 55.0248 34.6372C55.0133 34.6306 55.0001 34.6274 54.9868 34.6277L54.926 34.6201ZM54.9944 34.5687C55.0232 34.5666 55.0517 34.5754 55.0743 34.5934C55.0836 34.6009 55.0911 34.6105 55.096 34.6214C55.101 34.6323 55.1033 34.6442 55.1028 34.6562C55.103 34.6667 55.1011 34.6772 55.0972 34.687C55.0933 34.6968 55.0874 34.7057 55.08 34.7132C55.0615 34.7283 55.039 34.7375 55.0153 34.7398L55.1047 34.8424H55.0362L54.9526 34.7398H54.926V34.8424H54.869V34.5687H54.9944ZM54.9754 34.9355C55.0063 34.9366 55.037 34.93 55.0648 34.9165C55.0917 34.9055 55.1162 34.8894 55.137 34.869C55.1577 34.8474 55.1744 34.8223 55.1864 34.7949C55.1979 34.7672 55.2037 34.7375 55.2035 34.7075C55.2039 34.6768 55.1981 34.6465 55.1864 34.6182C55.1744 34.5907 55.1577 34.5656 55.137 34.544C55.0938 34.502 55.0357 34.4788 54.9754 34.4794C54.9448 34.4794 54.9145 34.4852 54.8861 34.4965C54.8584 34.5071 54.8332 34.5233 54.812 34.544C54.7918 34.5657 54.7758 34.5908 54.7645 34.6182C54.7528 34.6465 54.747 34.6768 54.7474 34.7075C54.7472 34.7375 54.753 34.7672 54.7645 34.7949C54.7758 34.8222 54.7918 34.8474 54.812 34.869C54.8332 34.8898 54.8584 34.9059 54.8861 34.9165C54.9141 34.9294 54.9446 34.9359 54.9754 34.9355V34.9355ZM54.9754 34.4129C55.0158 34.4125 55.0559 34.4203 55.0933 34.4357C55.1285 34.4507 55.1606 34.472 55.1883 34.4984C55.2151 34.5257 55.2364 34.558 55.251 34.5934C55.2672 34.6289 55.2756 34.6675 55.2756 34.7065C55.2756 34.7456 55.2672 34.7841 55.251 34.8196C55.236 34.8548 55.2147 34.887 55.1883 34.9146C55.1601 34.9405 55.1281 34.9616 55.0933 34.9773C55.0559 34.9928 55.0158 35.0005 54.9754 35.0002C54.935 35.0003 54.895 34.9926 54.8576 34.9773C54.8225 34.9621 54.7904 34.9409 54.7626 34.9146C54.7361 34.887 54.7149 34.8548 54.6999 34.8196C54.6836 34.7841 54.6752 34.7456 54.6752 34.7065C54.6752 34.6675 54.6836 34.6289 54.6999 34.5934C54.7141 34.5578 54.7354 34.5255 54.7625 34.4984C54.7897 34.4713 54.822 34.4499 54.8576 34.4357C54.895 34.4205 54.935 34.4127 54.9754 34.4129V34.4129ZM27.4182 33.3638C27.4294 33.1901 27.491 33.0234 27.5956 32.8842C27.7001 32.7451 27.8431 32.6395 28.0069 32.5805C28.1706 32.5215 28.3481 32.5116 28.5174 32.5521C28.6867 32.5926 28.8405 32.6817 28.9598 32.8084C29.0792 32.9351 29.1589 33.0939 29.1892 33.2653C29.2196 33.4367 29.1991 33.6133 29.1304 33.7732C29.0618 33.9332 28.9478 34.0696 28.8027 34.1657C28.6575 34.2618 28.4875 34.3133 28.3134 34.3141C28.1907 34.3154 28.0691 34.2913 27.9562 34.2433C27.8433 34.1953 27.7416 34.1245 27.6575 34.0352C27.5734 33.9459 27.5087 33.8401 27.4675 33.7246C27.4264 33.609 27.4096 33.4862 27.4182 33.3638V33.3638ZM29.8091 33.3638V31.8871H29.1667V32.2463C29.0571 32.1047 28.9152 31.9915 28.7529 31.9161C28.5905 31.8407 28.4124 31.8054 28.2336 31.813C27.4049 31.813 26.7569 32.463 26.7569 33.3638C26.7569 34.2647 27.4049 34.9146 28.2336 34.9146C28.4122 34.9222 28.5901 34.887 28.7524 34.8119C28.9147 34.7369 29.0567 34.6242 29.1667 34.4832V34.8405H29.8091V33.3638ZM51.5127 33.3638C51.5235 33.1896 51.5849 33.0223 51.6895 32.8826C51.7941 32.7429 51.9372 32.6368 52.1013 32.5773C52.2654 32.5179 52.4433 32.5077 52.6132 32.5481C52.783 32.5884 52.9373 32.6776 53.0571 32.8045C53.1769 32.9314 53.257 33.0906 53.2875 33.2624C53.318 33.4343 53.2976 33.6113 53.2289 33.7717C53.1601 33.9321 53.0459 34.0689 52.9004 34.1653C52.7548 34.2617 52.5843 34.3134 52.4098 34.3141C52.2869 34.3157 52.1651 34.2918 52.052 34.2439C51.9389 34.196 51.837 34.1252 51.7526 34.0359C51.6683 33.9465 51.6035 33.8407 51.5622 33.725C51.5209 33.6093 51.504 33.4863 51.5127 33.3638V33.3638ZM53.9055 33.3638V30.7031H53.2631V32.2482C53.1533 32.1069 53.0114 31.9938 52.849 31.9184C52.6867 31.8431 52.5088 31.8076 52.3299 31.8149C51.9319 31.8346 51.5567 32.0066 51.282 32.2953C51.0073 32.584 50.854 32.9672 50.854 33.3657C50.854 33.7642 51.0073 34.1475 51.282 34.4362C51.5567 34.7248 51.9319 34.8968 52.3299 34.9165C52.5086 34.9238 52.6863 34.8884 52.8486 34.8134C53.0108 34.7384 53.1529 34.6259 53.2631 34.4851V34.8424H53.9055V33.3638ZM37.7816 32.387C38.196 32.387 38.462 32.6473 38.5285 33.1054H36.9967C37.0652 32.6777 37.3236 32.387 37.7816 32.387ZM37.795 31.8168C36.9283 31.8168 36.3221 32.4478 36.3221 33.3676C36.3221 34.2875 36.953 34.9184 37.8425 34.9184C38.283 34.9343 38.7139 34.7875 39.0531 34.506L38.7395 34.029C38.4955 34.2248 38.1933 34.3338 37.8805 34.3388C37.668 34.3565 37.4569 34.2908 37.292 34.1557C37.1271 34.0205 37.0212 33.8265 36.9967 33.6147H39.1899C39.1899 33.5349 39.2032 33.455 39.2032 33.3676C39.2032 32.4478 38.6331 31.8168 37.8007 31.8168H37.795ZM45.5547 33.3676C45.5654 33.1934 45.6269 33.0262 45.7314 32.8864C45.836 32.7467 45.9792 32.6405 46.1433 32.5811C46.3074 32.5217 46.4853 32.5115 46.6551 32.5519C46.8249 32.5922 46.9792 32.6814 47.099 32.8083C47.2188 32.9352 47.2989 33.0944 47.3295 33.2662C47.36 33.4381 47.3396 33.6151 47.2708 33.7755C47.202 33.9359 47.0878 34.0727 46.9423 34.1691C46.7968 34.2655 46.6262 34.3172 46.4517 34.3179C46.3289 34.3195 46.2071 34.2956 46.094 34.2477C45.9809 34.1998 45.8789 34.129 45.7946 34.0397C45.7103 33.9503 45.6454 33.8445 45.6041 33.7288C45.5628 33.6131 45.546 33.4901 45.5547 33.3676V33.3676ZM47.9474 33.3676V31.8909H47.305V32.2501C47.1953 32.1088 47.0533 31.9957 46.891 31.9203C46.7287 31.845 46.5507 31.8095 46.3719 31.8168C45.9739 31.8365 45.5987 32.0085 45.3239 32.2972C45.0492 32.5859 44.896 32.9691 44.896 33.3676C44.896 33.7661 45.0492 34.1494 45.3239 34.4381C45.5987 34.7267 45.9739 34.8987 46.3719 34.9184C46.5505 34.9257 46.7283 34.8903 46.8905 34.8153C47.0528 34.7403 47.1949 34.6278 47.305 34.487V34.8443H47.9474V33.3676ZM41.9285 33.3676C41.9285 34.2647 42.5519 34.9184 43.504 34.9184C43.8896 34.9377 44.2685 34.8123 44.5664 34.5668L44.2585 34.048C44.0361 34.2176 43.7648 34.3109 43.485 34.3141C43.233 34.3141 42.9913 34.214 42.8131 34.0358C42.6349 33.8575 42.5348 33.6158 42.5348 33.3638C42.5348 33.1118 42.6349 32.8701 42.8131 32.6919C42.9913 32.5137 43.233 32.4136 43.485 32.4136C43.7648 32.4167 44.0361 32.51 44.2585 32.6796L44.5664 32.1608C44.2685 31.9153 43.8896 31.7899 43.504 31.8092C43.2961 31.7974 43.0881 31.8292 42.8932 31.9026C42.6983 31.976 42.521 32.0894 42.3726 32.2355C42.2242 32.3815 42.108 32.5571 42.0315 32.7507C41.9551 32.9444 41.92 33.152 41.9285 33.36V33.3676ZM50.209 31.8092C50.0521 31.8047 49.897 31.8425 49.7598 31.9188C49.6227 31.9951 49.5087 32.1069 49.4298 32.2425V31.8833H48.7931V34.8405H49.4355V33.1852C49.4355 32.6967 49.6464 32.425 50.0665 32.425C50.2043 32.4233 50.3412 32.4484 50.4694 32.4991L50.6594 31.8928C50.5123 31.8408 50.3575 31.8138 50.2014 31.813L50.209 31.8092ZM32.9829 32.1228C32.6203 31.9054 32.2024 31.7978 31.7799 31.813C31.0311 31.813 30.5484 32.1722 30.5484 32.7633C30.5484 33.2441 30.9076 33.5406 31.5689 33.6337L31.8711 33.6774C32.2246 33.7268 32.3899 33.8199 32.3899 33.9853C32.3899 34.2152 32.1562 34.3445 31.7172 34.3445C31.3641 34.3545 31.018 34.2454 30.7346 34.0347L30.4324 34.5364C30.8072 34.7966 31.2555 34.9298 31.7115 34.9165C32.5629 34.9165 33.0589 34.5155 33.0589 33.953C33.0589 33.4341 32.6788 33.1624 32.027 33.0692L31.7229 33.0255C31.4454 32.9894 31.223 32.9343 31.223 32.7348C31.223 32.5352 31.4321 32.3889 31.7932 32.3889C32.1165 32.3936 32.4333 32.4813 32.713 32.6435L32.9829 32.1228ZM41.271 31.813C41.1143 31.8082 40.9593 31.846 40.8224 31.9223C40.6856 31.9986 40.5719 32.1106 40.4937 32.2463V31.8871H39.8589V34.8405H40.5013V33.1852C40.5013 32.6967 40.7103 32.425 41.1303 32.425C41.2682 32.4233 41.405 32.4484 41.5332 32.4991L41.7233 31.8928C41.5762 31.8406 41.4213 31.8136 41.2653 31.813H41.271ZM35.7842 31.8871H34.7333V30.9901H34.0852V31.8871H33.4922V32.4744H34.0928V33.8218C34.0928 34.5079 34.3589 34.9146 35.1172 34.9146C35.4013 34.9161 35.68 34.837 35.9211 34.6866L35.731 34.1373C35.5578 34.2394 35.3618 34.2962 35.1609 34.3027C34.8397 34.3027 34.7352 34.1126 34.7352 33.8085V32.4782H35.7918L35.7842 31.8871ZM26.1886 34.8405V32.9875C26.1998 32.8314 26.1774 32.6747 26.123 32.5279C26.0687 32.3812 25.9836 32.2477 25.8734 32.1365C25.7633 32.0253 25.6307 31.9389 25.4845 31.8831C25.3382 31.8273 25.1817 31.8034 25.0255 31.813C24.8214 31.7993 24.6174 31.8408 24.4348 31.9331C24.2522 32.0254 24.0979 32.1651 23.9879 32.3376C23.8872 32.1704 23.7434 32.0334 23.5715 31.9411C23.3996 31.8488 23.2059 31.8045 23.011 31.813C22.8411 31.8046 22.672 31.8406 22.5203 31.9176C22.3686 31.9946 22.2397 32.1099 22.1463 32.252V31.8871H21.5039V34.8405H22.152V33.2042C22.152 32.691 22.437 32.4174 22.8761 32.4174C23.3151 32.4174 23.5184 32.6967 23.5184 33.1966V34.8405H24.1665V33.2042C24.1665 32.691 24.463 32.4174 24.8906 32.4174C25.3182 32.4174 25.5387 32.6967 25.5387 33.1966V34.8405H26.1886Z"
                          fill="#231F20"
                        />
                        <path
                          d="M55.3212 25.0174V24.5859H55.2091L55.0799 24.8824L54.9506 24.5859H54.8366V25.0174H54.9164V24.6924L55.038 24.9736H55.1217L55.2433 24.6924V25.0174H55.3212ZM54.6085 25.0174V24.6601H54.753V24.5878H54.3843V24.6601H54.5287V25.0174H54.6085Z"
                          fill="#F79410"
                        />
                        <path
                          d="M42.5332 26.873H32.7988V9.37891H42.5332V26.873Z"
                          fill="#FF5F00"
                        />
                        <path
                          d="M33.4217 18.1255C33.4212 16.4415 33.8035 14.7794 34.5397 13.2649C35.2759 11.7504 36.3467 10.423 37.6712 9.38317C36.0302 8.09093 34.0586 7.28667 31.9819 7.06239C29.9052 6.8381 27.8073 7.20285 25.9282 8.11491C24.0491 9.02697 22.4647 10.4495 21.3561 12.2198C20.2476 13.9901 19.6597 16.0367 19.6597 18.1255C19.6597 20.2142 20.2476 22.2608 21.3561 24.0311C22.4647 25.8014 24.0491 27.2239 25.9282 28.136C27.8073 29.048 29.9052 29.4128 31.9819 29.1885C34.0586 28.9642 36.0302 28.16 37.6712 26.8677C36.3466 25.8279 35.2757 24.5006 34.5395 22.9861C33.8033 21.4715 33.4211 19.8094 33.4217 18.1255"
                          fill="#EB001B"
                        />
                        <path
                          d="M55.6617 18.1259C55.6614 20.2131 55.0738 22.2582 53.9662 24.0273C52.8585 25.7965 51.2754 27.2182 49.3979 28.1301C47.5203 29.042 45.4241 29.4073 43.3488 29.1841C41.2735 28.961 39.3028 28.1584 37.6621 26.8682C38.9845 25.8268 40.0535 24.499 40.7885 22.9847C41.5235 21.4704 41.9054 19.8091 41.9054 18.1259C41.9054 16.4426 41.5235 14.7813 40.7885 13.267C40.0535 11.7528 38.9845 10.425 37.6621 9.38359C39.3031 8.09412 41.2736 7.2922 43.3486 7.06943C45.4237 6.84666 47.5195 7.21203 49.3968 8.12381C51.2741 9.03558 52.857 10.457 53.9648 12.2256C55.0727 13.9943 55.6607 16.0389 55.6617 18.1259Z"
                          fill="#F79E1B"
                        />
                      </g>
                      <rect
                        x="83.3335"
                        width="75.3333"
                        height="42"
                        rx="6"
                        fill="#F2F3F5"
                      />
                      <g clip-path="url(#clip1_2348_23409)">
                        <path
                          d="M109.739 13.2095L105.533 23.8407L103.833 14.8033C103.763 14.3608 103.538 13.9576 103.198 13.6661C102.858 13.3745 102.425 13.2136 101.977 13.2122H95.1006L95.0078 13.6656C96.4186 13.9732 98.0203 14.4612 98.9855 14.9915C99.5795 15.3151 99.7493 15.5962 99.9455 16.3652L103.165 28.8287H107.437L113.982 13.2095H109.739ZM115.716 13.2095L112.375 28.8287H116.413L119.755 13.2095H115.716ZM138.879 17.4312L140.105 23.2944H136.753L138.879 17.4312ZM138.288 13.2095C137.92 13.2063 137.559 13.3138 137.253 13.5181C136.946 13.7224 136.708 14.014 136.57 14.3551L130.505 28.8287H134.748L135.591 26.4951H140.773L141.261 28.8287H145L141.738 13.2095H138.288ZM120.855 18.0783C120.829 20.3297 122.862 21.5813 124.393 22.3212C125.968 23.0875 126.495 23.5781 126.49 24.2623C126.49 25.323 125.233 25.7738 124.072 25.7924C122.629 25.8283 121.201 25.4941 119.924 24.8218L119.192 28.2427C120.136 28.6776 121.879 29.0541 123.685 29.0727C127.927 29.0727 130.707 26.9778 130.72 23.7293C130.736 19.6084 125.018 19.3803 125.058 17.5373C125.071 16.9778 125.604 16.3837 126.771 16.2299C128.136 16.1023 129.51 16.3441 130.749 16.93L131.46 13.6179C130.251 13.1647 128.972 12.9304 127.681 12.9258C123.687 12.9258 120.876 15.0472 120.852 18.0862"
                          fill="url(#paint0_linear_2348_23409)"
                        />
                      </g>
                      <rect
                        x="166.667"
                        width="75.3333"
                        height="42"
                        rx="6"
                        fill="#F2F3F5"
                      />
                      <path
                        d="M189.918 17.8108L185.278 15.7101C184.936 15.532 184.936 15.0692 185.278 14.8912L190.488 11.2238C190.831 11.0102 191.325 11.2595 191.325 11.6511V17.0275C191.325 17.2055 191.211 17.3479 191.097 17.4547C190.945 17.5615 190.679 17.7395 190.526 17.8108C190.298 17.9176 190.07 17.9176 189.918 17.8108Z"
                        fill="#FF5F00"
                      />
                      <path
                        d="M198.513 32.5868L192.998 29.1331C192.77 28.9907 192.656 28.7771 192.656 28.5278C192.656 23.8992 192.656 10.0133 192.656 10.0133C192.656 9.4436 193.341 9.08755 193.873 9.408L198.855 12.5056C199.388 12.8617 199.73 13.4314 199.73 14.0366V31.9815C199.73 32.5868 199.045 32.9072 198.513 32.5868Z"
                        fill="#FF5F00"
                      />
                      <path
                        d="M204.558 17.0989V18.0959C204.558 18.0959 204.558 18.1315 204.596 18.1315H206.992C206.992 18.1315 207.03 18.1315 207.03 18.1671V19.6269C207.03 19.6269 207.03 19.6625 206.992 19.6625H204.596C204.596 19.6625 204.558 19.6625 204.558 19.6981V21.5851C204.558 21.5851 204.558 21.6207 204.52 21.6207H202.618C202.618 21.6207 202.58 21.6207 202.58 21.5851V15.4967C202.58 15.4967 202.58 15.4611 202.618 15.4611H207.714C207.714 15.4611 207.752 15.4611 207.752 15.4967V17.0633C207.752 17.0633 207.752 17.0989 207.714 17.0989H204.558Z"
                        fill="#FF5F00"
                      />
                      <path
                        d="M207.793 18.5229C207.793 16.707 209.314 15.3184 211.254 15.3184C213.194 15.3184 214.715 16.707 214.715 18.5229C214.715 20.3387 213.194 21.7273 211.254 21.7273C209.314 21.7273 207.793 20.3387 207.793 18.5229ZM212.851 18.5229C212.851 17.6684 212.167 17.0275 211.254 17.0275C210.341 17.0275 209.657 17.6684 209.657 18.5229C209.657 19.3774 210.341 20.0183 211.254 20.0183C212.205 20.0183 212.851 19.3774 212.851 18.5229Z"
                        fill="#FF5F00"
                      />
                      <path
                        d="M217.489 19.6622H217.07C217.07 19.6622 217.032 19.6622 217.032 19.6978V21.5493C217.032 21.5493 217.032 21.5849 216.994 21.5849H215.169C215.169 21.5849 215.131 21.5849 215.131 21.5493V15.4608C215.131 15.4608 215.131 15.4252 215.169 15.4252H217.869C219.162 15.4252 220.265 16.4222 220.227 17.6327C220.227 18.3448 219.846 18.9145 219.238 19.2706C219.238 19.2706 219.2 19.3062 219.238 19.3062L220.493 21.5137C220.493 21.5493 220.493 21.5493 220.455 21.5493H218.477L217.489 19.6622ZM217.032 18.1668C217.032 18.2024 217.032 18.2024 217.032 18.1668L217.755 18.2024C218.135 18.2024 218.401 17.9888 218.401 17.6327C218.401 17.2767 218.135 17.0631 217.755 17.0631H217.07C217.07 17.0631 217.032 17.0631 217.032 17.0987V18.1668Z"
                        fill="#FF5F00"
                      />
                      <path
                        d="M206.421 26.178V28.4923H204.596V26.178L202.58 22.4039C202.58 22.3682 202.58 22.3682 202.618 22.3682H204.558C204.558 22.3682 204.596 22.3682 204.596 22.4039L205.471 24.3265C205.471 24.3621 205.509 24.3621 205.547 24.3265L206.459 22.4039C206.459 22.4039 206.459 22.3682 206.497 22.3682H208.437C208.475 22.3682 208.475 22.4039 208.475 22.4039L206.421 26.178C206.421 26.1424 206.459 26.1424 206.421 26.178Z"
                        fill="#FF5F00"
                      />
                      <path
                        d="M207.754 25.4302C207.754 23.6144 209.275 22.2258 211.215 22.2258C213.154 22.2258 214.675 23.6144 214.675 25.4302C214.675 27.2461 213.154 28.6347 211.215 28.6347C209.275 28.6347 207.754 27.2461 207.754 25.4302ZM212.85 25.4302C212.85 24.5757 212.165 23.9348 211.253 23.9348C210.34 23.9348 209.655 24.5757 209.655 25.4302C209.655 26.2847 210.34 26.9256 211.253 26.9256C212.165 26.89 212.85 26.2847 212.85 25.4302Z"
                        fill="#FF5F00"
                      />
                      <path
                        d="M215.17 26.4272V22.3682C215.17 22.3682 215.17 22.3326 215.208 22.3326H216.958C216.958 22.3326 216.996 22.3326 216.996 22.3682V26.1423C216.996 26.5696 217.338 26.9256 217.908 26.9256C218.479 26.9256 218.783 26.5696 218.783 26.1423V22.3682C218.783 22.3682 218.783 22.3326 218.821 22.3326H220.608C220.608 22.3326 220.646 22.3326 220.646 22.3682V26.4272C220.646 27.7445 219.544 28.6347 217.908 28.6347C216.273 28.6347 215.17 27.7445 215.17 26.4272Z"
                        fill="#FF5F00"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2348_23409"
                          x1="94.9999"
                          y1="20.9979"
                          x2="145"
                          y2="20.9979"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#241F5D" />
                          <stop offset="1" stop-color="#034EA1" />
                        </linearGradient>
                        <clipPath id="clip0_2348_23409">
                          <rect
                            width="35.9897"
                            height="28"
                            fill="white"
                            transform="translate(19.6719 7)"
                          />
                        </clipPath>
                        <clipPath id="clip1_2348_23409">
                          <rect
                            width="50"
                            height="16.1469"
                            fill="white"
                            transform="translate(95 12.9258)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div style={{background: "white"}}>
                <div
                  style={{
                    background: "black",
                    borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  <div className="p-4">
                    <div style={{ color: "white", paddingBottom: 20 }}>
                      {" "}
                      <span style={{ fontSize: 20, fontWeight: 700 }}>
                        Totals
                      </span>{" "}
                      <span
                        style={{
                          float: "right",
                          fontSize: 20,
                          fontWeight: 700,
                        }}
                      >
                        R {orderTotal.toFixed(2)}
                      </span>{" "}
                    </div>
                    <button

                    type='submit'
                      style={{
                        width: "100%",
                        height: 48,
                        borderRadius: 8,
                        border: "solid #97E128 1px",
                        margin: 5,
                        padding: "auto",
                        backgroundColor: "#97E128",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 18,
                          color: "black",
                          fontWeight: 600,
                        }}
                      >
                        Continue to Payment{" "}
                        <span>
                          <svg
                            width="20"
                            height="14"
                            viewBox="0 0 20 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.831055 5.91406H19.1181V11.8851C19.1181 12.9896 18.2226 13.8851 17.1181 13.8851H2.83106C1.72649 13.8851 0.831055 12.9896 0.831055 11.8851V5.91406Z"
                              fill="black"
                            />
                            <path
                              d="M0.831055 2.33398C0.831055 1.22941 1.72649 0.333984 2.83105 0.333984H17.1181C18.2226 0.333984 19.1181 1.22942 19.1181 2.33398V3.52239H0.831055V2.33398Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default checkout