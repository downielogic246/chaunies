import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";

const OrderBtn = () => {
  //   const [btnAnimate, setBtnAnimate] = useState("orderbtn");

  //   const animateBtn = () => {
  //     setBtnAnimate("");
  //   };
  return (
    <div className="orderbtn-container ">
      <Link to="/chaunies.io/order" className="orderbtn ">
        order <i className="fa-solid fa-cart-shopping"></i>
      </Link>
    </div>
  );
};

export default OrderBtn;
