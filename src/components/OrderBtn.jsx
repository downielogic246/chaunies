import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";

const OrderBtn = () => {
  //   const [btnAnimate, setBtnAnimate] = useState("orderbtn");

  //   const animateBtn = () => {
  //     setBtnAnimate("");
  //   };
  return (
    <div className="orderbtn-container fa-beat-fade">
      <Link to="/chaunies.io/order" className="orderbtn ">
        order now <i className="fa-regular fa-hand-pointer"></i>
      </Link>
    </div>
  );
};

export default OrderBtn;
