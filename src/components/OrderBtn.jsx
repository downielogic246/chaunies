import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";

const OrderBtn = ({ orderStyle }) => {
  //   const [btnAnimate, setBtnAnimate] = useState("orderbtn");

  //   const animateBtn = () => {
  //     setBtnAnimate("");
  //   };
  return (
    <div className="orderbtn-container " style={{ display: orderStyle }}>
      <Link to="/chaunies.io/order" className="orderbtn ">
        order now<i className="fa-solid fa-cart-shopping"></i>
      </Link>
    </div>
  );
};

export default OrderBtn;
