import React from "react";

function atc({handleClick, item}) {
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: 25,
        borderRadius: 20,
      }}
    >
      <button
        style={{
          width: 240,
          height: 62,
          borderRadius: 8,
          border: "solid white 1px",
          margin: 5,
          padding: "auto",
          backgroundColor: "transparent",
        }}
      >
        <span style={{ fontSize: 18, color: "white", fontWeight: 600 }}>
          Save to Wishlist{" "}
          <span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.46977 2.97295C7.09888 -0.917187 0.162598 -0.332622 0.162598 5.54509C0.162598 8.46801 2.28031 12.3688 8.46977 16.3333C14.6695 12.3688 16.7872 8.46801 16.7872 5.54509C16.7872 -0.300736 9.86112 -0.89593 8.46977 2.97295Z"
                fill="white"
              />
            </svg>
          </span>
        </span>
      </button>
      <button
        style={{
          width: 240,
          height: 62,
          borderRadius: 8,
          border: "solid #97E128 1px",
          margin: 5,
          padding: "auto",
          backgroundColor: "#97E128",
        }}
        onClick={() => handleClick(item)}
      >
        <span style={{ fontSize: 18, color: "black", fontWeight: 600 }}>
          Add to Cart{" "}

        </span>
      </button>
    </div>
  );
}

export default atc;
