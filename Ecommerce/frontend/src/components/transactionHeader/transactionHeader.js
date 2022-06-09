import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../navigationbar/logo.png";

function TransactionHeader({transaction}) {
  return (
    <>
      <div className="container-fluid" style={{ background: "white" }}>
        <div className="container" style={{ padding: "" }}>
          <span style={{ padding: "20px 0px", display: "flex" }}>
            <span>
              <svg
                width="39"
                height="38"
                viewBox="0 0 39 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.4007 19C38.4007 29.4932 29.8042 38 19.2004 38C8.5965 38 0 29.4932 0 19C0 8.50679 8.5965 0 19.2004 0C29.8042 0 38.4007 8.50679 38.4007 19Z"
                  fill="#B2FA00"
                />
                <path
                  d="M30.7777 15.9395C29.5939 15.0303 28.2902 13.65 28.464 11.7496C29.3497 11.4998 29.8588 10.9591 30.0989 10.4513C30.459 9.70584 30.4424 8.93994 29.7595 8.18223C29.6726 8.08803 29.5153 8.15356 29.5236 8.28053C29.5525 8.83754 29.5815 9.82052 28.315 10.0785C26.9202 10.3652 24.5238 10.0212 23.7167 9.28398C22.9717 8.60409 22.893 7.78904 23.5677 6.51937C23.6298 6.40469 23.5056 6.28182 23.3897 6.33507C22.7689 6.63405 21.6348 7.22383 21.6597 8.91946C21.6762 10.0458 22.3384 10.9509 23.2531 11.3195C18.9073 12.6466 17.1151 11.0492 12.1816 10.9796C8.07577 10.9223 7.11554 14.3053 7.34318 17.7703C7.43424 19.1383 7.55013 20.7561 7.82744 21.8578C8.05094 22.7589 8.55588 23.2831 8.51035 24.4258C8.47724 25.3474 8.34894 25.7242 8.49794 26.6006C8.53105 26.7849 8.64694 26.9037 8.84147 26.9693C9.34227 27.1413 9.93414 27.0553 10.1742 26.9815C10.3977 26.916 10.5674 26.7972 10.5219 26.6006C10.1204 24.8722 9.74789 22.5336 10.1411 20.9813C10.1949 20.7602 10.3853 20.5431 10.7288 20.7274C11.2834 21.0305 11.8629 21.4974 12.6244 22.2879C13.775 23.4838 14.8636 25.8347 15.0333 27.6082C15.0581 27.8785 15.1905 28.1038 15.4182 28.1816C16.0307 28.3987 16.6557 28.3208 16.9827 28.1202C17.1234 28.0341 17.1979 27.9031 17.1607 27.7556C16.7426 26.0764 15.3809 24.0531 15.2609 22.2674C15.2361 21.9029 15.3644 21.8701 15.6624 21.9192C16.1218 21.9971 16.4819 22.0257 16.8171 22.0421C16.9289 22.0462 17.0406 22.0954 17.111 22.1814C18.4975 23.8606 20.062 26.2402 19.9503 28.714C19.9461 28.8533 20.0082 28.9802 20.1158 29.0663C20.5918 29.4554 20.6001 30.3236 20.6787 31.1182C20.6953 31.2861 20.7988 31.4336 20.956 31.4909C21.5313 31.708 22.2639 31.7449 22.8723 31.5114C22.98 31.4704 23.0503 31.368 23.0338 31.2575C22.8061 29.697 21.5603 28.3905 21.8542 26.0559C21.9163 25.548 22.3219 24.819 22.595 23.877C23.2448 21.6448 23.0834 20.9363 23.7208 19.6666C24.1306 18.8475 25.0618 17.7908 26.3573 18.5321C27.3506 19.0973 28.0418 19.2161 28.7537 19.1219C29.9954 18.958 30.7942 17.8932 31.0839 16.775C31.1502 16.4638 31.0343 16.1361 30.7777 15.9395Z"
                  fill="black"
                />
              </svg>
            </span>
            <span
              style={{
                fontSize: "20px",
                fontWeight: 700,
                padding: "5px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              flash
            </span>
            <span
              style={{
                fontSize: "15px",
                fontWeight: 200,
                justifyContent: "center",
                alignItems: "center",
                padding: "10px 0px",
              }}
            >
              Voucher Store
            </span>
          </span>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ background: "black", borderRadius: "0px 0px 36px 36px", color: "white" }}
      >
        <div className="container p-3">
          <p style={{color: "white", fontWeight: "700", fontSize: "12px", padding: "30px 0px 5px", margin: "0px"}}>PAYMENT CONFIRMATION</p>
          <p style={{color: "white", fontWeight: "700", fontSize: "40px", fontFamily: "Gilroy-bold", lineHeight: "3rem", padding: "30px 0px 15px", margin: "0px"}}>Your Voucher <span style={{color: "#B2FA00"}}>is {transaction.status}</span></p>
          {/* <p style={{color: "white", fontWeight: "200", fontSize: "14px", padding: "15px 0px 30px", margin: "0px"}}>HI MIKHAIL</p> */}
          {/* <p style={{color: "white", fontWeight: "200", fontSize: "14px", padding: "0px"}}>Thanks for shopping with Flash Voucher Store! Your voucher details are below. Enjoy!</p> */}
        </div>
      </div>
    </>
  );
}

export default TransactionHeader;
